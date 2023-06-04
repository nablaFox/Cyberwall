export interface Theme {
  logo?: string

  nav: NavItem[]

  footer?: Footer

  description?: string

  title?: string
}

export type NavItem = NavItemWithLink | NavItemWithChildren

export interface NavItemWithLink {
  text: string
  link?: string
}

export interface NavItemWithChildren {
  items: NavItemWithLink[]
}

export interface FooterGroup {
  text?: string
  items: NavItemWithLink[]
}

export interface Footer {
  message?: string
  copyright?: string
  items: FooterGroup[]
}