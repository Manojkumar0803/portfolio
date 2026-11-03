import { Globe2, MessageSquare, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData.ts';

export function Languages() {
  return (
    <section id="languages" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
          <Globe2 className="w-3.5 h-3.5" />
          <span>Communication &amp; Linguistics</span>
        </div>
        <h2 id="languages-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Languages
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Language proficiencies for professional, technical, and team collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {RESUME_DATA.languages.map((lang, index) => (
          <div
            key={index}
            id={`language-card-${index}`}
            className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 text-center flex flex-col items-center group shadow-md"
          >
            <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
              {lang.language}
            </h3>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-medium text-cyan-400 mt-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{lang.proficiency}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
