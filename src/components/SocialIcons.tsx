// components/SocialIcons.tsx
export const SocialIcons = () => {
    return (
        <div className="mt-8 flex justify-center gap-4">
            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/mattvegasonline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-700 hover:border-white text-gray-400 hover:text-white transition"
            >
                <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.6h.1c.66-1.25 2.28-2.6 4.7-2.6 5 0 5.9 3.3 5.9 7.6V24h-5V16.2c0-1.85-.03-4.2-2.55-4.2-2.56 0-2.95 2-2.95 4v8h-5V8z" />
                </svg>
            </a>

            {/* X / Twitter */}
            <a
                href="https://twitter.com/mattvegasco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="group inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-700 hover:border-white text-gray-400 hover:text-white transition"
            >
                <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M19.633 3H23L14.895 10.902 24 21H16.926l-5.548-6.34L5.748 21H2l8.805-8.585L0 3h7.267l5.086 5.858L19.633 3zm-2.396 16h1.44L7.908 5H6.35l10.887 14z" />
                </svg>
            </a>

            {/* GitHub */}
            <a
                href="https://github.com/reactlabs-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-700 hover:border-white text-gray-400 hover:text-white transition"
            >
                <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.204.086 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.997.108-.776.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405 11.5 11.5 0 0 1 3 .405c2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.24 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
            </a>
        </div>

    )
}
