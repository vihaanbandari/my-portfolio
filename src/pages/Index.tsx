import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, Phone, Copy, Check, Sparkles, Code2, Rocket, Star, Moon, Sun, Coffee, Zap } from "lucide-react";

const EMAIL = "bandarivihaan50@gmail.com";
const PHONE = "(501) 550-6132";

const projects = [
  {
    n: "01",
    name: "Saffron & Co.",
    type: "Local Restaurant — Full Stack",
    tags: ["Next.js", "Stripe", "CMS"],
    blurb: "Online ordering + reservations system for a family-owned Indian spot. 3× foot traffic in 2 months.",
    color: "bg-hot",
  },
  {
    n: "02",
    name: "Drift Skate Co.",
    type: "Brand Site — Frontend",
    tags: ["React", "GSAP", "Framer"],
    blurb: "Editorial scroll-driven storefront with a custom cursor and skate-deck configurator.",
    color: "bg-lime",
  },
  {
    n: "03",
    name: "Beacon Realty",
    type: "Real Estate — Full Stack",
    tags: ["TS", "Postgres", "Maps"],
    blurb: "Listings platform with map clustering, saved searches, and an agent dashboard.",
    color: "bg-ink",
  },
  {
    n: "04",
    name: "Pulse Run Club",
    type: "Community App — Full Stack",
    tags: ["Auth", "Realtime", "Strava"],
    blurb: "Weekly meetups, leaderboards, and live route sharing for 400+ runners.",
    color: "bg-paper",
  },
  {
    n: "05",
    name: "Halcyon Studio",
    type: "Photographer — Frontend",
    tags: ["Astro", "Lightbox"],
    blurb: "Minimalist portfolio with butter-smooth gallery transitions and image-CDN tricks.",
    color: "bg-hot",
  },
  {
    n: "06",
    name: "Greenleaf Bakery",
    type: "Local Bakery — Frontend",
    tags: ["React", "POS sync"],
    blurb: "Mobile-first menu, daily specials, and pickup scheduler. Built in a weekend.",
    color: "bg-lime",
  },
];

const stack = ["React", "TypeScript", "Next.js", "Tailwind", "Node", "Postgres", "Supabase", "Framer Motion", "GSAP", "Stripe", "Figma", "Vite"];

const Index = () => {
  return (
    <main className="min-h-screen bg-paper text-ink overflow-x-hidden font-sans">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
};

const Nav = () => (
  <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
    <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between text-paper">
      <a href="#top" className="font-mono text-sm font-bold tracking-tight">
        VB<span className="text-lime">/</span>STUDIO
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm font-mono">
        <a href="#about" className="hover:text-lime transition-colors">about</a>
        <a href="#work" className="hover:text-lime transition-colors">work</a>
        <a href="#pricing" className="hover:text-lime transition-colors">pricing</a>
        <a href="#contact" className="hover:text-lime transition-colors">contact</a>
      </nav>
      <a href="#contact" className="text-sm font-mono border border-paper rounded-full px-4 py-1.5 hover:bg-lime hover:text-ink hover:border-lime transition-colors">
        hire me ↗
      </a>
    </div>
  </header>
);

const Hero = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString("en-US", { timeZone: "America/New_York", hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <section id="top" className="relative min-h-screen pt-28 pb-20 px-6 md:px-10 grain">
      <div className="max-w-[1600px] mx-auto relative">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest mb-12">
          <span className="flex items-center gap-2 bg-ink text-paper px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-lime blink" /> available for new work
          </span>
          <span className="text-muted-foreground">Tampa, FL · {time} ET</span>
        </div>

        <h1 className="font-display text-[16vw] md:text-[12vw] leading-[0.85] tracking-tighter">
          let me
          <span className="relative inline-block ml-4">
            <span className="text-lime float-slow inline-block align-middle">
              <Sparkles className="w-10 h-10 md:w-20 md:h-20" strokeWidth={1.2} />
            </span>
          </span>
          <br />
          <em className="italic">build</em> your
          <br />
          <span className="bg-lime px-4 not-italic font-sans font-black text-[12vw] md:text-[9vw] inline-block -rotate-2 align-middle">WEBSITE.</span>
        </h1>

        <div className="mt-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 md:col-start-2">
            <p className="text-lg md:text-xl leading-relaxed">
              I'm <span className="font-display text-2xl">Vihaan</span> — a young web developer who treats every site like a launch event. I help brands, founders & local businesses ship websites that look expensive and convert harder than they should.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-8 flex flex-col justify-end gap-4 font-mono text-sm">
            <div className="flex justify-between border-b border-ink/30 pb-2">
              <span className="text-muted-foreground">est.</span><span>young & hungry</span>
            </div>
            <div className="flex justify-between border-b border-ink/30 pb-2">
              <span className="text-muted-foreground">shipped</span><span>20+ sites</span>
            </div>
            <div className="flex justify-between border-b border-ink/30 pb-2">
              <span className="text-muted-foreground">starts at</span><span>$300</span>
            </div>
            <a href="#work" className="group mt-4 inline-flex items-center gap-2 self-start bg-ink text-paper px-5 py-3 rounded-full hover:bg-lime hover:text-ink transition-colors">
              see the work <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Marquee = () => (
  <section className="bg-ink text-paper py-6 border-y-2 border-ink overflow-hidden">
    <div className="flex whitespace-nowrap marquee">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex items-center gap-10 pr-10 font-display text-6xl md:text-8xl">
          {["frontend", "fullstack", "fast", "weird", "beautiful", "shipped", "yours"].map((w) => (
            <span key={w} className="flex items-center gap-10">
              {w}
              <Star className="w-8 h-8 text-lime fill-lime" strokeWidth={1} />
            </span>
          ))}
        </div>
      ))}
    </div>
  </section>
);

