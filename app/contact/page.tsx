'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
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
                        <Link href="/news" className="hover:text-white transition">02 / Macro Intelligence</Link>
                        <Link href="/contact" className="text-[#00C2FF]">03 / Executive Access</Link>
                    </nav>
                    <button 
                        onClick={() => setLang(lang === 'EN' ? 'FR' : 'EN')}
                        className="px-4 py-2 border border-slate-800 bg-slate-900/50 rounded-sm text-xs font-mono text-[#00C2FF] hover:border-[#00C2FF] transition shadow-lg"
                    >
                        {lang === 'EN' ? 'ENGLISH ($)' : 'FRANÇAIS (€)'}
                    </button>
                </div>
            </header>

            <main className="flex-grow max-w-4xl mx-auto px-6 py-24 w-full flex items-center justify-center">
                <div className="p-12 bg-[#0E1322] border border-slate-800/80 rounded-sm flex flex-col md:flex-row items-center gap-12 w-full shadow-2xl relative">
                    <div className="absolute top-0 right-0 px-6 py-2 bg-[#00C2FF]/10 text-[#00C2FF] text-[10px] font-mono uppercase tracking-widest border-b border-l border-slate-800">
                        Verified Credentials
                    </div>
                    
                    <div className="relative w-52 h-52 rounded-sm overflow-hidden border border-[#00C2FF]/40 shadow-2xl flex-shrink-0 bg-slate-900">
                        <Image 
                            src="/dharmendra-1a.jpg" 
                            alt="Dharmendra Aseervetha Muthu" 
                            fill 
                            className="object-cover"
                            priority
                        />
                    </div>
                    
                    <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-[#00C2FF] mb-3 block">
                            Senior Financial & Insurance Infrastructure
                        </span>
                        <h1 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                            Dharmendra Aseervetha Muthu
                        </h1>
                        <p className="text-slate-300 text-sm font-light leading-relaxed mb-8">
                            Specializing in rigorous wealth protection, multi-generational risk mitigation, and disciplined asset structuring in {currency} for high-conviction individuals and business owners.
                        </p>
                        
                        <div className="space-y-3 text-xs md:text-sm text-slate-300 font-mono">
                            <p className="flex items-center space-x-3">
                                <span className="text-[#00C2FF]">OFFICE:</span> 
                                <a href="tel:9056666696" className="hover:text-white transition">(905) 666-6696</a>
                            </p>
                            <p className="flex items-center space-x-3">
                                <span className="text-[#00C2FF]">MOBILE:</span> 
                                <a href="tel:16477190382" className="hover:text-white transition">+1 (647) 719-0382</a>
                            </p>
                            <p className="flex items-start space-x-3">
                                <span className="text-[#00C2FF]">LOC:</span> 
                                <span className="text-slate-400">203-1450 Hopkins St. Whitby, ON L1N 2C3</span>
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Elite Footer */}
            <footer className="py-10 bg-[#030408] border-t border-slate-900 text-center text-xs font-mono text-slate-600 uppercase tracking-widest">
                <p>&copy; 2026 Dharmendra Aseervetha Muthu. Built for the operators.</p>
            </footer>
        </div>
    );
}