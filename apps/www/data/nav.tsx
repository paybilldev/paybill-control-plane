import DevelopersDropdown from '~/components/layouts/Nav/DevelopersDropdown'
import { AppsDropdown } from '~/components/layouts/Nav/AppsDropdown'
import { data as DevelopersData } from '~/data/developers'
import { MainApps } from '~/data/apps'
import { FeaturesDropdown } from '~/components/layouts/Nav/FeaturesDropdown'
import { MainFeatures } from './features'

export const getMenu = () => ({
  primaryNav: [
    {
      title: 'Features',
      hasDropdown: true,
      dropdown: <FeaturesDropdown />,
      dropdownContainerClassName: 'rounded-xl',
      subMenu: MainFeatures,
    },
    {
      title: 'Developers',
      hasDropdown: true,
      dropdown: <DevelopersDropdown />,
      dropdownContainerClassName: 'rounded-xl',
      subMenu: DevelopersData,
    },
    {
      title: 'Apps',
      hasDropdown: true,
      dropdown: <AppsDropdown />,
      dropdownContainerClassName: 'rounded-xl',
      subMenu: MainApps,
    },
    {
      title: 'Pricing',
      url: '/pricing',
    },
    {
      title: 'Docs',
      url: '/docs',
    },
    {
      title: 'Blog',
      url: '/blog',
    },
  ],
})
