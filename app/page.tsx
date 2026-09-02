import Link from 'next/link';

export default function Home() {
    return (
        <div className="bg-[#070A12] text-slate-100 antialiased selection:bg-[#00C2FF] selection:text-[#070A12] min-h-screen font-sans">
            
            {/* Navigation Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#070A12]/90 backdrop-blur-md border-b border-slate-800/80">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="#" className="text-lg font-semibold tracking-wider text-white">
                        DAM <span className="text-[#00C2FF] font-light text-sm">| Capital Architecture</span>
                    </Link>
                    
                    <nav className="hidden md:flex items-center space-x-8 text-sm font-light text-slate-300">
                        <a href="#philosophy" className="hover:text-[#00C2FF] transition">Philosophy</a>
                        <a href="#frameworks" className="hover:text-[#00C2FF] transition">Frameworks</a>
                        <a href="#insights" className="hover:text-[#00C2FF] transition">Insights</a>
                        <a href="#compliance" className="hover:text-[#00C2FF] transition">Compliance</a>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <div className="text-xs font-medium text-slate-400 border border-slate-800 px-3 py-1.5 rounded-sm">
                            EN / FR
                        </div>
                        <a href="#contact" className="hidden sm:inline-block px-5 py-2.5 rounded-sm bg-[#00C2FF] text-[#070A12] font-semibold text-xs uppercase tracking-widest hover:bg-sky-400 transition shadow-lg shadow-[#00C2FF]/10">
                            Private Dispatch
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative pt-40 pb-28 md:pt-52 md:pb-36 border-b border-slate-800/60 overflow-hidden">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C2FF]/5 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-4 rounded-full bg-[#0E1322] border border-slate-800 text-[#00C2FF] text-xs font-semibold uppercase tracking-widest mb-6">
                        Cross-Border Financial Systems & Education
                    </span>
                    <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8">
                        Engineering Financial Autonomy for <span className="italic text-[#00C2FF]">High-Growth Leaders</span>
                    </h1>
                    <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                        Independent educational architectures and mental models designed for senior executives and business owners navigating Canada and US markets.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#frameworks" className="w-full sm:w-auto px-8 py-4 rounded-sm bg-[#00C2FF] text-[#070A12] font-semibold text-sm hover:bg-sky-400 transition">
                            Explore Core Frameworks
                        </a>
                        <a href="#compliance" className="w-full sm:w-auto px-8 py-4 rounded-sm border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition text-sm">
                            Review Compliance Stance
                        </a>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section id="philosophy" className="py-28 bg-[#0E1322]/30">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-[#00C2FF] text-xs uppercase tracking-widest font-semibold block mb-3">Foundational Thesis</span>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Where Engineering Precision Meets Wealth Architecture
                        </h2>
                        <p className="text-slate-300 mb-6 leading-relaxed font-light">
                            Traditional financial education is clouded by retail noise and speculative emotion. True long-term prosperity requires the same discipline used in engineering: immutable feedback loops, structural stress-testing, and rigorous capital efficiency.
                        </p>
                        <p className="text-slate-300 leading-relaxed font-light">
                            Operating across Canadian and US jurisdictions demands clarity, systemic design, and strict institutional boundaries.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="p-8 bg-[#0E1322] border border-slate-800/80 rounded-sm">
                            <h3 className="text-[#00C2FF] font-semibold text-lg mb-2">01 / Systems Over Speculation</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed">Building resilient capital allocation pipelines that function independently of short-term macroeconomic volatility.</p>
                        </div>
                        <div className="p-8 bg-[#0E1322] border border-slate-800/80 rounded-sm">
                            <h3 className="text-[#00C2FF] font-semibold text-lg mb-2">02 / Absolute Independence</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed">Strictly educational insights completely isolated from institutional or employment conflicts across international borders.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Frameworks Grid */}
            <section id="frameworks" className="py-28 border-t border-slate-800/60">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-[#00C2FF] text-xs uppercase tracking-widest font-semibold block mb-3">Proprietary Architecture</span>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">The Structural Frameworks</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-[#0E1322] border border-slate-800 rounded-sm flex flex-col justify-between">
                            <div>
                                <span className="text-xs text-[#00C2FF] font-mono mb-4 block">MODEL A-01</span>
                                <h3 className="font-serif text-xl font-bold text-white mb-3">Cross-Border Capital Routing</h3>
                                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">Mental models for managing multi-currency cash flows and capital efficiency between Canadian and US entities.</p>
                            </div>
                            <span className="text-xs text-slate-500 uppercase tracking-widest font-medium">Educational Module</span>
                        </div>

                        <div className="p-8 bg-[#0E1322] border border-slate-800 rounded-sm flex flex-col justify-between">
                            <div>
                                <span className="text-xs text-[#00C2FF] font-mono mb-4 block">MODEL A-02</span>
                                <h3 className="font-serif text-xl font-bold text-white mb-3">Risk-Adjusted Cashflow Engineering</h3>
                                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">Designing personal balance sheets with enterprise-grade risk containment and predictable liquidity yields.</p>
                            </div>
                            <span className="text-xs text-slate-500 uppercase tracking-widest font-medium">Educational Module</span>
                        </div>

                        <div className="p-8 bg-[#0E1322] border border-slate-800 rounded-sm flex flex-col justify-between">
                            <div>
                                <span className="text-xs text-[#00C2FF] font-mono mb-4 block">MODEL A-03</span>
                                <h3 className="font-serif text-xl font-bold text-white mb-3">Asset Protection Protocols</h3>
                                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">Structural strategies focused on long-term wealth preservation and generational asset governance.</p>
                            </div>
                            <span className="text-xs text-slate-500 uppercase tracking-widest font-medium">Educational Module</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance / Legal Firewall Footer Section */}
            <section id="compliance" className="py-16 bg-[#0E1322] border-t border-slate-800 text-xs text-slate-400">
                <div className="max-w-5xl mx-auto px-6">
                    <h4 className="text-white font-semibold uppercase tracking-wider mb-3">Regulatory & Employment Compliance Notice</h4>
                    <p className="leading-relaxed mb-6 font-light">
                        Dharmendra Aseervetha Muthu maintains professional employment within regulated banking and financial infrastructure in Canada and the United States. All content, mental models, frameworks, and commentaries published on this digital flagship represent strictly personal educational perspectives and engineering philosophies. They do not constitute formal financial, legal, tax, or investment advice, nor do they reflect the official positions, policies, or endorsements of any current or past corporate employers or financial institutions.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-slate-800 text-slate-400">
                        <p>&copy; 2026 Dharmendra Aseervetha Muthu. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 sm:mt-0 font-medium">
                            <a href="#" className="hover:text-[#00C2FF] transition">LinkedIn</a>
                            <a href="#" className="hover:text-[#00C2FF] transition">Substack / Dispatch</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}