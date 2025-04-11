import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="w-full border-t border-neutral-800 py-6 px-4 text-sm text-neutral-500 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <span>
          © {new Date().getFullYear()} InferenceStack. All rights reserved.
        </span>

        <div className="flex items-center gap-4">
          <Link
            href="/credits"
            className="hover:text-primary transition"
          >
            Credits
          </Link>
          <Link
            href="https://github.com/your-username/inference-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  )
}
