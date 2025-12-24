import { promises as fs } from 'fs'
import { readFile } from 'fs/promises';
import path from 'path'
import { fileURLToPath } from 'url'

const jobs = JSON.parse(
  await readFile(new URL('../data/json/jobs.json', import.meta.url), 'utf8')
);

// Latest Blog Posts
import { allBlogPosts } from '../.contentlayer/generated/index.mjs'

/**
 * Fixes Safari dates sorting bug
 */
const sortDates = (a, b, direction = 'desc') => {
  const isAsc = direction === 'asc'
  var reg = /-|:|T|\+/ //The regex on which matches the string should be split (any used delimiter) -> could also be written like /[.:T\+]/
  var parsed = [
    //an array which holds the date parts for a and b
    a.date.split(reg), //Split the datestring by the regex to get an array like [Year,Month,Day]
    b.date.split(reg),
  ]
  var dates = [
    //Create an array of dates for a and b
    new Date(parsed[0][0], parsed[0][1], parsed[0][2]), //Constructs an date of the above parsed parts (Year,Month...
    new Date(parsed[1][0], parsed[1][1], parsed[1][2]),
  ]
  return isAsc ? dates[0] - dates[1] : dates[1] - dates[0] //Returns the difference between the date (if b > a then a - b < 0)
}

const latestBlogPosts = allBlogPosts
  .sort(sortDates)
  .slice(0, 2)
  .map(({ title, url, description }) => ({ title, url, description }))

let stars = 0


// Create folder for static content
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const folderPath = path.join(__dirname, '../.contentlayer/generated/staticContent')
try {
  await fs.mkdir(folderPath, { recursive: true })
} catch (error) {
  if (error.code !== 'EEXIST') {
    throw error
  }
  // Folder already exists, continue silently
}

const fetchTwitterData = async () => {
  const bearerToken = process.env.TWITTER_BEARER_TOKEN;
  if (!bearerToken) throw new Error('TWITTER_BEARER_TOKEN not set');

  const res = await fetch('https://api.twitter.com/2/users/by/username/paybilldev?user.fields=public_metrics', {
    headers: { Authorization: `Bearer ${bearerToken}` }
  });

  if (!res.ok) throw new Error(`Twitter API Error: ${res.statusText}`);
  const data = await res.json();

  return {
    followers: data?.data?.public_metrics?.followers_count || 0,
    tweets: data?.data?.public_metrics?.tweet_count || 0
  };
};

let twitterStats = {};

try {
  twitterStats = await fetchTwitterData()
} catch (error) {
  twitterStats = { followers: 0, tweets: 0 };
}

const fetchDiscordData = async () => {
  const guildId = 'YOUR_DISCORD_GUILD_ID';
  const botToken = process.env.DISCORD_BOT_TOKEN;
  if (!botToken) throw new Error('DISCORD_BOT_TOKEN not set');

  const res = await fetch(`https://discord.com/api/v10/guilds/${guildId}?with_counts=true`, {
    headers: { Authorization: `Bot ${botToken}` }
  });

  if (!res.ok) throw new Error(`Discord API Error: ${res.statusText}`);
  const data = await res.json();

  return {
    members: data?.approximate_member_count || 0,
    online: data?.approximate_presence_count || 0
  };
};


let discordStats = {};

try {
  discordStats = await fetchDiscordData()
} catch (error) {
  discordStats = { members: 0, online: 0 };
}

// Write static content to file
const filePath = path.join(__dirname, '../.contentlayer/generated/staticContent/_index.json')
await fs.writeFile(
  filePath,
  JSON.stringify({
    latestBlogPosts,
    jobsCount: jobs.length,
    twitter: twitterStats,
    discord: discordStats
  }),
  'utf8'
);
