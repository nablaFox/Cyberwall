export interface Config {
  logo?: string

  nav?: NavItem[]

  footer?: Footer
}

export type NavItem = NavItemWithLink | NavItemWithChildren

export interface CTA extends NavItemWithLink {}

export interface NavItemWithLink {
  text: string
  link?: string
}

export interface NavItemWithChildren {
  text?: string
  items: NavItemWithLink[]
}

export interface Footer {
  message?: string
  copyright?: string
  items: NavItemWithChildren[]
}