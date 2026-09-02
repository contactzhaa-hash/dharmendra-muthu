import Link from 'next/link';

export default function Home() {
    return (
        <div className="bg-[#070A12] text-slate-100 antialiased selection:bg-[#00C2FF] selection:text-[#070A12] min-h-screen font-sans">
            
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#070A12]/90 backdrop-blur-md border-b border-slate-800/80">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="#" className="text-base font-bold tracking-wider text-white">
                        DAM <span className="text-[#00C2FF] font-normal text-sm">/ Financial Independence</span>
                    </Link>
                    
                    <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
                        <a href="#reality" className="hover:text-[#00C2FF] transition">The Reality</a>
                        <a href="#frameworks" className="hover:text-[#00C2FF] transition">The Playbook</a>
                        <a href="#principles" className="hover:text-[#00C2FF] transition">Core Rules</a>
                    </nav>

                    <div>
                        <a href="#frameworks" className="px-5 py-2.5 rounded-sm bg-[#00C2FF] text-[#070A12] font-bold text-xs uppercase tracking-widest hover:bg-sky-400 transition">
                            Get to Work
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative pt-44 pb-28 md:pt-56 md:pb-36 border-b border-slate-800/60 overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <span className="inline-block py-1.5 px-4 rounded-sm bg-[#0E1322] border border-slate-800 text-[#00C2FF] text-xs font-mono uppercase tracking-widest mb-6">
                        No Fluff. No Get-Rich-Quick Scams.
                    </span>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-8">
                        Financial Independence is Built on <span className="text-[#00C2FF]">Execution, Not Hope.</span>
                    </h1>
                    <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mb-12 leading-relaxed">
                        Most financial advice is designed to keep you confused and dependent. We focus on what actually moves the needle: radical clarity, brutal cash-flow discipline, and long-term asset ownership.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <a href="#frameworks" className="w-full sm:w-auto px-8 py-4 rounded-sm bg-[#00C2FF] text-[#070A12] font-bold text-sm text-center hover:bg-sky-400 transition">
                            Explore The Playbook
                        </a>
                        <a href="#reality" className="w-full sm:w-auto px-8 py-4 rounded-sm border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition text-sm text-center">
                            Read The Truth
                        </a>
                    </div>
                </div>
            </section>

            {/* The Reality Check */}
            <section id="reality" className="py-28 bg-[#0E1322]/20">
                <div className="max-w-5xl mx-auto px-6">
                    <span className="text-[#00C2FF] text-xs uppercase tracking-widest font-mono block mb-3">Perspective</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
                        The Game is Rigged Against Passive Consumers. Become an Operator.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-300 font-light leading-relaxed">
                        <p>
                            Every day, billions of dollars are spent trying to convince you to trade your hard-earned cash for lifestyle inflation, subscription traps, and speculative noise. They want you stressed, distracted, and working paycheck to paycheck.
                        </p>
                        <p>
                            True stability doesn't come from a hot stock tip or an overnight miracle. It comes from treating your personal finances like an elite enterprise: cutting the dead weight, maximizing your primary leverage, and ruthlessly compounding what you keep.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Frameworks / Playbook */}
            <section id="frameworks" className="py-28 border-t border-slate-800/60">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-2xl mb-16">
                        <span className="text-[#00C2FF] text-xs uppercase tracking-widest font-mono block mb-3">The Playbook</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Three Pillars of Financial Autonomy</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-[#0E1322] border border-slate-800 rounded-sm flex flex-col justify-between">
                            <div>
                                <span className="text-xs text-[#00C2FF] font-mono mb-4 block">PILLAR 01</span>
                                <h3 className="text-xl font-bold text-white mb-3">Aggressive Cashflow Control</h3>
                                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">You can't out-invest a bleeding budget. Master your inflows, plug the invisible leaks, and turn your surplus into raw momentum.</p>
                            </div>
                            <span className="text-xs text-slate-500 uppercase tracking-widest font-mono">Foundation</span>
                        </div>

                        <div className="p-8 bg-[#0E1322] border border-slate-800 rounded-sm flex flex-col justify-between">
                            <div>
                                <span className="text-xs text-[#00C2FF] font-mono mb-4 block">PILLAR 02</span>
                                <h3 className="text-xl font-bold text-white mb-3">Durable Asset Allocation</h3>
                                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">Stop buying hype. Build positions in high-utility, cash-flowing assets that survive economic shifts and compound quietly over decades.</p>
                            </div>
                            <span className="text-xs text-slate-500 uppercase tracking-widest font-mono">Growth</span>
                        </div>

                        <div className="p-8 bg-[#0E1322] border border-slate-800 rounded-sm flex flex-col justify-between">
                            <div>
                                <span className="text-xs text-[#00C2FF] font-mono mb-4 block">PILLAR 03</span>
                                <h3 className="text-xl font-bold text-white mb-3">Total Mental Independence</h3>
                                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">Ignore the noise of the mainstream echo chamber. Build an independent framework that lets you think long-term while everyone else panics short-term.</p>
                            </div>
                            <span className="text-xs text-slate-500 uppercase tracking-widest font-mono">Mindset</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / Disclaimer */}
            <section id="principles" className="py-16 bg-[#0E1322] border-t border-slate-800 text-xs text-slate-400">
                <div className="max-w-5xl mx-auto px-6">
                    <h4 className="text-white font-bold uppercase tracking-wider mb-3">Straight Talk Disclaimer</h4>
                    <p className="leading-relaxed mb-6 font-light">
                        Everything shared here is built entirely on personal operator philosophy, practical experience, and structural discipline. It is designed to make you think, take accountability, and execute—not to serve as formal financial, legal, or investment advice. Do your own work, own your choices, and build your own path.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-slate-800 text-slate-400">
                        <p>&copy; 2026 Dharmendra Aseervetha Muthu. Built for the operators.</p>
                        <div className="flex space-x-6 mt-4 sm:mt-0 font-medium">
                            <a href="https://github.com/contactzhaa-hash/dharmendra-muthu" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C2FF] transition">GitHub Repo</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}