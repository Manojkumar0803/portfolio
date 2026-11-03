import { useState } from 'react';
import { Mail, ArrowDown, Check, Copy, Sparkles, Terminal, Code2, Database } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData.ts';

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle Background Glows / Grid */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -translate-y-24" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-sm shadow-cyan-500/10 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-slate-300">
            Seeking Internship &amp; Placement Opportunities
          </span>
        </div>

        {/* Primary Heading */}
        <div className="space-y-4">
          <h1
            id="hero-name"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
          >
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              {RESUME_DATA.name}
            </span>
          </h1>

          <p
            id="hero-title"
            className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400 tracking-wide font-mono"
          >
            {RESUME_DATA.title}
          </p>
        </div>

        {/* Introduction */}
        <p
          id="hero-intro"
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
        >
          {RESUME_DATA.introduction}
        </p>

        {/* Quick Tech Snapshot (Strictly from resume) */}
        <div className="pt-2 flex flex-wrap justify-center items-center gap-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1 mr-1">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Focus:
          </span>
          {["Python", "Java", "C", "JavaScript", "React", "MySQL"].map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-900/80 border border-slate-800 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <a
            id="hero-view-projects-btn"
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5"
          >
            <Code2 className="w-4 h-4" />
            <span>View Projects</span>
          </a>

          <a
            id="hero-contact-me-btn"
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-100 font-semibold text-sm sm:text-base transition-all hover:border-slate-600 hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Direct Email Click & Copy Strip */}
        <div className="pt-4 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800/80 text-xs sm:text-sm text-slate-300">
            <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
            <a
              id="hero-email-link"
              href={`mailto:${RESUME_DATA.email}`}
              className="font-mono text-cyan-400 hover:underline hover:text-cyan-300 font-medium"
            >
              {RESUME_DATA.email}
            </a>
            <button
              id="hero-copy-email-btn"
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className="ml-1 p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Copy to clipboard"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
            {copied && (
              <span className="text-xs text-emerald-400 font-sans font-medium animate-fade-in">
                Copied!
              </span>
            )}
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="pt-8">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="inline-flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors"
          >
            <span className="text-xs uppercase tracking-widest font-mono">Explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
