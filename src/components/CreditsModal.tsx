// components/CreditsModal.tsx
import React from "react";

const CreditsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center bg-black/60">
      <div className="w-full max-w-md p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-xl mx-4 mb-20 sm:mb-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Project Credits
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-300 transition"
          >
            ✕
          </button>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-3 leading-relaxed">
          <p>
            This portfolio was fully designed and developed by <strong>Matt Vegas</strong>.
            Every element — from interface architecture to deployment strategy — was crafted with intent.
          </p>

          <p>
            Contributions powered by <strong>OpenAI</strong> and <strong>ChatGPT</strong>,
            used as creative copilots to accelerate ideation and code generation.
          </p>

          <p>
            Built using <strong>Next.js, Tailwind CSS, Framer Motion</strong>, and modern dev tooling to
            highlight real, scalable infrastructure — not just concept art.
          </p>

          <p>
            All showcased systems (ProtoMedica, OutcomeIQ, RadiologyStream) are real or in prototype stages, built for clinical-grade applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreditsModal;
