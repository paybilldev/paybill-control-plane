import { PrivacySettings } from 'common'

const footerData = [
  {
    title: 'Company',
    links: [
      {
        text: 'Company',
        url: '/company',
      },
      {
        text: 'Careers',
        url: '/careers',
      },
      {
        text: 'Pricing',
        url: '/pricing',
      },
      {
        text: 'Contact Sales',
        url: '/contact/sales',
      },
      {
        text: 'Events',
        url: '/events',
      },
      {
        text: 'Brand Assets',
        url: '/brand-assets',
      },
    ],
  },
  {
    title: 'Developers',
    links: [
      {
        text: 'Apps',
        url: '/apps',
      },
      {
        text: 'Features',
        url: '/features',
      },
      {
        text: 'Documentation',
        url: '/docs',
      },
      {
        text: 'Release Notes',
        url: '/docs/changelog',
      },
      {
        text: 'Contributing',
        url: 'https://github.com/paybilldev/paybill/blob/master/CONTRIBUTING.md',
      },
      {
        text: 'Security & Compliance',
        url: '/security',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        text: 'Blog',
        url: '/blog',
      },
      {
        text: 'Support',
        url: '/support',
      },
      {
        text: 'System Status',
        url: 'https://paybill.statuspage.io/',
      },
      {
        text: 'RSS',
        url: '/rss.xml',
      },
      {
        text: 'Sitemap',
        url: '/sitemap.xml',
      },
      {
        text: 'Privacy Settings',
        component: PrivacySettings,
      },
    ],
  },
  {
    title: 'Legal',
    links: [
      {
        text: 'Terms of Service',
        url: '/legal/terms',
      },
      {
        text: 'Privacy Policy',
        url: '/legal/privacy',
      },
      {
        text: 'Support Policy',
        url: '/legal/support-policy',
      },
      {
        text: 'Acceptable Use Policy',
        url: '/legal/aup',
      },
      {
        text: 'Service Level Agreement',
        url: '/legal/sla',
      },
      {
        text: 'Transfer Impact Assessment',
        url: '/legal/tia',
      },
      {
        text: 'Data Processing Agreement',
        url: '/legal/dpa',
      },
    ],
  },
]

export default footerData
