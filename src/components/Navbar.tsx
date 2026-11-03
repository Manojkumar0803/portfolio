import { useState, useEffect } from 'react';
import { Menu, X, Mail, Code2, GraduationCap, FolderGit2, Sparkles, Award, Users, Globe2, Heart, Briefcase, Terminal } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData.ts';

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Terminal },
    { name: 'About', href: '#about', icon: Sparkles },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Activities', href: '#activities', icon: Users },
    { name: 'Languages', href: '#languages', icon: Globe2 },
    { name: 'Interests', href: '#interests', icon: Heart },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            id="nav-logo"
            className="flex items-center gap-2.5 text-slate-100 font-bold text-lg tracking-tight group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <span className="font-mono text-sm font-semibold">MA</span>
            </div>
            <span className="font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
              Manojkumar Annigeri
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  id={`nav-link-${item.name.toLowerCase()}`}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-md text-xs xl:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/60 border border-cyan-800/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="nav-email-cta"
              href={`mailto:${RESUME_DATA.email}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:text-cyan-200 text-xs xl:text-sm font-medium transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              id="mobile-email-quick-link"
              href={`mailto:${RESUME_DATA.email}`}
              aria-label="Send email"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/90 px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="grid grid-cols-2 gap-1.5 py-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  id={`mobile-nav-link-${item.name.toLowerCase()}`}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-950/80 text-cyan-400 border border-cyan-800/60'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
          <div className="pt-3 border-t border-slate-800/80">
            <a
              id="mobile-nav-cta-email"
              href={`mailto:${RESUME_DATA.email}`}
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm transition-colors shadow-md shadow-cyan-900/30"
            >
              <Mail className="w-4 h-4" />
              <span>Email Manojkumar</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
