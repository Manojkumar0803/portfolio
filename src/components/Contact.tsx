import { useState } from 'react';
import { Mail, Check, Copy, Send, Sparkles, User, Briefcase, GraduationCap } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData.ts';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Contact Information
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Available for internship opportunities, technical discussions, and campus placement drives.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div
          id="contact-card"
          className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-center space-y-8"
        >
          {/* Subtle Ambient Background */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Avatar / Initials Badge */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold text-2xl shadow-xl shadow-cyan-500/20">
            MA
          </div>

          {/* Name & Title */}
          <div className="space-y-2">
            <h3 id="contact-name" className="text-2xl sm:text-3xl font-bold text-white">
              {RESUME_DATA.name}
            </h3>
            <p id="contact-title" className="text-sm sm:text-base text-cyan-400 font-mono">
              {RESUME_DATA.title}
            </p>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Actively Seeking Internship &amp; Placement Opportunities</span>
          </div>

          {/* Email Box */}
          <div className="max-w-md mx-auto bg-slate-950/90 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-mono block">
              Direct Email Address
            </span>

            <div className="flex items-center justify-between gap-3 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  id="contact-email-link"
                  href={`mailto:${RESUME_DATA.email}`}
                  className="font-mono text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm truncate font-medium hover:underline"
                >
                  {RESUME_DATA.email}
                </a>
              </div>

              <button
                id="contact-copy-email-btn"
                type="button"
                onClick={handleCopyEmail}
                className="shrink-0 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Copy email"
                aria-label="Copy email address"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {copied && (
              <p className="text-xs text-emerald-400 font-medium">
                Email address copied to clipboard!
              </p>
            )}
          </div>

          {/* Action Button: Email Me */}
          <div className="pt-2">
            <a
              id="contact-email-me-btn"
              href={`mailto:${RESUME_DATA.email}`}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base transition-all shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>Email Me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
