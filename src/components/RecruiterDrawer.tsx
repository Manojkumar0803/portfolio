import { useState } from 'react';
import { FileText, X, CheckCircle, Mail, GraduationCap, Code2, FolderGit2, Sparkles, Send, Copy, Check } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData.ts';

export function RecruiterDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Floating Recruiter Quick View Pill */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          id="recruiter-summary-toggle-btn"
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 hover:text-white font-medium text-xs sm:text-sm shadow-xl shadow-black/50 backdrop-blur-md transition-all hover:scale-105"
        >
          <FileText className="w-4 h-4 text-cyan-400" />
          <span>Recruiter Quick Summary</span>
        </button>
      </div>

      {/* Modal / Drawer Backdrop */}
      {isOpen && (
        <div
          id="recruiter-modal-backdrop"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            id="recruiter-modal-content"
            className="bg-slate-950 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-mono mb-2">
                  <Sparkles className="w-3 h-3" />
                  <span>10-Second Candidate Summary</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {RESUME_DATA.name}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-400 font-mono">
                  {RESUME_DATA.title}
                </p>
              </div>

              <button
                id="recruiter-modal-close-btn"
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Summary Grid */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              {/* Education */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                <div className="flex items-center gap-2 font-semibold text-white mb-1.5">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>Education</span>
                </div>
                <p className="text-slate-200 font-medium">{RESUME_DATA.education.program}</p>
                <p className="text-slate-400 text-xs mt-1">
                  Coursework: {RESUME_DATA.education.courseworkAndTraining.join(', ')}
                </p>
              </div>

              {/* Core Technical Toolkit */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                <div className="flex items-center gap-2 font-semibold text-white mb-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>Key Skills</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    ...RESUME_DATA.skills.programmingLanguages,
                    ...RESUME_DATA.skills.webDevelopment,
                    ...RESUME_DATA.skills.database,
                    ...RESUME_DATA.skills.toolsAndTechnologies,
                  ].map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Primary Project */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                <div className="flex items-center gap-2 font-semibold text-white mb-1">
                  <FolderGit2 className="w-4 h-4 text-cyan-400" />
                  <span>Featured Project</span>
                </div>
                <p className="text-slate-200 font-medium">Web-Based Food Ordering Platform (MySQL)</p>
                <p className="text-slate-400 text-xs mt-0.5">
                  Features: User registration, login, cart management, order management.
                </p>
              </div>

              {/* Contact Direct */}
              <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="font-mono text-cyan-300 text-xs sm:text-sm font-medium">
                    {RESUME_DATA.email}
                  </span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-200 flex items-center justify-center gap-1.5"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                  <a
                    href={`mailto:${RESUME_DATA.email}`}
                    className="flex-1 sm:flex-none px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
