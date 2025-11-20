import Hero from './components/Hero';
import Ideas from './components/Ideas';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero with Spline animation */}
      <Hero />

      {/* Ideas grid */}
      <Ideas />

      {/* Simple contact CTA */}
      <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold">Want a portfolio like this, tailored to you?</h3>
          <p className="text-slate-300/90 mt-3">
            Share your goals and we’ll turn them into an interactive experience that recruiters remember.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:hello@example.com" className="px-5 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 text-white shadow-lg shadow-violet-500/25 hover:opacity-95 transition">
              Email me
            </a>
            <a href="#ideas" className="px-5 py-3 rounded-xl bg-white/10 text-white backdrop-blur-md border border-white/15 hover:bg-white/20 transition">
              See concepts again
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-slate-950/70">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <p className="text-sm">© {new Date().getFullYear()} Your Name — AI & Python Engineer</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Resume</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
