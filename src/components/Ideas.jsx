import IdeaCard from './IdeaCard';

const ideas = [
  {
    title: 'Voice Agent Portfolio (Interactive)',
    subtitle: 'Your site doubles as a talking AI assistant that tells your story.',
    bullets: [
      'Microphone input to ask about your projects',
      'Summarizes GitHub repos and demos on demand',
      'Speaks back with natural voice and highlights skills',
    ],
    tags: ['LLM', 'TTS', 'RAG', 'WebAudio'],
  },
  {
    title: 'Live Notebook Showcase',
    subtitle: 'Run Python notebooks in the browser via a managed API.',
    bullets: [
      'Click to execute cells and stream outputs',
      'Switch between CPU/GPU results with cached artifacts',
      'Security sandbox with rate limits',
    ],
    tags: ['Python', 'Jupyter', 'Streaming', 'GPU'],
  },
  {
    title: 'Model Cards as Stories',
    subtitle: 'Turn model cards into cinematic scroll-driven narratives.',
    bullets: [
      'Sticky sections for dataset, metrics, tradeoffs',
      'Interactive confusion matrices and sliders',
      'Accessibility-first with narration mode',
    ],
    tags: ['Visualization', 'A11y', 'Storytelling'],
  },
  {
    title: 'Realtime CV Playground',
    subtitle: 'Webcam-powered demos of detection/segmentation models.',
    bullets: [
      'Switch models live and compare latency',
      'Overlay metrics and bounding boxes',
      'One-click share of benchmark snapshots',
    ],
    tags: ['Computer Vision', 'WebRTC', 'WASM'],
  },
  {
    title: 'AI x Data Blog Engine',
    subtitle: 'Write posts in Markdown, auto-generate diagrams and code sandboxes.',
    bullets: [
      'LLM tool to draft and refactor sections',
      'Embeds runnable code blocks with API calls',
      'Graphviz-like auto-diagrams for pipelines',
    ],
    tags: ['Content', 'DevRel', 'LLM Tools'],
  },
];

export default function Ideas() {
  return (
    <section id="ideas" className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mb-4">Unique Portfolio Concepts</h2>
        <p className="text-slate-300/90 text-center max-w-2xl mx-auto mb-12">
          You said AI and Python are your craft. Here are original directions that feel practical yet distinctive.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea, i) => (
            <IdeaCard key={i} {...idea} />
          ))}
        </div>
      </div>
    </section>
  );
}
