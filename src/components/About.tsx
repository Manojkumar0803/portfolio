import { Sparkles, Code2, Database, Users, Brain, Target, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData.ts';

export function About() {
  const highlights = [
    {
      title: "Core Programming",
      description: "Hands-on academic coding and application building with Python, Java, C, and JavaScript.",
      icon: Code2,
    },
    {
      title: "Web & Databases",
      description: "Frontend development with HTML, CSS, JavaScript, and React backed by relational MySQL & SQL design.",
      icon: Database,
    },
    {
      title: "Problem Solving & Debugging",
      description: "Foundation in Data Structures & Algorithms, Object-Oriented Programming, and systematic debugging.",
      icon: Brain,
    },
    {
      title: "Technical Collaboration",
      description: "Active member of campus Technical Club engaging in coding activities, workshops, and team projects.",
      icon: Users,
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>About Candidate</span>
        </div>
        <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Background &amp; Profile Summary
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          A dedicated Computer Science Engineering student preparing for software development roles.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative Summary */}
        <div className="lg:col-span-6 bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-cyan-400" />
            <span>Profile Overview</span>
          </h3>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a <strong className="text-slate-100 font-semibold">Computer Science Engineering student</strong> focused on building strong foundations in software development, practical programming, and technical problem-solving.
            </p>
            <p>
              My academic and project experience includes writing modular code in <span className="text-cyan-300 font-mono text-xs sm:text-sm px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">Python</span>, <span className="text-cyan-300 font-mono text-xs sm:text-sm px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">Java</span>, <span className="text-cyan-300 font-mono text-xs sm:text-sm px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">C</span>, and <span className="text-cyan-300 font-mono text-xs sm:text-sm px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">JavaScript</span>, alongside modern web development using HTML, CSS, JavaScript, and React.
            </p>
            <p>
              Through structured academic projects—such as developing a full-featured <strong className="text-slate-100 font-semibold">Web-Based Food Ordering Platform</strong> integrated with a MySQL database—I have developed a thorough understanding of user authentication, state and cart handling, and database schemas.
            </p>
            <p>
              Beyond coursework, I actively engage with peers as a member of the <strong className="text-slate-100 font-semibold">Technical Club (2025–Present)</strong>, participating in coding challenges, technical workshops, and group presentations.
            </p>
          </div>

          {/* Key Checklist Highlights */}
          <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
            {RESUME_DATA.aboutHighlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Highlight Cards */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                id={`about-highlight-${index}`}
                className="bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 rounded-xl p-5 transition-all duration-200 hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:text-cyan-300 transition-transform mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
