import { Code2, Globe, Database, Wrench, Cpu, Users2, Check } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData.ts';

export function Skills() {
  const skillCategories = [
    {
      id: "programming-languages",
      title: "Programming Languages",
      icon: Code2,
      skills: RESUME_DATA.skills.programmingLanguages,
      badgeColor: "text-blue-400 bg-blue-950/60 border-blue-800/60",
    },
    {
      id: "web-development",
      title: "Web Development",
      icon: Globe,
      skills: RESUME_DATA.skills.webDevelopment,
      badgeColor: "text-cyan-400 bg-cyan-950/60 border-cyan-800/60",
    },
    {
      id: "database",
      title: "Database",
      icon: Database,
      skills: RESUME_DATA.skills.database,
      badgeColor: "text-emerald-400 bg-emerald-950/60 border-emerald-800/60",
    },
    {
      id: "tools-and-technologies",
      title: "Tools & Technologies",
      icon: Wrench,
      skills: RESUME_DATA.skills.toolsAndTechnologies,
      badgeColor: "text-amber-400 bg-amber-950/60 border-amber-800/60",
    },
    {
      id: "core-skills",
      title: "Core Skills",
      icon: Cpu,
      skills: RESUME_DATA.skills.coreSkills,
      badgeColor: "text-purple-400 bg-purple-950/60 border-purple-800/60",
    },
    {
      id: "soft-skills",
      title: "Soft Skills",
      icon: Users2,
      skills: RESUME_DATA.skills.softSkills,
      badgeColor: "text-rose-400 bg-rose-950/60 border-rose-800/60",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
          <Code2 className="w-3.5 h-3.5" />
          <span>Technical Toolkit</span>
        </div>
        <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Technical &amp; Professional Skills
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Categorized technical competencies, core concepts, and collaboration skills.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              id={`skill-card-${category.id}`}
              className="bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${category.badgeColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      id={`skill-pill-${category.id}-${sIdx}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/90 border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium hover:border-cyan-500/40 hover:text-white transition-colors"
                    >
                      <Check className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>{category.skills.length} Items</span>
                <span className="text-slate-400 font-sans">Verified in Coursework/Projects</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
