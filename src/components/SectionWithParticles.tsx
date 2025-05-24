'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export const SectionWithParticles = ({ children, className = '' }: Props) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <section className={`relative py-20 overflow-hidden ${className}`}>
     <Particles
  id="subtle-particles"
  init={particlesInit}
  options={{
    fullScreen: { enable: false },
    background: { color: 'transparent' },
    particles: {
      number: {
        value: 35,
        density: { enable: true, area: 800 },
      },
      color: { value: '#00f0ff' }, // neon blue
      opacity: {
        value: 0.15, // increase visibility
        animation: {
          enable: true,
          speed: 0.2,
          minimumValue: 0.05,
          sync: false,
        },
      },
      size: {
        value: 1.8,
        random: true,
      },
      move: {
        enable: true,
        speed: 0.4, // slightly faster
        direction: 'none',
        straight: false,
        outModes: { default: 'out' },
      },
      links: { enable: false },
      glow: {
        enable: false, // for native glow, needs external plugin; we fake glow via blending
      },
    },
  }}
  className="absolute inset-0 z-0 pointer-events-none mix-blend-screen bg-black/50"
/>


      <div className="relative z-10">{children}</div>
    </section>
  )
}
