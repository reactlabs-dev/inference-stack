// File: src/app/api/subscribe/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db/drizzle'
import { leads } from '@/lib/db/schema'
import { ServerClient } from 'postmark'

const POSTMARK_API_KEY = process.env.POSTMARK_API_KEY!
const FROM_EMAIL = process.env.FROM_EMAIL!

const postmark = new ServerClient(POSTMARK_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, company } = await req.json()

    if (!email || !name) {
      return new NextResponse('Missing required fields', { status: 400 })
    }

    const result = await db.insert(leads).values({
      name,
      email,
      company
    })

    if (!result) {
      console.error('DB insert failed')
      return new NextResponse('Database insert failed', { status: 500 })
    }

    await postmark.sendEmail({
      MessageStream: 'ai-cheatsheet-lead-emails',
      From: FROM_EMAIL,
      To: email,
      Subject: 'Your Download: The Ultimate AI Engineering Cheatsheet 2025',
      HtmlBody: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <img src="https://www.inference-stack.com/inference_stack_logowhite.png" alt="InferenceStack Logo" style="width: 160px; margin-bottom: 24px;" />
          <h2 style="color: #000;">Hey ${name},</h2>
          <p style="font-size: 16px; color: #333;">Thanks for downloading <strong>The Ultimate AI Engineering Cheatsheet 2025</strong>.</p>
          <p style="font-size: 16px; color: #333;">You can download it directly using this secure link:</p>
          <p style="margin: 20px 0;"><a href="https://www.inference-stack.com/download/cheatsheet" style="background-color: #000; color: #fff; padding: 12px 20px; border-radius: 6px; text-decoration: none; font-weight: bold;">Download Cheatsheet</a></p>
          <p style="font-size: 14px; color: #666;">Cheers,<br />Matt @ InferenceStack</p>
        </div>
      `,
      TextBody: `Hey ${name},\n\nThanks for downloading The Ultimate AI Engineering Cheatsheet 2025.\n\nYou can download it directly using this secure link:\nhttps://www.inference-stack.com/download/cheatsheet\n\nCheers,\nMatt @ InferenceStack`
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Subscribe API Error]', err)
    return new NextResponse('Server Error', { status: 500 })
  }
}
