import { Heart, Code2, Globe, Sparkles, Brain, BookOpen } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData.ts';

export function Interests() {
  const interestIcons: Record<string, typeof Code2> = {
    "Coding": Code2,
    "Web Development": Globe,
    "Learning New Technologies": Sparkles,
    "Problem Solving": Brain,
    "Reading": BookOpen,
  };

  return (
    <section id="interests" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
          <Heart className="w-3.5 h-3.5" />
          <span>Passions &amp; Focus</span>
        </div>
        <h2 id="interests-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Interests
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Areas of curiosity, continuous learning, and software problem-solving.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
        {RESUME_DATA.interests.map((interest, index) => {
          const Icon = interestIcons[interest] || Sparkles;
          return (
            <div
              key={index}
              id={`interest-card-${index}`}
              className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-5 text-center flex flex-col items-center justify-center transition-all duration-200 hover:-translate-y-1 group shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 group-hover:text-cyan-300 transition-all">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                {interest}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
