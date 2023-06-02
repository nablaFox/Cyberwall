import { OpenAIChatMessage } from '@/plugins/openai'

export const useChat = () => {
  const chat = reactive<OpenAIChatMessage[]>([])
  const { $createChatCompletion } = useNuxtApp()

  const send = async (message: string) => {
    chat.push({
      content: message,
      role: 'user'
    })
    
    $createChatCompletion(chat)
  }

  return {
    send,
    chat
  }
}