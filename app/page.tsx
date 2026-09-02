'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
    const [lang, setLang] = useState<'EN' | 'FR'>('EN');
    const currency = lang === 'EN' ? '$' : '€';

    return (
        <div className="bg-[#070A12] text-slate-100 min-h-screen font-sans flex flex-col">
            <header className="border-b border-slate-800/60 bg-[#070A12]/90 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="font-extrabold tracking-wider text-white text-lg">DAM</Link>
                    <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
                        <Link href="/" className="hover:text-[#00C2FF] transition">Home</Link>
                        <Link href="/news" className="hover:text-[#00C2FF] transition">News & Insights</Link>
                        <Link href="/contact" className="text-[#00C2FF]">Contact & Bio</Link>
                    </nav>
                    <button 
                        onClick={() => setLang(lang === 'EN' ? 'FR' : 'EN')}
                        className="px-3 py-1.5 border border-slate-800 rounded text-xs font-mono text-[#00C2FF] hover:bg-slate-900 transition"
                    >
                        {lang === 'EN' ? 'English ($)' : 'Français (€)'}
                    </button>
                </div>
            </header>

            <main className="flex-grow max-w-4xl mx-auto px-6 py-20 w-full flex items-center justify-center">
                <div className="p-10 bg-[#0E1322] border border-slate-800 rounded-sm flex flex-col md:flex-row items-center gap-10 w-full shadow-2xl">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-[#00C2FF]/40 shadow-xl flex-shrink-0 bg-slate-900">
                        <Image 
                            src="/dharmendra-1a.jpg" 
                            alt="Dharmendra Aseervetha Muthu" 
                            fill 
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-[#00C2FF] mb-2 block">Financial & Insurance Infrastructure</span>
                        <h1 className="text-3xl font-extrabold text-white mb-3">Dharmendra Aseervetha Muthu</h1>
                        <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                            Dedicated to providing rigorous financial education, risk-adjusted {currency} strategies, and structural independence for families and operators.
                        </p>
                        <div className="space-y-2 text-sm text-slate-300 font-mono">
                            <p>📞 Office / Direct: <a href="tel:9056666696" className="text-[#00C2FF] hover:underline">(905) 666-6696</a></p>
                            <p>📱 Mobile: <a href="tel:16477190382" className="text-[#00C2FF] hover:underline">+1 (647) 719-0382</a></p>
                            <p>📍 Address: 203-1450 Hopkins St. Whitby, ON L1N 2C3</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
