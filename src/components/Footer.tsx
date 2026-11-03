import { ArrowUp, Terminal } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData.ts';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="border-t border-slate-800/80 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left space-y-1">
          <p id="footer-copyright" className="text-sm font-semibold text-slate-200">
            &copy; 2026 {RESUME_DATA.name}
          </p>
          <p id="footer-title" className="text-xs text-slate-400 font-mono">
            {RESUME_DATA.title}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            id="footer-email-link"
            href={`mailto:${RESUME_DATA.email}`}
            className="text-xs text-cyan-400 hover:text-cyan-300 font-mono underline"
          >
            {RESUME_DATA.email}
          </a>

          <button
            id="footer-back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
