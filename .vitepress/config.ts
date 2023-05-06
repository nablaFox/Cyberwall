import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@/types/theme'

export default defineConfigWithTheme<ThemeConfig>({
  title: 'Cyberwall',
  description: 'Marketing Landing Page',
  srcDir: 'src',
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    ],
    [
      'link',
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,600;0,700;0,800;1,400&display=swap' },
    ]
  ],
  themeConfig: {
    logo: './images/logo.svg',
  }
})