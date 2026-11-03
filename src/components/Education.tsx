import { GraduationCap, BookOpen, Layers, CheckCircle } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData.ts';

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Foundation</span>
        </div>
        <h2 id="education-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Education
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Formal engineering curriculum and structured technical training.
        </p>
      </div>

      {/* Main Education Card */}
      <div className="max-w-4xl mx-auto">
        <div
          id="education-degree-card"
          className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden group hover:border-cyan-500/40 transition-colors"
        >
          {/* Subtle top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/90 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shrink-0 shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {RESUME_DATA.education.program}
                </h3>
                <p className="text-sm font-medium text-cyan-400 font-mono mt-0.5">
                  Undergraduate Engineering Program
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-300 self-start sm:self-center">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>Computer Science &amp; Engineering</span>
            </div>
          </div>

          {/* Relevant Coursework & Training */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Relevant Coursework &amp; Technical Training:</span>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-1">
              {RESUME_DATA.education.courseworkAndTraining.map((course, idx) => (
                <div
                  key={idx}
                  id={`coursework-item-${idx}`}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200 text-xs sm:text-sm font-mono hover:border-cyan-500/50 hover:bg-slate-900 transition-colors"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Focus Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/80 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Computer programming concepts &amp; algorithms</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Relational databases &amp; web application development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
