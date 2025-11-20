import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden flex items-center justify-center">
      {/* 3D Aura Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/50 to-slate-950/80" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-200 text-sm mb-6">
          <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
          AI • Python • Generative UX
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_30px_rgba(124,58,237,0.35)]">
          Crafting intelligent experiences
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-sky-300 to-amber-200"> with code and curiosity</span>
        </h1>
        <p className="mt-6 text-slate-300/90 text-lg sm:text-xl max-w-3xl mx-auto">
          Hi, I build human-centered AI systems — from voice agents and LLM tools to real-time computer vision apps.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#ideas" className="px-5 py-3 rounded-xl bg-white/10 text-white backdrop-blur-md border border-white/15 hover:bg-white/20 transition">
            Explore unique portfolio ideas
          </a>
          <a href="#contact" className="px-5 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 text-white shadow-lg shadow-violet-500/25 hover:opacity-95 transition">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
