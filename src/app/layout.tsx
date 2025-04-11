// InferenceStack: Next.js + TailwindCSS + TypeScript SPA Bootstrapping
// Extended with dark/light theme, sticky nav, responsive layout, and motion-ready

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InferenceStack | Applied Intelligence, Engineered',
  description: 'The full-stack AI consultancy and engineering portfolio of Matt Vegas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 ${inter.className}`}>
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
