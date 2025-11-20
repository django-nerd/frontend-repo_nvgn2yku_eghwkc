export default function IdeaCard({ title, subtitle, bullets, tags }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition overflow-hidden">
      <div className="absolute -inset-px bg-gradient-to-tr from-violet-500/10 via-sky-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition pointer-events-none" />
      <h3 className="text-white font-semibold text-xl">{title}</h3>
      <p className="text-slate-300/80 mt-1 mb-4">{subtitle}</p>
      <ul className="space-y-2 text-slate-200/90">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2 items-start">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((t, i) => (
          <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-200 border border-white/10">{t}</span>
        ))}
      </div>
    </div>
  );
}
