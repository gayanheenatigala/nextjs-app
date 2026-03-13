import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden selection:bg-blue-500/30">

      {/* Background ambient light effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/20 blur-[120px] animate-pulse-slow -z-10 mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/20 blur-[120px] animate-pulse-slow -z-10 mix-blend-screen" style={{ animationDelay: '2s' }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-20 opacity-20" />

      {/* Main hero section */}
      <div className="z-10 flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 w-full max-w-5xl mx-auto">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700/50 bg-slate-800/40 backdrop-blur-md animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-blue-500" />
          <span className="text-xs font-medium text-slate-300"> App Router</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Welcome to your <br className="hidden sm:block" />
          <span className="text-gradient">Premium Experience</span>
        </h1>

        {/* Caption */}
        <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          A stunning foundation for your next big idea. Beautifully designed,
          fully responsive, and ready to scale with modern web standards.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 glow-effect">
            Get Started
            <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </button>

          <button className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-slate-300 transition-all duration-200 glass-panel rounded-xl hover:text-white hover:bg-slate-800/60 focus:outline-none">
            View Components
          </button>
        </div>
      </div>

      {/* Feature grid */}
      <div className="w-full max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20 mt-10 z-10">
        {[
          {
            title: "Performance First",
            desc: "Lighting fast load times with Next.js specific optimizations.",
            icon: "⚡"
          },
          {
            title: "Modern Design",
            desc: "Beautiful gradients, glassmorphism, and smooth animations.",
            icon: "✨"
          },
          {
            title: "App Router",
            desc: "Leveraging the latest features of Next.js 13 App directory.",
            icon: "🚀"
          }
        ].map((feature, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl glass-panel group transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:border-blue-500/30"
            style={{ animationDelay: `${0.4 + i * 0.1}s` }}
          >
            <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-100">{feature.title}</h3>
            <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
