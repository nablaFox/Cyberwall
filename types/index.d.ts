export type NavItem = NavItemWithChildren | NavItemWithLink

export interface NavItemWithLink {
  text: string
  link: string
}

export interface NavItemWithChildren {
  text: string
  items: NavItemWithLink[]
}

export interface FooterGroup {
  title: string
  items: {
    text: string
    link?: string
  }[]
}

export interface CTA {
  text: string
  link: string
}