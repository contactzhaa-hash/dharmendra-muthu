import Link from 'next/link';

export default function Home() {
    return (
        <div className="bg-[#070A12] text-slate-100 antialiased selection:bg-[#00C2FF] selection:text-[#070A12] min-h-screen font-sans flex flex-col">
            
            {/* Minimal Header */}
            <header className="z-50 bg-[#070A12] border-b border-slate-800/60">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="#" className="text-base font-bold tracking-wider text-white uppercase">
                        DAM
                    </Link>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">
                        Financial Independence
                    </div>
                </div>
            </header>

            {/* Hero Section - Perfectly Centered */}
            <main className="flex-grow flex items-center justify-center bg-[#070A12] px-6 py-24 md:py-32">
                <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
                    
                    {/* High-Impact Headline */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-[1.05] mb-12 max-w-4xl">
                        FINANCIAL FREEDOM. <br />
                        IT'S NOT A DREAM. <span className="text-[#00C2FF]">IT'S A DISCIPLINE.</span><br/>
                        BUILD YOURS.
                    </h1>
                    
                    {/* Single, Stylish Call-to-Action */}
                    <Link href="#frameworks" 
                        className="group relative inline-flex items-center justify-center px-12 py-5 overflow-hidden font-bold rounded-full bg-[#070A12] border-2 border-[#00C2FF] shadow-2xl shadow-[#00C2FF]/20 transition-all duration-300 ease-out hover:scale-105"
                    >
                        {/* Hover Background Effect */}
                        <span className="absolute inset-0 w-full h-full bg-[#00C2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                        
                        {/* Button Text */}
                        <span className="relative text-sm uppercase tracking-widest text-[#00C2FF] group-hover:text-[#070A12] transition-colors duration-300 ease-out">
                            [ BECOME AN OPERATOR ]
                        </span>
                    </Link>

                </div>
            </main>

            {/* Minimal Footer */}
            <footer className="py-10 bg-[#070A12] border-t border-slate-800/60 text-center text-xs text-slate-600 uppercase tracking-widest">
                <p>&copy; 2026 Dharmendra Aseervetha Muthu. All rights reserved.</p>
            </footer>

        </div>
    );
}
