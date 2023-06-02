import { OpenAIExt } from 'openai-ext'

export interface OpenAIChatMessage {
  role: 'assistant' | 'user' | 'system'
  content: string
}

declare module '#app' {
  interface NuxtApp {
    $createChatCompletion: (messages: OpenAIChatMessage[]) => void
  }
}

export default defineNuxtPlugin(() => {
  const context = [
    { role: 'system', content: 'You are a helpful customer assistent.' },
    { role: 'system', content: 'Your must provide information about a hypotetical cybersecurity company, called Cyberwall.' },
    { role: 'system', content: 'You must answer questions about the company and its products.' },
    { role: 'user', content: 'Ciao' },
    { role: 'assistant', content: 'Ciao! Benvenuto in Cyberwall, come posso aiutarti?' },
    { role: 'user', content: 'Ho alcune domande riguardo Cyberwall' },
    { role: 'assistant', content: 'Cyberwall è una impresa di Cyber Secuirity che offre numerose soluzioni adatte alle esigenze dei nostri clienti!' },
    { role: 'user', content: 'Quanto costa un firewall?' },
    { role: 'assistant', content: 'Il prezzo di un firewall dipende dalle sue caratteristiche. Per esempio, un firewall con un throughput di 1 Gbps costa 1000€.' },
  ]

  const createChatCompletion = async (chat: OpenAIChatMessage[]) => {
    const messages = [...context, ...chat]

    chat.push({
      content: '...',
      role: 'assistant'
    })

    OpenAIExt.streamClientChatCompletion({
      model: 'gpt-3.5-turbo',
      messages,
    }, {
      apiKey: useRuntimeConfig().public.openaiApiKey,
      handler: {
        onContent: (content) => {
          chat.at(-1) !.content = content
        }
      }
    })
  }

  return {
    provide: {
      createChatCompletion: createChatCompletion
    }
  }
})