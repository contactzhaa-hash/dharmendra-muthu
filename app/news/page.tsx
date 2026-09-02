'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NewsPage() {
    const [lang, setLang] = useState<'EN' | 'FR'>('EN');
    const currency = lang === 'EN' ? '$' : '€';

    return (
        <div className="bg-[#05070D] text-slate-100 min-h-screen font-sans flex flex-col selection:bg-[#00C2FF] selection:text-[#070A12]">
            <header className="border-b border-slate-900 bg-[#05070D]/90 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
                    <Link href="/" className="font-mono font-black tracking-widest text-white text-xl uppercase">
                        DAM <span className="text-[#00C2FF] font-light text-xs">/ Capital Architecture</span>
                    </Link>
                    <nav className="hidden md:flex space-x-10 text-xs font-bold uppercase tracking-widest text-slate-400">
                        <Link href="/" className="hover:text-white transition">01 / Manifesto</Link>
                        <Link href="/news" className="text-[#00C2FF]">02 / Macro Intelligence</Link>
                        <Link href="/contact" className="hover:text-white transition">03 / Executive Access</Link>
                    </nav>
                    <button 
                        onClick={() => setLang(lang === 'EN' ? 'FR' : 'EN')}
                        className="px-4 py-2 border border-slate-800 bg-slate-900/50 rounded-sm text-xs font-mono text-[#00C2FF] hover:border-[#00C2FF] transition shadow-lg"
                    >
                        {lang === 'EN' ? 'ENGLISH ($)' : 'FRANÇAIS (€)'}
                    </button>
                </div>
            </header>

            <main className="flex-grow max-w-6xl mx-auto px-6 py-24">
                <span className="text-xs font-mono uppercase tracking-widest text-[#00C2FF] mb-3 block">
                    2026 Sovereign Briefing
                </span>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-16">
                    Hard Truths for High-Growth Operators
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-10 bg-[#0E1322] border border-slate-800/80 rounded-sm flex flex-col justify-between relative group hover:border-[#00C2FF]/60 transition">
                        <div>
                            <span className="text-xs font-mono text-[#00C2FF] mb-3 block">MACRO SHIFT / SEPT 2026</span>
                            <h2 className="text-2xl font-bold text-white mb-4">Capital Yields & The Cost of Passivity</h2>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                                Central bank policies across North America continue to penalize passive savers through inflation and currency degradation. High-performing operators are bypassing traditional retail vehicles, deploying {currency} capital directly into cash-flowing assets and structured private protection vehicles.
                            </p>
                        </div>
                        <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                            <span>INTELLIGENCE FEED</span>
                            <span className="text-[#00C2FF]">VERIFIED</span>
                        </div>
                    </div>

                    <div className="p-10 bg-[#0E1322] border border-slate-800/80 rounded-sm flex flex-col justify-between relative group hover:border-[#00C2FF]/60 transition">
                        <div>
                            <span className="text-xs font-mono text-[#00C2FF] mb-3 block">WEALTH ENGINEERING</span>
                            <h2 className="text-2xl font-bold text-white mb-4">Re-Engineering Personal Balance Sheets</h2>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                                Relying on generic retirement formulas is a guaranteed path to mediocrity. Real financial independence requires enterprise-grade cashflow architecture, aggressive liability management, and absolute discipline over your {currency} inflows and reserves.
                            </p>
                        </div>
                        <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                            <span>OPERATOR THESIS</span>
                            <span className="text-[#00C2FF]">VERIFIED</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}