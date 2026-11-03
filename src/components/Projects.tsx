import { FolderGit2, Utensils, Database, Layers, CheckCircle, ShieldCheck, ShoppingCart, UserCheck, PackageCheck } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData.ts';

export function Projects() {
  const project = RESUME_DATA.projects[0];

  const featureIcons = [
    { name: "User registration", icon: UserCheck, desc: "Account creation and credential setup" },
    { name: "User login", icon: ShieldCheck, desc: "Secure authentication session" },
    { name: "Cart management", icon: ShoppingCart, desc: "Dynamic item addition, quantity adjustment & price computation" },
    { name: "Order management", icon: PackageCheck, desc: "Placing orders and tracking order statuses" },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Featured Work</span>
        </div>
        <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Projects
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Practical application development demonstrating software design, database integration, and user workflow logic.
        </p>
      </div>

      {/* Project Card */}
      <div className="max-w-4xl mx-auto">
        <div
          id={`project-card-${project.id}`}
          className="bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-8 lg:p-10 space-y-8 shadow-xl relative overflow-hidden transition-all duration-300 group"
        >
          {/* Top subtle gradient line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600" />

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-950/90 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shrink-0 shadow-lg shadow-cyan-950/50 group-hover:scale-105 transition-transform">
                <Utensils className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                  {project.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-0.5">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs sm:text-sm font-mono self-start md:self-center">
              <Database className="w-4 h-4 text-cyan-400" />
              <span>Database: <strong className="text-white">{project.database}</strong></span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-5">
            <p className="text-slate-300 text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features Breakdown */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Core Application Features</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featureIcons.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    id={`project-feature-${idx}`}
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white block">
                        {feature.name}
                      </span>
                      <span className="text-xs text-slate-400">
                        {feature.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technology Stack Tags */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500 font-mono">Technologies:</span>
              {["Web Development", "MySQL", "Database Management", "Application Workflow"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Academic Engineering Project</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
