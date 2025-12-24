'use client'

import { Database, LogOut, Settings, UserIcon } from 'lucide-react'
import { logOut, menuItem } from 'common'

import { useRouter } from 'next/compat/router'
import { User } from 'platform-api-types'

const useDropdownMenu = (user: User | null) => {
  const router = useRouter()

  const menu: menuItem[][] = [
    [
      {
        label: user?.email ?? "You're logged in",
        type: 'text',
        icon: UserIcon,
      },
      {
        label: 'Account Preferences',
        icon: Settings,
        href: '/dashboard/account/me',
      },
      {
        label: 'All Projects',
        icon: Database,
        href: '/dashboard/projects',
      },
    ],
    [
      {
        label: 'Theme',
        type: 'theme',
      },
    ],
    [
      {
        label: 'Logout',
        type: 'button',
        icon: LogOut,
        onClick: async () => {
          await logOut()
          router?.reload()
        },
      },
    ],
  ]

  return menu
}

export default useDropdownMenu
