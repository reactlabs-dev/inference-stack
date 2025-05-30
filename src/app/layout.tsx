import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AIAssistant } from '@/components/AIAssistant';
import { Analytics } from "@vercel/analytics/react";
import { RouteTracker } from '@/components/RouteTracker';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InferenceStack | Transforming Complex Data into Strategic Insights with Precision AI Solutions',
  description: 'The full-stack AI consultancy and engineering portfolio of Matt Vegas.',
  metadataBase: new URL('https://www.inference-stack.com'),
  openGraph: {
    title: 'InferenceStack | Transforming Complex Data into Strategic Insights with Precision AI Solutions',
    description: 'AI systems, infrastructure, and product consulting by Matt Vegas.',
    url: 'https://www.inference-stack.com',
    siteName: 'InferenceStack',
    images: [
      {
        url: 'https://www.inference-stack.com/inferencestack_og.png',
        width: 1200,
        height: 630,
        alt: 'Matt Vegas speaking — InferenceStack Hero',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InferenceStack | Transforming Complex Data into Strategic Insights with Precision AI Solutions',
    description: 'The AI consultancy and product studio of Matt Vegas.',
    images: ['/mattvegas_hero.png'],
    creator: '@mattvegas',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="canonical" href="https://www.inference-stack.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`min-h-screen bg-black/99 text-white dark:bg-black/99 dark:text-white ${inter.className}`}
      > <RouteTracker />
        <Header />
        <main className="relative z-10">{children}</main>
        <AIAssistant />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
