// AIAssistant.tsx

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export const AIAssistant = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return
    const newMessages: Message[] = [...messages, { role: 'user', content: input }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })
      const data = await res.json()

      if (!data || typeof data.reply !== 'string') {
        throw new Error('Invalid response from server')
      }

      setMessages([...newMessages, { role: 'assistant', content: data.reply }])
    } catch (error) {
      console.error('Chat assistant error:', error)
      setMessages([...newMessages, { role: 'assistant', content: 'Something went wrong. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-[#519FF4] dark:bg-[#519FF4] border border-neutral-700 text-white rounded-full shadow-lg hover:shadow-xl transition"
      >
        {open ? <XMarkIcon className="w-5 h-5" /> : <ChatBubbleLeftRightIcon className="w-5 h-5 text-white" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-6 z-50 w-[320px] sm:w-[400px] bg-black text-white border border-neutral-800 rounded-xl shadow-xl flex flex-col overflow-hidden"
          >
            <div className="p-4 border-b border-neutral-800 font-semibold text-white bg-neutral-900">
              InferenceStack Assistant
              <p className="mt-1 text-xs text-neutral-400 font-normal">
                Ask me anything about AI infrastructure, consulting, or building production-grade LLM systems.
              </p>
            </div>
            <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-96 text-sm">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`rounded-lg px-3 py-2 whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-neutral-800 text-right ml-auto'
                      : 'bg-neutral-700 text-left mr-auto'
                  }`}
                >
                  {msg.content}
                </div>
              ))}
              {loading && <p className="text-neutral-500 text-xs">Thinking...</p>}
            </div>
            <div className="p-3 border-t border-neutral-800 bg-neutral-900">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  sendMessage()
                }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 text-sm"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="px-4 py-2 rounded-md bg-white text-black text-sm font-semibold hover:bg-gray-200 transition"
                >
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
