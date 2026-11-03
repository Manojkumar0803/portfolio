import { Users, Calendar, Terminal, Presentation, Sparkles, CheckCircle2, Trophy } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData.ts';

export function Activities() {
  const org = RESUME_DATA.organization;

  const activityHighlights = [
    { text: "Participated in technical workshops.", icon: Presentation },
    { text: "Participated in coding activities.", icon: Terminal },
    { text: "Participated in project discussions.", icon: Users },
    { text: "Collaborated with other students on technical projects and events.", icon: Sparkles },
  ];

  return (
    <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
          <Users className="w-3.5 h-3.5" />
          <span>Extracurricular &amp; Leadership</span>
        </div>
        <h2 id="activities-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Organizations &amp; Activities
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Active participation in collegiate technical clubs, collaborative coding, and engineering events.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main Organization Card */}
        <div
          id="organization-card"
          className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/90 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {org.organization}
                </h3>
                <p className="text-sm text-cyan-400 font-mono mt-0.5 font-medium">
                  Role: <span className="text-white">{org.role}</span>
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950 border border-slate-800 text-slate-300 text-xs sm:text-sm font-mono self-start sm:self-center">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>{org.period}</span>
            </div>
          </div>

          {/* Activities List */}
          <div className="space-y-4">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono">
              Key Contributions &amp; Participation:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {activityHighlights.map((act, idx) => {
                const Icon = act.icon;
                return (
                  <div
                    key={idx}
                    id={`activity-item-${idx}`}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-slate-300">
                      {act.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Academic Technical Engagements Summary Card */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-5 flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-lg bg-amber-950/60 border border-amber-800/50 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">
              Academic &amp; Technical Engagement
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Academic project development, technical activities, and collaborative college project participation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