const About = () => (
  <section id="about" className="px-6 md:px-10 py-32">
    <div className="max-w-[1600px] mx-auto grid md:grid-cols-12 gap-10">
      <div className="md:col-span-3">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">[ 01 — about ]</span>
      </div>
      <div className="md:col-span-9">
        <h2 className="font-display text-5xl md:text-7xl leading-tight tracking-tight mb-12">
          A young dev with a serious obsession for <em className="text-hot">good interfaces</em>.
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-lg leading-relaxed">
          <p>
            I started building websites in middle school out of pure curiosity, and somewhere along the way it turned into the thing I love most. Today I work with founders, creators and local shops — turning rough ideas into sites that actually feel like something.
          </p>
          <p>
            I've helped <span className="bg-lime px-2 font-semibold">local businesses</span> in my city — bakeries, realtors, restaurants — get online with sites that don't look like cookie-cutter templates. I sweat the small stuff: typography, motion, a 100 Lighthouse score, the works.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink border-2 border-ink">
          {[
            { k: "20+", v: "projects shipped" },
            { k: "100%", v: "happy clients" },
            { k: "2 wks", v: "avg turnaround" },
            { k: "∞", v: "cups of coffee" },
          ].map((s) => (
            <div key={s.v} className="bg-paper p-6">
              <div className="font-display text-5xl md:text-6xl">{s.k}</div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">stack</span>
          <div className="flex flex-wrap gap-2 mt-3">
            {stack.map((t) => (
              <span key={t} className="border border-ink rounded-full px-4 py-1.5 text-sm font-mono hover:bg-ink hover:text-paper transition-colors cursor-default">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Work = () => (
  <section id="work" className="bg-ink text-paper px-6 md:px-10 py-32">
    <div className="max-w-[1600px] mx-auto">
      <div className="grid md:grid-cols-12 gap-10 mb-16">
        <div className="md:col-span-3">
          <span className="font-mono text-xs uppercase tracking-widest text-paper/60">[ 02 — selected work ]</span>
        </div>
        <div className="md:col-span-9">
          <h2 className="font-display text-5xl md:text-7xl leading-tight tracking-tight">
            Things I've made <em className="text-lime">in the wild</em>.
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-paper/20">
        {projects.map((p, i) => (
          <ProjectCard key={p.n} p={p} idx={i} />
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ p, idx }: { p: typeof projects[0]; idx: number }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative bg-ink p-8 md:p-12 cursor-pointer overflow-hidden min-h-[420px] flex flex-col justify-between"
    >
      <div
        className={`absolute inset-0 ${p.color} transition-transform duration-700 ease-out origin-bottom`}
        style={{ transform: hover ? "scaleY(1)" : "scaleY(0)" }}
      />
      <div className={`relative transition-colors duration-300 ${hover ? (p.color === "bg-ink" ? "text-paper" : "text-ink") : "text-paper"}`}>
        <div className="flex justify-between items-start font-mono text-xs uppercase tracking-widest">
          <span>/{p.n}</span>
          <ArrowUpRight className={`w-6 h-6 transition-transform duration-500 ${hover ? "rotate-45 scale-125" : ""}`} />
        </div>
      </div>

      <div className={`relative transition-colors duration-300 ${hover ? (p.color === "bg-ink" ? "text-paper" : "text-ink") : "text-paper"}`}>
        <div className="font-mono text-xs uppercase tracking-widest mb-3 opacity-70">{p.type}</div>
        <h3 className="font-display text-5xl md:text-6xl tracking-tight mb-4">{p.name}</h3>
        <p className="max-w-md mb-6 opacity-80">{p.blurb}</p>
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="border border-current rounded-full px-3 py-1 text-xs font-mono">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Pricing = () => (
  <section id="pricing" className="px-6 md:px-10 py-32">
    <div className="max-w-[1600px] mx-auto">
      <div className="grid md:grid-cols-12 gap-10 mb-16">
        <div className="md:col-span-3">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">[ 03 — pricing ]</span>
        </div>
        <div className="md:col-span-9">
          <h2 className="font-display text-5xl md:text-7xl leading-tight tracking-tight">
            Honest pricing. <em className="text-hot">No surprises.</em>
          </h2>
          <p className="mt-6 text-lg max-w-xl text-muted-foreground">
            Fixed-scope projects, billed in two payments. Includes design, build, deploy, and one round of revisions.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <PricingCard
          icon={<Code2 className="w-8 h-8" />}
          tag="frontend"
          title="Marketing & Brand Sites"
          range="$300 — $700"
          bullets={[
            "Custom design, no templates",
            "Up to 6 pages, fully responsive",
            "Animations & micro-interactions",
            "SEO setup + 100 Lighthouse score",
            "Deploy & domain handoff",
          ]}
          accent="bg-lime"
        />
        <PricingCard
          icon={<Rocket className="w-8 h-8" />}
          tag="full stack"
          title="Apps & Platforms"
          range="$900 — $2,000"
          bullets={[
            "Everything in Frontend, plus:",
            "Auth, database, dashboards",
            "Stripe / payments integration",
            "Admin panels & CMS",
            "API integrations (Maps, AI, etc.)",
          ]}
          accent="bg-hot"
          dark
        />
      </div>
    </div>
  </section>
);

const PricingCard = ({ icon, tag, title, range, bullets, accent, dark }: any) => (
  <div className={`relative border-2 border-ink rounded-2xl p-8 md:p-10 overflow-hidden ${dark ? "bg-ink text-paper" : "bg-paper"}`}>
    <div className={`absolute -top-16 -right-16 w-56 h-56 rounded-full ${accent} blur-3xl opacity-40`} />
    <div className="relative">
      <div className="flex items-center justify-between mb-8">
        <div className={`p-3 rounded-xl ${accent} text-ink`}>{icon}</div>
        <span className="font-mono text-xs uppercase tracking-widest opacity-60">{tag}</span>
      </div>
      <h3 className="font-display text-4xl md:text-5xl tracking-tight">{title}</h3>
      <div className="mt-4 font-display text-6xl md:text-7xl">{range}</div>
      <ul className="mt-8 space-y-3">
        {bullets.map((b: string) => (
          <li key={b} className="flex items-start gap-3 text-sm">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${accent}`} /> {b}
          </li>
        ))}
      </ul>
      <a href="#contact" className={`mt-10 inline-flex items-center gap-2 px-5 py-3 rounded-full font-mono text-sm transition-colors ${dark ? "bg-paper text-ink hover:bg-lime" : "bg-ink text-paper hover:bg-hot"}`}>
        start a project <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  </div>
);

const Contact = () => {
  const [revealed, setRevealed] = useState({ email: false, phone: false });
  const [copied, setCopied] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setMouse({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  const copy = (val: string, key: string) => {
    navigator.clipboard.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <section
      id="contact"
      ref={ref}
      onMouseMove={onMove}
      className="relative bg-ink text-paper px-6 md:px-10 py-32 overflow-hidden"
    >
      <div
        className="absolute pointer-events-none w-[600px] h-[600px] rounded-full bg-lime opacity-30 blur-3xl transition-transform duration-300 ease-out"
        style={{ left: `${mouse.x}%`, top: `${mouse.y}%`, transform: "translate(-50%, -50%)" }}
      />

      <div className="max-w-[1600px] mx-auto relative">
        <span className="font-mono text-xs uppercase tracking-widest text-paper/60">[ 04 — contact ]</span>
        <h2 className="font-display text-6xl md:text-[10vw] leading-[0.9] tracking-tighter mt-6">
          let's build
          <br />
          something
          <br />
          <span className="text-lime italic">unhinged.</span>
        </h2>

        <p className="mt-10 max-w-xl text-lg text-paper/80">
          Tap a card to reveal. Click again to copy. Then send me a message — I usually reply within a few hours.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl">
          <RevealCard
            label="email"
            icon={<Mail className="w-6 h-6" />}
            value={EMAIL}
            revealed={revealed.email}
            onReveal={() => setRevealed((s) => ({ ...s, email: true }))}
            onCopy={() => copy(EMAIL, "email")}
            copied={copied === "email"}
            href={`mailto:${EMAIL}`}
          />
          <RevealCard
            label="phone"
            icon={<Phone className="w-6 h-6" />}
            value={PHONE}
            revealed={revealed.phone}
            onReveal={() => setRevealed((s) => ({ ...s, phone: true }))}
            onCopy={() => copy(PHONE, "phone")}
            copied={copied === "phone"}
            href={`tel:+15015506132`}
          />
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <a href={`mailto:${EMAIL}?subject=Let's%20build%20a%20website`} className="inline-flex items-center gap-2 bg-lime text-ink px-6 py-4 rounded-full font-mono text-sm hover:bg-paper transition-colors">
            send an email <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href={`tel:+15015506132`} className="inline-flex items-center gap-2 border border-paper px-6 py-4 rounded-full font-mono text-sm hover:bg-paper hover:text-ink transition-colors">
            call directly <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

const RevealCard = ({ label, icon, value, revealed, onReveal, onCopy, copied, href }: any) => (
  <div
    onClick={revealed ? onCopy : onReveal}
    className="group relative cursor-pointer border border-paper/30 rounded-2xl p-8 hover:border-lime transition-all bg-ink/40 backdrop-blur-sm overflow-hidden"
  >
    <div className="flex items-center justify-between mb-6">
      <span className="font-mono text-xs uppercase tracking-widest text-paper/60">{label}</span>
      <div className="text-paper/60 group-hover:text-lime transition-colors">{icon}</div>
    </div>

    <div className="font-display text-3xl md:text-4xl tracking-tight min-h-[3rem] flex items-center">
      {revealed ? (
        <span className="animate-fade-up">{value}</span>
      ) : (
        <span className="text-paper/40 select-none">•••• ••••• •••• ••••</span>
      )}
    </div>

    <div className="mt-6 flex items-center justify-between font-mono text-xs uppercase tracking-widest">
      <span className="text-paper/50">
        {revealed ? (copied ? "copied!" : "click to copy") : "click to reveal"}
      </span>
      {revealed && (
        <div className="flex items-center gap-3">
          <button onClick={(e) => { e.stopPropagation(); onCopy(); }} className="hover:text-lime transition-colors">
            {copied ? <Check className="w-4 h-4 text-lime" /> : <Copy className="w-4 h-4" />}
          </button>
          <a href={href} onClick={(e) => e.stopPropagation()} className="hover:text-lime transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-paper px-6 md:px-10 py-10 border-t-2 border-ink">
    <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-4 justify-between items-center font-mono text-xs">
      <span>© {new Date().getFullYear()} Vihaan Bandari — made in my bedroom 🛏️</span>
      <span className="text-muted-foreground">no templates were harmed in the making of this site</span>
    </div>
  </footer>
);

export default Index;
