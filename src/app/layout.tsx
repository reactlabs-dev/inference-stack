/* eslint-disable @next/next/next-script-for-ga */
export const metadata = {
  title: 'InferenceStack',
  description: 'Full-stack AI systems and consulting by Matt Vegas',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PDSFDC1J8G"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PDSFDC1J8G', { page_path: window.location.pathname });
            `,
          }}
        />
      </head>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}
