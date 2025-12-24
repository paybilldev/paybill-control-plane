import path from 'path'

export const env = {
  PLATFORM_URL: process.env.PLATFORM_URL,
  API_URL: process.env.API_URL,
  EMAIL: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD,
  PROJECT_REF: process.env.PROJECT_REF || 'default'
}

export const STORAGE_STATE_PATH = path.join(__dirname, './playwright/.auth/user.json')
