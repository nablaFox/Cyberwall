import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@/types'

export default defineConfigWithTheme<ThemeConfig>({
  title: 'Cyberwall',
  description: 'A cyber secruity center',
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
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Chi Siamo', link: '/about' },
      { text: 'Soluzioni', items: [
          { text: 'soluzione', link: '/solutions/1' },
          { text: 'soluzione', link: '/solutions/1' },
          { text: 'soluzione', link: '/solutions/1' }
        ]
      },
      { text: 'Il team', link: '/pcto' },
      { text: 'Contatti', items: [
          { text: 'Posizione', link: '/contacts/1' },
          { text: 'Supporto', link: '/contacts/2' }
        ]
      }
    ],
    footer: {
      message: 'Cyberwall Srl è una impresa registrata in Italia. Codice Fiscale: 12345678',
      copyright: '© 2023 Cyberwall Srl - Tutti i diritti riservati',
      items: [
        { text: 'Contatti', items: [
            { text: 'Cyberwall Srl' },
            { text: 'Via Veneto, 4' },
            { text: 'Pescara, PE' },
            { text: '65100' },
          ]
        },
        { text: 'Connettiti', items: [
            { text: 'hello@cyberwall.com', link: '/' },
            { text: '+39 123 456 789', link: '/' },
          ]
        },
        { 
          text: 'Informazioni', items: [
            { text: 'Termini e Condizioni', 'link': '/' },
            { text: 'Privacy Policy', 'link': '/' },
            { text: 'Cookie Policy', 'link': '/' },
            { text: 'Accessibilità', 'link': '/' },
            { text: 'Sitemap', 'link': '/' }
          ]
        }
      ]
    }
  }
})