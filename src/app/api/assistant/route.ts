// File: src/app/api/assistant/route.ts

import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { db } from '@/lib/db/drizzle'
import { chatLogs } from '@/lib/db/schema'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const SYSTEM_PROMPT = `
You are InferenceStack Assistant, a helpful and highly technical AI created by Matt Vegas. You are designed to answer questions about InferenceStack.com — a consultancy and portfolio focused on building production-grade AI systems, infrastructure, and LLM-powered applications. Your answers should be practical, focused, and conversational.

If the question is outside of that scope, politely redirect the user to contact Matt directly at matt.vegas@inference-stack.com.
`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!Array.isArray(messages)) {
      return new NextResponse('Invalid payload', { status: 400 })
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
    })

    const reply = response.choices?.[0]?.message?.content || 'Sorry, no response received.'

    await db.insert(chatLogs).values({
      userMessage: messages[messages.length - 1]?.content,
      assistantResponse: reply,
      fullHistory: JSON.stringify(messages)
    })

    return NextResponse.json({ reply })
  } catch (err) {
    console.error('[AI Assistant Error]', err)
    return new NextResponse('Server error', { status: 500 })
  }
}
