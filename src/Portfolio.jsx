import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Download, ExternalLink, ChevronDown, ArrowUp, Sun, Moon, MapPin, Calendar, Briefcase, GraduationCap, Trophy, Send, ChevronRight, Star, Code2, BarChart3, Cloud, Brain, Cpu, FlaskConical, Microscope, Database } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   CONFIG — Edit this ONE object to update the entire site
   ═══════════════════════════════════════════════════════════════ */
const C = {
  name: "Shreya",
  fullName: "Shreya Pramanik",
  headline: "Data Analyst · ML Engineer",
  tagline: "I build ML pipelines and analytics systems that turn messy data into business-critical decisions.",
  bio: [
    "Statistics MS graduate from the University of Minnesota with production experience deploying XGBoost, LSTM, and Prophet ensembles for demand forecasting at HSBC — achieving 80–86% accuracy across 5+ APAC contact centers.",
    "I've built end-to-end ML pipelines spanning feature engineering through model evaluation across deep learning, hospital financial stress-testing, and multi-modal EEG classification — delivering up to 49% improvement over single-source baselines.",
  ],
  resumeUrl: "/ShreyaPramanik_resumeDS.pdf",
  links: {
    github: "https://github.com/Shreya-bristi",       // ← replace with your actual GitHub URL
    linkedin: "https://www.linkedin.com/in/shreyabristi20/", // ← replace with your actual LinkedIn URL
    email: "shreyapramanik0808@gmail.com",
  },
  stats: [
    { value: "4+",    label: "Years Experience" },
    { value: "8+",    label: "Projects Shipped" },
    { value: "15+",   label: "Technologies" },
    { value: "100K+", label: "Records Modeled" },
  ],
  skills: [
    {
      category: "Languages & Stats",
      icon: "code",
      items: [
        { name: "Python", level: 92 },
        { name: "R", level: 85 },
        { name: "SQL (MySQL / BigQuery)", level: 90 },
        { name: "SAS / MATLAB", level: 60 },
      ],
    },
    {
      category: "ML & Deep Learning",
      icon: "brain",
      items: [
        { name: "scikit-learn / XGBoost", level: 88 },
        { name: "PyTorch", level: 78 },
        { name: "TensorFlow", level: 75 },
        { name: "NLP / Clustering", level: 72 },
      ],
    },
    {
      category: "BI & Visualization",
      icon: "chart",
      items: [
        { name: "Power BI (DAX / PQ)", level: 88 },
        { name: "Tableau", level: 75 },
        { name: "Excel (Advanced)", level: 90 },
        { name: "Matplotlib / Seaborn", level: 85 },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: "cloud",
      items: [
        { name: "AWS / Azure", level: 68 },
        { name: "Snowflake / Databricks", level: 65 },
        { name: "Docker / Git / Airflow", level: 72 },
        { name: "n8n / ETL Pipelines", level: 70 },
      ],
    },
  ],
  experience: [
    {
      role: "Graduate Research Assistant",
      company: "Carlson School of Management, UMN",
      location: "Minneapolis, MN",
      duration: "Feb 2026 – May 2026",
      achievements: [
        "Cleaned 654 survey responses (flagged ~5% low-quality) and coded 16 interview transcripts (Cohen's κ = 0.78) for a longitudinal reduced work-week policy study.",
      ],
      tech: ["R", "Survey Design", "Qualitative Coding"],
    },
    {
      role: "Graduate Teaching Assistant",
      company: "School of Statistics, UMN",
      location: "Minneapolis, MN",
      duration: "Sep 2023 – Jan 2026",
      achievements: [
        "Led coding labs for regression and simulation courses, mentoring 100+ graduate students on statistical programming in R.",
      ],
      tech: ["R", "Statistical Simulation", "Regression"],
    },
    {
      role: "Data Analyst — Wealth & Personal Banking",
      company: "HSBC Electronic Data Processing",
      location: "Bengaluru, India",
      duration: "Jul 2022 – Jul 2023",
      achievements: [
        "Queried large-scale customer contact datasets via SQL across 5+ APAC contact centers; built Excel reporting tools with pivot tables, lookup formulas, and automated KPI summaries.",
        "Developed and deployed an ensemble of XGBoost, LSTM, and Prophet demand forecasting models achieving 80–86% accuracy, informing real-time staffing for hundreds of daily interactions.",
        "Led production-ready modeling pipeline on Malaysia customer-contact data to detect demand surges during digital-banking rollouts, informing workforce planning decisions.",
      ],
      tech: ["Python", "SQL", "XGBoost", "LSTM", "Prophet", "Excel"],
    },
  ],
  projects: [
    {
      title: "E-Commerce Analytics Platform",
      period: "Jun – Jul 2026",
      desc: "End-to-end ETL pipeline ingesting 100K+ transactions through a 3-layer medallion architecture into a 5-page Power BI dashboard tracking $13.17M in revenue across 95K orders.",
      impact: "Identified checkout as highest drop-off (11.56%), organic search 62x more efficient than paid; validated 31% conversion lift via A/B testing with z-test (z = 9.24).",
      tech: ["MySQL", "Python", "Power BI", "DAX", "GitHub Actions"],
      github: "https://github.com/shreyapramanik", // ← replace with actual repo link
      featured: true,
      emoji: "📊",
    },
    {
      title: "Financial Shock Effects on Hospitals",
      period: "Jan – Feb 2026",
      desc: "Engineered 15+ features from HCRIS cost reports and trained XGBoost predicting hospital operating margins under 5–15% Medicaid reimbursement shocks.",
      impact: "Ranked hospitals by resilience (Δmargin); urban teaching hospitals (Medicaid ~40–60%) became fragile while private urban hospitals held positive margins.",
      tech: ["Python", "XGBoost", "Feature Engineering"],
      github: "",
      featured: true,
      emoji: "🏥",
    },
    {
      title: "Cascaded Diffusion — Masked Conditioning",
      period: "Sep – Dec 2025",
      desc: "Channel-masked conditioning variant of cascaded diffusion (64×64 → 128×128), corrupting RGB channels at p=0.35 for robust super-resolution generation.",
      impact: "Two-stage U-Net pipeline with cosine schedule (T=1000), EMA (0.995), DDIM sampling — FID ~42 on 30-class ImageNet subset (~33K images).",
      tech: ["PyTorch", "U-Net", "Diffusion Models", "DDIM"],
      github: "https://github.com/shreyapramanik", // ← replace with actual repo link
      featured: false,
      emoji: "🎨",
    },
    {
      title: "Harmful Brain Activity Classification",
      period: "Feb – May 2025",
      desc: "8-channel multi-modal EEG pipeline fusing raw waveforms with spectrograms across 17,089 patient recordings, mapping 19 electrode pairs to 4 brain regions.",
      impact: "Best KL divergence 0.43 (49% over single-source baselines) detecting 6 harmful brain activity patterns via ResNet & EfficientNetB2.",
      tech: ["TensorFlow", "ResNet", "EfficientNet", "EEG"],
      github: "https://github.com/shreyapramanik", // ← replace with actual repo link
      featured: false,
      emoji: "🧠",
    },
    {
      title: "Auto Insurance Claim Prediction",
      period: "Oct – Dec 2024",
      desc: "R-based modeling for 60K-record insurance claim-cost prediction (6.8% non-zero claims), comparing Logit+Gamma, Tweedie, and XGBoost approaches.",
      impact: "Normalized Gini index of 0.45; presented stakeholder-ready risk drivers including exposure, vehicle value, and engineered ratio features.",
      tech: ["R", "XGBoost", "Tweedie", "Cross-Validation"],
      github: "",
      featured: false,
      emoji: "🚗",
    },
    {
      title: "Twitter Discourse: Russia-Ukraine",
      period: "Jan – Apr 2022",
      desc: "End-to-end NLP pipeline: scraped 2.9M tweets, filtered to 943K English posts (~67% noise reduction), applied PCA + K-Means clustering.",
      impact: "Surfaced 3 dominant discourse themes across geopolitical, humanitarian, and nuclear threat narratives.",
      tech: ["NLP", "K-Means", "TF-IDF", "PCA", "Python"],
      github: "",
      featured: false,
      emoji: "🐦",
    },
  ],
  education: [
    {
      degree: "Master of Statistics",
      school: "University of Minnesota",
      location: "Minneapolis, MN",
      duration: "Sep 2023 – Aug 2026",
      courses: ["Data Mining", "Computer Vision", "Regression Analysis", "Advanced Probability", "Bayesian Analysis"],
    },
    {
      degree: "Master of Statistics",
      school: "Indian Institute of Technology Kanpur",
      location: "Kanpur, India",
      duration: "Sep 2020 – Jun 2022",
      courses: ["Statistical Simulation", "Time Series Analysis", "Design of Experiment", "Stochastic Processes"],
    },
    {
      degree: "Bachelor of Statistics",
      school: "Presidency University",
      location: "Kolkata, India",
      duration: "Jul 2017 – Jul 2020",
      courses: [],
    },
  ],
  achievements: [
    {
      title: "HeatMap Hackathon 2026 — Winner",
      desc: "BData Inc. × American Burn Association × MN Healthcare — built a geospatial solution translating burn injury data into equitable care access analysis, selected for real-world strategic impact.",
    },
    {
      title: "Academic Excellence Award — IIT Kanpur",
      desc: "Recognized for outstanding performance in MSc Statistics program.",
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════════════════════════ */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.unobserve(el); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const h = () => {
      const d = document.documentElement;
      setP(d.scrollTop / (d.scrollHeight - d.clientHeight || 1));
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return p;
}

/* ═══════════════════════════════════════════════════════════════
   SMALL COMPONENTS
   ═══════════════════════════════════════════════════════════════ */
const Reveal = ({ id, children }) => {
  const [ref, vis] = useInView(0.06);
  return (
    <section id={id} ref={ref} style={{
      opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(34px)",
      transition: "opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1)",
    }}>{children}</section>
  );
};

const SectionLabel = ({ text }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
    <span style={{ fontSize: 11, fontFamily: "var(--mono)", color: "var(--a1)", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" }}>{text}</span>
    <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
  </div>
);

const H2 = ({ children }) => (
  <h2 style={{ fontSize: "clamp(27px,4vw,43px)", fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1.12, marginBottom: 46 }}>{children}</h2>
);

const Pill = ({ children, glow }) => (
  <span style={{
    padding: "4px 12px", borderRadius: 7, fontSize: 11, fontWeight: 600,
    background: glow ? "var(--a1)" : "var(--surf2)", color: glow ? "#fff" : "var(--t3)",
    letterSpacing: glow ? ".04em" : 0, textTransform: glow ? "uppercase" : "none",
  }}>{children}</span>
);

const SkillBar = ({ name, level, delay, go }) => (
  <div style={{ marginBottom: 13 }}>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5, fontSize: 12.5 }}>
      <span style={{ color: "var(--t1)", fontWeight: 500 }}>{name}</span>
      <span style={{ color: "var(--t3)", fontFamily: "var(--mono)", fontSize: 11 }}>{level}%</span>
    </div>
    <div style={{ height: 5, borderRadius: 3, background: "var(--surf2)", overflow: "hidden" }}>
      <div style={{
        height: "100%", borderRadius: 3, background: "linear-gradient(90deg,var(--a1),var(--a2))",
        width: go ? `${level}%` : "0%", transition: `width 1.1s cubic-bezier(.16,1,.3,1) ${delay}ms`,
      }} />
    </div>
  </div>
);

const CatIcon = ({ t }) => {
  const p = { size: 17, strokeWidth: 1.5, color: "var(--a1)" };
  return t === "code" ? <Code2 {...p}/> : t === "chart" ? <BarChart3 {...p}/> : t === "cloud" ? <Cloud {...p}/> : <Brain {...p}/>;
};

function ProjectCard({ p }) {
  return (
    <div style={{
      borderRadius: 18, background: "var(--cardBg)", border: "1px solid var(--border)",
      overflow: "hidden", transition: "transform .3s,box-shadow .3s,border-color .3s",
      display: "flex", flexDirection: "column",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "var(--a1)"; e.currentTarget.style.boxShadow = "0 10px 36px var(--glow)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = ""; }}
    >
      <div style={{ height: 130, background: "var(--surf2)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", fontSize: 40, opacity: .45 }}>
        {p.emoji}
        {p.featured && <span style={{ position: "absolute", top: 10, right: 10 }}><Pill glow>Featured</Pill></span>}
      </div>
      <div style={{ padding: 22, flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, gap: 8 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-.015em", flex: 1 }}>{p.title}</h3>
          <span style={{ fontSize: 10.5, color: "var(--t3)", fontFamily: "var(--mono)", whiteSpace: "nowrap" }}>{p.period}</span>
        </div>
        <p style={{ fontSize: 13, lineHeight: 1.65, color: "var(--t2)", marginBottom: 12, flex: 1 }}>{p.desc}</p>
        <div style={{ padding: "9px 13px", borderRadius: 10, background: "var(--surf)", marginBottom: 12, fontSize: 12, color: "var(--a1)", fontWeight: 500, display: "flex", alignItems: "flex-start", gap: 7, lineHeight: 1.55 }}>
          <Star size={12} style={{ marginTop: 3, flexShrink: 0 }} /> {p.impact}
        </div>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: p.github ? 12 : 0 }}>
          {p.tech.map(t => (<Pill key={t}>{t}</Pill>))}
        </div>
        {p.github && (
          <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 600, color: "var(--t3)", textDecoration: "none", marginTop: 2 }}>
            <Github size={13} /> View on GitHub <ExternalLink size={10} />
          </a>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN
   ═══════════════════════════════════════════════════════════════ */
export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [activeNav, setActiveNav] = useState("hero");
  const [showTop, setShowTop] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const scroll = useScrollProgress();

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const ids = ["hero", "about", "skills", "experience", "projects", "education", "achievements", "contact"];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActiveNav(e.target.id); });
    }, { rootMargin: "-40% 0px -40% 0px" });
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const t = dark ? {
    "--bg": "#060610", "--bg2": "#0b0b1a", "--surf": "rgba(255,255,255,.025)", "--surf2": "rgba(255,255,255,.06)",
    "--border": "rgba(255,255,255,.06)", "--t1": "#f0f0f5", "--t2": "#b8b8cc", "--t3": "#6b6b82",
    "--a1": "#14b8a6", "--a2": "#818cf8", "--a3": "#c084fc", "--cardBg": "rgba(255,255,255,.018)",
    "--glass": "rgba(6,6,16,.82)", "--glow": "rgba(20,184,166,.12)", "--mono": "ui-monospace,SFMono-Regular,monospace",
  } : {
    "--bg": "#fafafa", "--bg2": "#f0f0f4", "--surf": "rgba(0,0,0,.028)", "--surf2": "rgba(0,0,0,.07)",
    "--border": "rgba(0,0,0,.08)", "--t1": "#111118", "--t2": "#3a3a4a", "--t3": "#7a7a92",
    "--a1": "#0d9488", "--a2": "#6366f1", "--a3": "#a855f7", "--cardBg": "rgba(0,0,0,.015)",
    "--glass": "rgba(250,250,250,.85)", "--glow": "rgba(13,148,136,.06)", "--mono": "ui-monospace,SFMono-Regular,monospace",
  };

  const nav = [
    { id: "about", l: "About" }, { id: "skills", l: "Skills" }, { id: "experience", l: "Experience" },
    { id: "projects", l: "Projects" }, { id: "education", l: "Education" }, { id: "contact", l: "Contact" },
  ];

  const featured = C.projects.filter(p => p.featured);
  const others = C.projects.filter(p => !p.featured);

  return (
    <div style={{ ...t, background: "var(--bg)", color: "var(--t1)", fontFamily: "'Inter',system-ui,-apple-system,sans-serif", minHeight: "100vh", overflowX: "hidden", transition: "background .35s,color .35s" }}>

      {/* Progress */}
      <div style={{ position: "fixed", top: 0, left: 0, height: 2, zIndex: 100, background: "linear-gradient(90deg,var(--a1),var(--a2),var(--a3))", width: `${scroll * 100}%`, transition: "width .08s linear" }} />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 90, background: "var(--glass)", backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 58, padding: "0 24px" }}>
          <button onClick={() => go("hero")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--t1)", fontSize: 17, fontWeight: 800, letterSpacing: "-.03em" }}>
            {C.name}<span style={{ color: "var(--a1)" }}>.</span>
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div className="desk-nav" style={{ display: "flex", gap: 2 }}>
              {nav.map(n => (
                <button key={n.id} onClick={() => go(n.id)} style={{
                  background: activeNav === n.id ? "var(--surf2)" : "none", border: "none", cursor: "pointer",
                  padding: "5px 12px", borderRadius: 6, fontSize: 12, fontWeight: 500,
                  color: activeNav === n.id ? "var(--t1)" : "var(--t3)", transition: "all .2s",
                }}>{n.l}</button>
              ))}
            </div>
            <div style={{ width: 1, height: 18, background: "var(--border)", margin: "0 6px" }} />
            <button onClick={() => setDark(!dark)} aria-label="Toggle theme" style={{ background: "var(--surf)", border: "1px solid var(--border)", cursor: "pointer", borderRadius: 8, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t3)" }}>
              {dark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <a href={C.resumeUrl} target="_blank" rel="noopener noreferrer" style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))", color: "#fff", padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
              <Download size={13} /> Resume
            </a>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "120px 24px 80px" }}>
        <div style={{ position: "absolute", top: "8%", right: "8%", width: 500, height: 500, borderRadius: "50%", filter: "blur(130px)", opacity: .25, background: "radial-gradient(circle,var(--a1),var(--a2),transparent 70%)", animation: "orb 9s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "4%", left: "3%", width: 360, height: 360, borderRadius: "50%", filter: "blur(110px)", opacity: .16, background: "radial-gradient(circle,var(--a3),transparent 70%)", animation: "orb 11s ease-in-out infinite reverse", pointerEvents: "none" }} />

        <div style={{ maxWidth: 860, textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 15px", borderRadius: 100, border: "1px solid var(--border)", background: "var(--surf)", fontSize: 12.5, color: "var(--t3)", marginBottom: 28, animation: "up .6s cubic-bezier(.16,1,.3,1) both" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
            Open to opportunities
          </div>

          <h1 style={{ fontSize: "clamp(36px,7vw,76px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-.045em", margin: "0 0 16px", animation: "up .6s cubic-bezier(.16,1,.3,1) .08s both" }}>
            Hi, I'm {C.name}.
            <br />
            <span style={{ background: "linear-gradient(135deg,var(--a1),var(--a2),var(--a3))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {C.headline}
            </span>
          </h1>

          <p style={{ fontSize: "clamp(15px,1.8vw,18px)", color: "var(--t2)", lineHeight: 1.65, maxWidth: 560, margin: "0 auto 34px", animation: "up .6s cubic-bezier(.16,1,.3,1) .16s both" }}>
            {C.tagline}
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", animation: "up .6s cubic-bezier(.16,1,.3,1) .24s both" }}>
            <button onClick={() => go("projects")} style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))", color: "#fff", border: "none", padding: "13px 26px", borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 7, boxShadow: "0 4px 20px var(--glow)" }}>
              View Projects <ChevronRight size={15} />
            </button>
            <a href={`mailto:${C.links.email}`} style={{ background: "var(--surf)", color: "var(--t1)", border: "1px solid var(--border)", padding: "13px 26px", borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: "pointer", textDecoration: "none", display: "flex", alignItems: "center", gap: 7 }}>
              <Mail size={15} /> Get in Touch
            </a>
          </div>

          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 26, animation: "up .6s cubic-bezier(.16,1,.3,1) .32s both" }}>
            {[
              { icon: <Github size={17} />, href: C.links.github, label: "GitHub" },
              { icon: <Linkedin size={17} />, href: C.links.linkedin, label: "LinkedIn" },
              { icon: <Mail size={17} />, href: `mailto:${C.links.email}`, label: "Email" },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{ width: 42, height: 42, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--surf)", border: "1px solid var(--border)", color: "var(--t3)", textDecoration: "none", transition: "all .2s" }}>{s.icon}</a>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", gap: 14, marginTop: 52, animation: "up .6s cubic-bezier(.16,1,.3,1) .4s both" }}>
            {C.stats.map((s, i) => (
              <div key={i} style={{ padding: "16px 10px", borderRadius: 14, background: "var(--cardBg)", border: "1px solid var(--border)", textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-.03em", background: "linear-gradient(135deg,var(--a1),var(--a2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.value}</div>
                <div style={{ fontSize: 10.5, color: "var(--t3)", marginTop: 3, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".07em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => go("about")} aria-label="Scroll down" style={{ position: "absolute", bottom: 26, left: "50%", transform: "translateX(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--t3)", animation: "bounce 2s ease-in-out infinite" }}>
          <ChevronDown size={22} />
        </button>
      </section>

      {/* ═══ ABOUT ═══ */}
      <Reveal id="about">
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "92px 24px" }}>
          <SectionLabel text="About" />
          <h2 style={{ fontSize: "clamp(26px,4vw,42px)", fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1.15, marginBottom: 26 }}>
            Statistician who ships{" "}
            <span style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>production ML.</span>
          </h2>
          {C.bio.map((p, i) => (
            <p key={i} style={{ fontSize: 15.5, lineHeight: 1.75, color: "var(--t2)", marginBottom: 16, maxWidth: 680 }}>{p}</p>
          ))}
          <div style={{ display: "flex", gap: 9, marginTop: 26, flexWrap: "wrap" }}>
            {["Python", "SQL", "R", "Power BI", "XGBoost", "PyTorch", "TensorFlow", "Snowflake", "AWS", "Docker"].map(t => (
              <span key={t} style={{ padding: "5px 14px", borderRadius: 100, fontSize: 12, fontWeight: 500, border: "1px solid var(--border)", background: "var(--surf)", color: "var(--t2)" }}>{t}</span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ═══ SKILLS ═══ */}
      <Reveal id="skills">
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "92px 24px" }}>
          <SectionLabel text="Skills" />
          <H2>Technical toolkit</H2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(245px,1fr))", gap: 20 }}>
            {C.skills.map((cat, ci) => {
              const [ref, vis] = useInView(.15);
              return (
                <div key={ci} ref={ref} style={{ padding: 24, borderRadius: 16, background: "var(--cardBg)", border: "1px solid var(--border)", transition: "border-color .3s,box-shadow .3s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(20,184,166,.22)"; e.currentTarget.style.boxShadow = "0 8px 30px var(--glow)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 20 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--surf2)" }}>
                      <CatIcon t={cat.icon} />
                    </div>
                    <span style={{ fontSize: 13.5, fontWeight: 700 }}>{cat.category}</span>
                  </div>
                  {cat.items.map((s, si) => (
                    <SkillBar key={si} name={s.name} level={s.level} delay={si * 130} go={vis} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* ═══ EXPERIENCE ═══ */}
      <Reveal id="experience">
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "92px 24px" }}>
          <SectionLabel text="Experience" />
          <H2>Where I've worked</H2>
          <div style={{ position: "relative", paddingLeft: 28 }}>
            <div style={{ position: "absolute", left: 6, top: 8, bottom: 8, width: 2, background: "linear-gradient(180deg,var(--a1),var(--a2),transparent)" }} />
            {C.experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: 36, position: "relative" }}>
                <div style={{ position: "absolute", left: -28, top: 6, width: 14, height: 14, borderRadius: "50%", border: "3px solid var(--a1)", background: "var(--bg)" }} />
                <div style={{ padding: 24, borderRadius: 16, background: "var(--cardBg)", border: "1px solid var(--border)", transition: "border-color .3s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(20,184,166,.2)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 6, marginBottom: 6 }}>
                    <div>
                      <h3 style={{ fontSize: 16.5, fontWeight: 700, letterSpacing: "-.015em", marginBottom: 3 }}>{exp.role}</h3>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--t3)", fontSize: 12.5, flexWrap: "wrap" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Briefcase size={11} /> {exp.company}</span>
                        <span style={{ display: "flex", alignItems: "center", gap: 4 }}><MapPin size={11} /> {exp.location}</span>
                      </div>
                    </div>
                    <span style={{ fontSize: 11.5, color: "var(--t3)", display: "flex", alignItems: "center", gap: 4, fontFamily: "var(--mono)", whiteSpace: "nowrap" }}>
                      <Calendar size={11} /> {exp.duration}
                    </span>
                  </div>
                  <ul style={{ margin: "12px 0 12px 16px", padding: 0 }}>
                    {exp.achievements.map((a, j) => (
                      <li key={j} style={{ fontSize: 14, lineHeight: 1.7, color: "var(--t2)", marginBottom: 4 }}>{a}</li>
                    ))}
                  </ul>
                  <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                    {exp.tech.map(t => (<Pill key={t}>{t}</Pill>))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ═══ PROJECTS ═══ */}
      <Reveal id="projects">
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "92px 24px" }}>
          <SectionLabel text="Projects" />
          <H2>Selected work</H2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 20 }}>
            {featured.map((p, i) => (<ProjectCard key={i} p={p} />))}
          </div>

          {others.length > 0 && (
            <>
              <button onClick={() => setExpanded(!expanded)} style={{
                margin: "32px auto 0", display: "flex", alignItems: "center", gap: 8,
                background: "var(--surf)", border: "1px solid var(--border)", padding: "9px 20px",
                borderRadius: 10, fontSize: 13, fontWeight: 600, color: "var(--t2)", cursor: "pointer",
              }}>
                {expanded ? "Show less" : `Show ${others.length} more projects`}
                <ChevronDown size={14} style={{ transform: expanded ? "rotate(180deg)" : "", transition: "transform .3s" }} />
              </button>
              <div style={{ maxHeight: expanded ? 3000 : 0, overflow: "hidden", transition: "max-height .6s cubic-bezier(.16,1,.3,1)", marginTop: expanded ? 20 : 0 }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 20 }}>
                  {others.map((p, i) => (<ProjectCard key={i} p={p} />))}
                </div>
              </div>
            </>
          )}
        </div>
      </Reveal>

      {/* ═══ EDUCATION ═══ */}
      <Reveal id="education">
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "92px 24px" }}>
          <SectionLabel text="Education" />
          <H2>Academic background</H2>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {C.education.map((ed, i) => (
              <div key={i} style={{ padding: 26, borderRadius: 16, background: "var(--cardBg)", border: "1px solid var(--border)" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 13, marginBottom: ed.courses.length ? 16 : 0 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--surf2)", flexShrink: 0 }}>
                    <GraduationCap size={19} style={{ color: "var(--a1)" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-.015em" }}>{ed.degree}</h3>
                    <div style={{ fontSize: 14, color: "var(--t2)", marginTop: 2 }}>{ed.school}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 4, fontSize: 12, color: "var(--t3)" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: "var(--mono)" }}><Calendar size={11} /> {ed.duration}</span>
                      {ed.location && <span style={{ display: "flex", alignItems: "center", gap: 4 }}><MapPin size={11} /> {ed.location}</span>}
                    </div>
                  </div>
                </div>
                {ed.courses.length > 0 && (
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {ed.courses.map(c => (<Pill key={c}>{c}</Pill>))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ═══ ACHIEVEMENTS ═══ */}
      <Reveal id="achievements">
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "44px 24px 92px" }}>
          <SectionLabel text="Achievements" />
          <H2>Recognition</H2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 18 }}>
            {C.achievements.map((a, i) => (
              <div key={i} style={{ padding: 24, borderRadius: 16, background: "var(--cardBg)", border: "1px solid var(--border)", display: "flex", gap: 13, alignItems: "flex-start", transition: "border-color .3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(20,184,166,.22)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,rgba(20,184,166,.12),rgba(129,140,248,.12))", flexShrink: 0 }}>
                  <Trophy size={17} style={{ color: "var(--a1)" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: 14.5, fontWeight: 700, marginBottom: 5 }}>{a.title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--t2)" }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ═══ CONTACT ═══ */}
      <Reveal id="contact">
        <div style={{ maxWidth: 660, margin: "0 auto", padding: "44px 24px 110px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", padding: "5px 14px", borderRadius: 100, border: "1px solid var(--border)", background: "var(--surf)", fontSize: 11, fontFamily: "var(--mono)", color: "var(--t3)", marginBottom: 18, letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 700 }}>
            Contact
          </div>
          <h2 style={{ fontSize: "clamp(28px,5vw,52px)", fontWeight: 800, letterSpacing: "-.04em", lineHeight: 1.1, marginBottom: 16 }}>
            Let's work{" "}
            <span style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>together</span>
          </h2>
          <p style={{ fontSize: 15.5, color: "var(--t2)", lineHeight: 1.7, marginBottom: 34 }}>
            I'm actively looking for Data Analyst, Business Intelligence, and Data Scientist roles. If my profile looks like a fit, I'd love to hear from you.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`mailto:${C.links.email}`} style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))", color: "#fff", padding: "14px 28px", borderRadius: 12, fontSize: 15, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 22px var(--glow)" }}>
              <Mail size={17} /> Send Email
            </a>
            <a href={C.links.linkedin} target="_blank" rel="noopener noreferrer" style={{ background: "var(--surf)", color: "var(--t1)", border: "1px solid var(--border)", padding: "14px 28px", borderRadius: 12, fontSize: 15, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              <Linkedin size={17} /> LinkedIn
            </a>
          </div>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 34 }}>
            <a href={C.links.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--t3)" }}><Github size={18} /></a>
            <a href={C.links.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--t3)" }}><Linkedin size={18} /></a>
            <a href={`mailto:${C.links.email}`} style={{ color: "var(--t3)" }}><Mail size={18} /></a>
          </div>
        </div>
      </Reveal>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: 20, textAlign: "center", fontSize: 12, color: "var(--t3)" }}>
        Built by {C.fullName} · © {new Date().getFullYear()}
      </footer>

      {/* Back to top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" style={{
        position: "fixed", bottom: 20, right: 20, width: 40, height: 40, borderRadius: 10,
        background: "var(--glass)", border: "1px solid var(--border)", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t3)", zIndex: 80,
        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        opacity: showTop ? 1 : 0, transform: showTop ? "translateY(0)" : "translateY(12px)",
        pointerEvents: showTop ? "auto" : "none", transition: "all .3s",
      }}><ArrowUp size={16} /></button>

      {/* Floating resume */}
      <a href={C.resumeUrl} target="_blank" rel="noopener noreferrer" style={{
        position: "fixed", bottom: 20, left: 20, padding: "9px 16px", borderRadius: 10,
        background: "linear-gradient(135deg,var(--a1),var(--a2))", color: "#fff",
        fontSize: 12, fontWeight: 600, textDecoration: "none", zIndex: 80,
        display: "flex", alignItems: "center", gap: 5, boxShadow: "0 4px 18px var(--glow)",
        opacity: showTop ? 1 : 0, transform: showTop ? "translateY(0)" : "translateY(12px)",
        pointerEvents: showTop ? "auto" : "none", transition: "all .3s",
      }}><Download size={12} /> Resume</a>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *{margin:0;padding:0;box-sizing:border-box;}
        html{scroll-behavior:smooth;}
        ::selection{background:var(--a1);color:#fff;}
        ::-webkit-scrollbar{width:5px;}
        ::-webkit-scrollbar-track{background:transparent;}
        ::-webkit-scrollbar-thumb{background:var(--surf2);border-radius:3px;}
        @keyframes up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(7px)}}
        @keyframes orb{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(26px,-16px) scale(1.04)}66%{transform:translate(-16px,12px) scale(.96)}}
        button:focus-visible,a:focus-visible{outline:2px solid var(--a1);outline-offset:2px;}
        @media(max-width:768px){.desk-nav{display:none!important;}}
      `}</style>
    </div>
  );
}
