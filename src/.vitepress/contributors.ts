export interface Contributor {
  name: string
  avatar: string
}

export interface CoreTeam {
  avatar: string
  name: string
  title: string
  links?: object
}

export const teamMembers: CoreTeam[] = [
  {
    avatar: 'https://cdn.discordapp.com/avatars/927200461377929246/9d1d9eea1e720ffb76afa123cf121a90.png?size=2048',
    name: 'Zariel',
    title: 'Owner & Developer',
    links: [
      { icon: 'github', link: 'https://github.com/Jonathan5508' },
      { icon: 'discord', link: 'https://discord.com/users/927200461377929246' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/946247029816967179/4066ed43b3f987ec53387f9f0467271e.png?size=2048',
    name: 'bailey<3',
    title: 'Co Owner',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/946247029816967179' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/737459216175857686/07eaa6bb5381107850279eeac3ed9ebe.png?size=256',
    name: 'Elon',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/Elon10' },
      { icon: 'discord', link: 'https://discord.com/users/737459216175857686' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/250807464432369665/d8f1fa0cf80e709a21c261d5035fbbd2.png?size=2048',
    name: 'EpicGamer Girl',
    title: 'Graphics & Administration',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/250807464432369665' }
    ]
  },
]