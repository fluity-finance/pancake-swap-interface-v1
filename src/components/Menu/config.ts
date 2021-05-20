import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://fluity.finance/#/farm',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      {
        label: 'V1 Exchange',
        href: '/swap',
      },
      {
        label: 'V1 Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/fluity-finance/pancake-swap-interface-v1',
      },
      {
        label: 'Docs',
        href: 'https://docs.pancakeswap.finance',
      }
    ],
  },
]

export default config
