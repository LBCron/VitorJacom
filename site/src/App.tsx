import React from 'react';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';

export default function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans">
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Terminal className="w-6 h-6 text-sky-400" />
            <span className="font-mono font-bold text-lg tracking-tight text-slate-100">
              vitorjacom<span className="text-sky-400">.dev</span>
            </span>
          </div>
          <nav className="flex items-center space-x-4 text-sm font-medium">
            <a
              href="https://github.com/VitorJacom"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/vitorjacom"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:vjds.vitor@gmail.com"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-mono uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Full-Stack Software Engineer</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
          Vítor Jacom
        </h1>

        <p className="max-w-2xl text-lg sm:text-xl text-slate-400 leading-relaxed mb-8">
          Engenharia de software moderna orientada a arquitetura limpa, computação em nuvem, sistemas distribuídos e alta performance.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/VitorJacom"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-semibold transition-all shadow-lg shadow-sky-500/20"
          >
            <Github className="w-5 h-5" />
            <span>Ver no GitHub</span>
          </a>
          <a
            href="mailto:vjds.vitor@gmail.com"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition-all"
          >
            <Mail className="w-5 h-5" />
            <span>Contato</span>
          </a>
        </div>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500 font-mono">
        <p>&copy; {new Date().getFullYear()} Vítor Jacom de Souza. Built with React 19, Vite & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
