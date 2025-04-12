// File: src/app/download/cheatsheet/route.ts

import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.redirect('https://www.inference-stack.com/download/TheUltimateAIEngineeringCheatsheet2025.pdf', 302)
}
