'use client';

import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export default function PolicyModal({ isOpen, onClose, title, content }: PolicyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0F1729] rounded-2xl shadow-2xl overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="sticky top-0 bg-[#0F3F77] dark:bg-[#0A0E1A] text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
            aria-label="Close modal"
          >
            <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] px-6 py-8">
          <div className="prose prose-lg dark:prose-invert prose-headings:text-[#0F3F77] dark:prose-headings:text-[#1FA35C] prose-a:text-[#138A4B] dark:prose-a:text-[#1FA35C] max-w-none text-justify">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}
