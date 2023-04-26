export type NavItem = NavItemWithChildren | NavItemWithLink

export interface NavItemWithLink {
  text: string
  link: string
}

export interface NavItemWithChildren {
  text: string
  items: NavItemWithLink[]
}