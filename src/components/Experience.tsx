import { Briefcase, Code, Bug, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData.ts';

export function Experience() {
  const experienceCards = [
    {
      title: "Academic Software Development",
      icon: Code,
      points: [
        "Developed academic projects using programming and software development skills.",
        "Applied core language features and object-oriented paradigms to build functional application workflows."
      ]
    },
    {
      title: "Problem-Solving & Debugging",
      icon: Bug,
      points: [
        "Practiced problem-solving, debugging, and basic application development.",
        "Identified code defects, tested logic edge cases, and optimized project performance."
      ]
    },
    {
      title: "Collaborative Team Projects",
      icon: Users,
      points: [
        "Worked with team members on college projects and presentations.",
        "Communicated technical ideas, coordinated task distribution, and presented project demos."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Experience Track</span>
        </div>
        <h2 id="experience-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {RESUME_DATA.experience.sectionLabel}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Academic hands-on software development, debugging, and collegiate team collaboration.
        </p>
      </div>

      {/* Seeking Internship Banner */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="bg-gradient-to-r from-cyan-950/40 via-slate-900 to-blue-950/40 border border-cyan-500/30 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-cyan-950/20">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Internship Experience</h3>
              <p className="text-xs sm:text-sm text-cyan-300 font-medium mt-0.5">
                {RESUME_DATA.experience.internshipStatus}
              </p>
            </div>
          </div>

          <a
            id="experience-contact-cta"
            href="#contact"
            className="shrink-0 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow hover:shadow-cyan-500/20"
          >
            Connect for Opportunities
          </a>
        </div>
      </div>

      {/* Experience Timeline / Cards */}
      <div className="max-w-4xl mx-auto space-y-6">
        {experienceCards.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              id={`experience-item-${index}`}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 hover:border-slate-700 transition-colors shadow-md group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400">Academic &amp; Collegiate Practical Work</p>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 self-start sm:self-center">
                  Undergraduate Projects
                </span>
              </div>

              <div className="space-y-2.5">
                {item.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
