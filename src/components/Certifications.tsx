import { Award, CheckCircle2, ShieldCheck, FileCode, Globe, Terminal, Database, GitBranch } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData.ts';

export function Certifications() {
  const certDetails = [
    {
      name: "Python Programming",
      icon: Terminal,
      domain: "Programming Languages",
      color: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400",
    },
    {
      name: "Web Development",
      icon: Globe,
      domain: "Frontend & Full Stack",
      color: "from-cyan-500/20 to-teal-500/10 border-cyan-500/30 text-cyan-400",
    },
    {
      name: "Java Programming",
      icon: FileCode,
      domain: "OOP & Software Development",
      color: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400",
    },
    {
      name: "SQL",
      icon: Database,
      domain: "Relational Databases & Queries",
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400",
    },
    {
      name: "Git & GitHub",
      icon: GitBranch,
      domain: "Version Control & Collaboration",
      color: "from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-400",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
          <Award className="w-3.5 h-3.5" />
          <span>Verified Credentials</span>
        </div>
        <h2 id="certifications-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Certifications
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Technical courses and programming certifications completed to strengthen core engineering skills.
        </p>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {certDetails.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <div
              key={index}
              id={`certification-card-${index}`}
              className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 group shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border bg-gradient-to-br ${cert.color} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-2.5 py-1 rounded-full">
                    <ShieldCheck className="w-3 h-3 text-cyan-400" />
                    <span>Certified</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  {cert.domain}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Technical Certification</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
