import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Download, ExternalLink, ChevronDown, ArrowUp, Sun, Moon, MapPin, Calendar, Briefcase, GraduationCap, Trophy, ChevronRight, Star, Code2, BarChart3, Cloud, Brain, Sparkles, Award, User } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════ */
const C = {
  name: "Shreya Pramanik",
  greetings: ["Hello World, I'm", "Hallo Welt, ich bin", "Bonjour le monde, je suis", "你好世界，我是", "Hola mundo, soy", "Ciao mondo, sono"],
  roles: ["Data Scientist", "Data Analyst", "Data Engineer", "Business Intelligence Analyst", "Power BI Developer", "Statistician"],
  tagline: "Building ML pipelines and analytics systems that turn messy data into business-critical decisions.",
  bio: [
    "I am a Data Science and AI enthusiast, currently finishing my Master's in Statistics from the University of Minnesota. With 3+ years of hands-on experience through industry roles and research projects, I have developed solutions in demand forecasting, predictive modeling, healthcare analytics, NLP, and LLM-powered applications.",
    "At HSBC, I built Power BI dashboards and ensemble forecasting models (XGBoost, LSTM, Prophet) across 5+ APAC contact centers, achieving 80\u201386% accuracy for real-time staffing decisions. Since then, I've developed RAG pipelines with LangChain, ChromaDB, and LangSmith, built LLM-powered clinical tools using Google Gemini on Streamlit Cloud, and trained multi-modal EEG classifiers across 17K+ patient recordings. My work spans the full data lifecycle: star schema design, complex SQL, feature engineering, deep learning, prompt optimization, and production guardrails.",
  ],
  heroPills: ["Python", "SQL", "R", "Power BI", "PyTorch", "TensorFlow", "LangChain", "Claude Code"],
  resumeUrl: "/ShreyaPramanik_CV.pdf",
  links: {
    github: "https://github.com/Shreya-bristi",
    linkedin: "https://www.linkedin.com/in/shreyabristi20/",
    email: "prama018@umn.edu",
    phone: "9522455379",
  },
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "Projects" },
    { value: "100K+", label: "Records Modeled" },
  ],
  skills: [
    { category: "Data Science & Data Analytics", icon: "code", desc: "Statistical analysis, data visualization, optimization and decision science, and advanced machine learning.", items: ["Python", "R", "SQL", "Power BI", "Tableau", "SAS", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy", "Sklearn", "ggplot2", "Shiny", "Excel", "MATLAB", "MINITAB"] },
    { category: "AI & Deep Learning", icon: "brain", desc: "Deep learning, natural language processing, computer vision, and large language models.", items: ["TensorFlow", "PyTorch", "Keras", "OpenCV", "NLTK", "Scikit-learn", "LangChain", "LangSmith", "RAG", "ChromaDB", "Hugging Face", "Groq", "Prompt Engineering", "Diffusion Models"] },
    { category: "Cloud & DevOps", icon: "cloud", desc: "Database management, CI/CD pipelines, workflow automation, and cloud infrastructure.", items: ["MySQL", "PostgreSQL", "Google BigQuery", "AWS", "Azure", "Airflow", "n8n", "Docker", "Streamlit", "Databricks", "Git", "Claude Code", "GitHub Actions", "Snowflake"] },
    { category: "Statistics", icon: "chart", desc: "Experimental design, probabilistic modeling, causal reasoning, and applied statistical inference.", items: ["Bayesian Analysis", "Time Series", "Advanced Regression Analysis", "Hypothesis Testing", "A/B Testing", "Design of Experiment", "Linear Models", "Stochastic Processes", "Causal Inference", "SPSS"] },
  ],
  experience: [
    { role: "Graduate Research Assistant", company: "Carlson School of Management, UMN", location: "Minneapolis, MN", duration: "Feb 2026 – May 2026", achievements: ["Cleaned 654 survey responses (flagged ~5% low-quality) and coded 16 interview transcripts (Cohen's κ = 0.78) for a longitudinal reduced work-week policy study."], tech: ["R", "Survey Design", "Qualitative Coding"] },
    { role: "Graduate Teaching Assistant", company: "School of Statistics, UMN", location: "Minneapolis, MN", duration: "Sep 2023 – Jan 2026", achievements: ["Led coding labs for regression and simulation courses, mentoring 100+ graduate students on statistical programming in R."], tech: ["R", "Statistical Simulation", "Regression"] },
    { role: "Data Analyst, Wealth and Personal Banking", company: "HSBC Electronic Data Processing", location: "Bengaluru, India", duration: "Jul 2022 – Jul 2023", achievements: ["Queried large-scale customer contact datasets via SQL across 5+ APAC contact centers (Malaysia, Hong Kong, Singapore, India, Vietnam); built Excel-based reporting tools and Power BI dashboards with automated KPI summaries to surface operational trends.", "Developed and deployed ensemble demand forecasting models (XGBoost, LSTM, and Prophet) across Malaysia, Hong Kong, and Singapore contact centers, achieving 80–86% accuracy, informing real-time staffing decisions for hundreds of daily customer interactions.", "Led production-ready modeling pipeline on Malaysia customer-contact data to detect demand surges during digital-banking rollouts, informing workforce planning decisions to cross-functional teams."], tech: ["Python", "SQL", "XGBoost", "LSTM", "Prophet", "Excel", "Power BI", "Confluence", "Jira", "MySQL"] },
  ],
  projects: [
    { title: "Telecom Customer Care RAG Assistant", period: "Aug 2026", desc: "Deployed an end-to-end customer-facing RAG chatbot to Streamlit Cloud, serving telecom support queries in under 4 seconds via a LangChain pipeline ingesting 3 heterogeneous sources (CSV FAQ, SQLite tickets, PDF guide) into ChromaDB with Qwen 3.6 27B on Groq.", impact: "0.95 faithfulness and 1.00 conciseness via LangSmith experiment pipeline with 3 custom scorers; dual guardrail layers eliminating PII exposure and off-topic responses.", tech: ["LangChain", "ChromaDB", "LangSmith", "Groq", "Streamlit"], github: "https://github.com/Shreya-bristi/telecom-customer-care-assistant", featured: true, emoji: "🤖" },
    { title: "LLM-Powered Blood Work Report Analysis", period: "Aug 2026", desc: "Deployed a two-stage LangChain pipeline on Streamlit Cloud that extracts every blood test value, classifies it against reference ranges, and generates clinician-style health summaries with dietary guidance via Google Gemini (Gemma 3 27B) in under 10 seconds.", impact: "Domain-specific prompt chain mapping flagged blood markers to affordable Indian foods, delivering culturally relevant diet plans personalized to each report.", tech: ["LangChain", "Google Gemini", "Streamlit", "PyPDF"], github: "https://github.com/Shreya-bristi/blood-work-analysis", featured: true, emoji: "🩸" },
    { title: "E-Commerce Analytics Platform", period: "Jun – Jul 2026", desc: "End-to-end ETL pipeline ingesting 100K+ transactions through a 3-layer medallion architecture into a 5-page Power BI dashboard tracking $13.17M in revenue across 95K orders.", impact: "Identified checkout as highest drop-off (11.56%), organic search 62x more efficient than paid; validated 31% conversion lift via A/B testing (z = 9.24).", tech: ["MySQL", "Python", "Power BI", "DAX", "GitHub Actions"], github: "https://github.com/Shreya-bristi/ecommerce-analytics-platform", featured: true, emoji: "📊" },
    { title: "Financial Shock Effects on Hospitals", period: "Jan – Feb 2026", desc: "Engineered 15+ features from 66,679 HCRIS hospital-year cost reports and trained XGBoost with hospital-level grouped CV, achieving 0.084 MAE and 0.129 RMSE with SHAP surfacing occupancy and Medicaid as dominant drivers.", impact: "Low-exposure private urban hospitals absorbed shocks within 1.2pp of margin; high-exposure teaching hospitals became financially fragile.", tech: ["Python", "XGBoost", "SHAP", "Feature Engineering"], github: "https://github.com/Shreya-bristi/financial-shock-effect-on-hospital-operations", featured: true, emoji: "🏥" },
    { title: "Harmful Brain Activity Classification", period: "Feb – May 2025", desc: "Dual-source 8-channel spectrogram pipeline fusing Kaggle spectrograms with EEG-derived mel spectrograms across 17,089 patient recordings from the HMS Kaggle competition.", impact: "Reduced misclassification by 39% (KL 0.85 → 0.52); EfficientNetB0 on combined 512×512 spectrograms with cosine LR + mixed-precision on dual T4 GPUs.", tech: ["TensorFlow", "EfficientNet", "librosa", "scikit-learn"], github: "https://github.com/Shreya-bristi/harmful-brain-activity-classification", featured: true, emoji: "🧠" },
    { title: "Twitter Discourse: Russia-Ukraine", period: "Jan – Apr 2022", desc: "End-to-end NLP pipeline: scraped 2.9M tweets, filtered to 943K English posts (~67% noise reduction), applied PCA across 5 NLP representations retaining 90% variance.", impact: "Surfaced 3 dominant discourse themes across geopolitical, humanitarian, and nuclear threat narratives via silhouette-optimized K-Means.", tech: ["NLP", "K-Means", "TF-IDF", "PCA", "Python"], github: "https://github.com/Shreya-bristi/Twitter-Sentiment-Analysis", featured: true, emoji: "🐦" },
    { title: "Expense Automation Pipeline", period: "Mar – Apr 2026", desc: "Structured prompts for Gemini API to classify bank transactions into 7 spending categories, replacing manual expense review and reducing classification time from hours to under 5 minutes.", impact: "n8n pipeline connecting Drive, Gemini, Sheets & Telegram with JS normalization, dedup logic, and a Lovable finance dashboard.", tech: ["n8n", "Gemini API", "JavaScript", "Telegram"], github: "https://github.com/Shreya-bristi/n8n-automation-workflow", featured: false, emoji: "⚡" },
    { title: "Cascaded Diffusion — Masked Conditioning", period: "Sep – Dec 2025", desc: "Channel-masked conditioning variant of cascaded diffusion (64×64 → 128×128), corrupting RGB channels at p=0.35 for robust super-resolution generation.", impact: "Two-stage U-Net pipeline with cosine schedule (T=1000), EMA (0.995), DDIM — FID ~42 on 30-class ImageNet subset (~33K images).", tech: ["PyTorch", "U-Net", "Diffusion Models", "DDIM"], github: "https://github.com/Shreya-bristi/Cascaded-Diffusion-Model-for-Super-Resolution-Image-Generation", featured: false, emoji: "🎨" },
    { title: "Auto Insurance Claim Prediction", period: "Oct – Dec 2024", desc: "R-based modeling for 60K-record insurance claim-cost prediction (6.8% non-zero claims), comparing Logit+Gamma, Tweedie, and XGBoost.", impact: "Normalized Gini index of 0.45; presented stakeholder-ready risk drivers including exposure, vehicle value, and engineered ratio features.", tech: ["R", "XGBoost", "Tweedie", "Cross-Validation"], github: "", featured: false, emoji: "🚗" },
  ],
  education: [
    { degree: "Master of Statistics", school: "University of Minnesota", location: "Minneapolis, MN", duration: "Sep 2023 – Aug 2026", courses: ["Data Mining", "Computer Vision", "Regression Analysis", "Advanced Probability", "Bayesian Analysis"] },
    { degree: "Master of Statistics", school: "Indian Institute of Technology Kanpur", location: "Kanpur, India", duration: "Sep 2020 – Jun 2022", courses: ["Statistical Simulation", "Time Series Analysis", "Design of Experiment", "Stochastic Processes"] },
    { degree: "Bachelor of Statistics", school: "Presidency University", location: "Kolkata, India", duration: "Jul 2017 – Jul 2020", courses: [] },
  ],
  achievements: [
    { title: "HeatMap Hackathon 2026 — Winner", desc: "BData Inc. × American Burn Association × MN Healthcare — built a geospatial solution translating burn injury data into equitable care access analysis, selected for real-world strategic impact.", icon: "trophy" },
    { title: "Academic Excellence Award — IIT Kanpur", desc: "Recognized for outstanding performance in MSc Statistics program.", icon: "award" },
  ],
};

/* ═══ HOOKS ═══ */
function useInView(thr = 0.1) {
  const ref = useRef(null); const [v, sv] = useState(false);
  useEffect(() => { const el = ref.current; if (!el) return; const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { sv(true); o.unobserve(el); } }, { threshold: thr }); o.observe(el); return () => o.disconnect(); }, [thr]);
  return [ref, v];
}
function useScroll() {
  const [p, sp] = useState(0);
  useEffect(() => { const h = () => { const d = document.documentElement; sp(d.scrollTop / (d.scrollHeight - d.clientHeight || 1)); }; window.addEventListener("scroll", h, { passive: true }); return () => window.removeEventListener("scroll", h); }, []);
  return p;
}
function useFlicker(items, ms = 2400) {
  const [i, si] = useState(0);
  const [show, ss] = useState(true);
  useEffect(() => {
    const t = setInterval(() => { ss(false); setTimeout(() => { si(x => (x + 1) % items.length); ss(true); }, 380); }, ms);
    return () => clearInterval(t);
  }, [items.length, ms]);
  return { text: items[i], show };
}

/* ═══ SMALL COMPONENTS ═══ */
const Reveal = ({ id, children, from }) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({ opacity: 0, transform: from === "right" ? "translateX(80px)" : from === "left" ? "translateX(-80px)" : "translateY(40px)" });
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const progress = Math.min(Math.max((winH - rect.top) / (winH * 0.6), 0), 1);
      const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      const dist = 80 * (1 - ease);
      const x = from === "right" ? dist : from === "left" ? -dist : 0;
      const y = (!from || from === "up") ? 40 * (1 - ease) : 0;
      setStyle({ opacity: ease, transform: `translate(${x}px, ${y}px)` });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [from]);
  return (<section id={id} ref={ref} style={{ ...style, willChange: "transform, opacity", transition: "none" }}>{children}</section>);
};
const SL = ({ t }) => (<div style={{ display: "flex", alignItems: "center", gap: 12, mb: 14 }}><span style={{ fontSize: 11, fontFamily: "var(--mono)", color: "var(--a1)", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" }}>{t}</span><div style={{ flex: 1, height: 1, background: "var(--brd)" }} /></div>);
const H2 = ({ children }) => (<h2 style={{ fontSize: "clamp(26px,4vw,42px)", fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1.12, marginBottom: 44 }}>{children}</h2>);
const Pill = ({ children, glow }) => (<span style={{ padding: "5px 14px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: glow ? "var(--a1)" : "transparent", border: glow ? "none" : "1px solid var(--brd)", color: glow ? "#fff" : "var(--t2)", letterSpacing: glow ? ".04em" : 0, textTransform: glow ? "uppercase" : "none" }}>{children}</span>);
const Bar = ({ name, level, delay, go }) => (<div style={{ marginBottom: 13 }}><div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5, fontSize: 12.5 }}><span style={{ color: "var(--t1)", fontWeight: 500 }}>{name}</span><span style={{ color: "var(--t3)", fontFamily: "var(--mono)", fontSize: 11 }}>{level}%</span></div><div style={{ height: 5, borderRadius: 3, background: "var(--s2)", overflow: "hidden" }}><div style={{ height: "100%", borderRadius: 3, background: "linear-gradient(90deg,var(--a1),var(--a2))", width: go ? `${level}%` : "0%", transition: `width 1.1s cubic-bezier(.16,1,.3,1) ${delay}ms` }} /></div></div>);
const CI = ({ t }) => { const p = { size: 17, strokeWidth: 1.5, color: "var(--a1)" }; return t === "code" ? <Code2 {...p} /> : t === "chart" ? <BarChart3 {...p} /> : t === "cloud" ? <Cloud {...p} /> : <Brain {...p} />; };

function PC({ p }) {
  return (
    <div style={{ borderRadius: 16, background: "var(--card)", border: "1px solid var(--brd)", overflow: "hidden", transition: "transform .3s,box-shadow .3s,border-color .3s", display: "flex", flexDirection: "column" }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "var(--a1)"; e.currentTarget.style.boxShadow = "0 10px 36px var(--glow)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.borderColor = "var(--brd)"; e.currentTarget.style.boxShadow = ""; }}>
      <div style={{ height: 120, background: "var(--s2)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", fontSize: 38, opacity: .4 }}>
        {p.emoji}
        {p.featured && <span style={{ position: "absolute", top: 10, right: 10, padding: "3px 10px", borderRadius: 6, fontSize: 10, fontWeight: 700, background: "var(--a1)", color: "#fff", textTransform: "uppercase", letterSpacing: ".04em" }}>Highlight</span>}
      </div>
      <div style={{ padding: 20, flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7, gap: 8 }}>
          <h3 style={{ fontSize: 15.5, fontWeight: 700, letterSpacing: "-.015em", flex: 1 }}>{p.title}</h3>
          <span style={{ fontSize: 10, color: "var(--t3)", fontFamily: "var(--mono)", whiteSpace: "nowrap" }}>{p.period}</span>
        </div>
        <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "var(--t2)", marginBottom: 10, flex: 1 }}>{p.desc}</p>
        <div style={{ padding: "8px 12px", borderRadius: 9, background: "var(--sf)", marginBottom: 10, fontSize: 11.5, color: "var(--a1)", fontWeight: 500, display: "flex", alignItems: "flex-start", gap: 6, lineHeight: 1.55 }}>
          <Star size={11} style={{ marginTop: 3, flexShrink: 0 }} /> {p.impact}
        </div>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: p.github ? 10 : 0 }}>
          {p.tech.map(t => (<span key={t} style={{ padding: "3px 10px", borderRadius: 6, fontSize: 10.5, fontWeight: 600, background: "var(--s2)", color: "var(--t3)" }}>{t}</span>))}
        </div>
        {p.github && (<a href={p.github} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 600, color: "var(--t3)", textDecoration: "none", marginTop: 2 }}><Github size={13} /> View on GitHub <ExternalLink size={10} /></a>)}
      </div>
    </div>
  );
}

/* ═══ MAIN ═══ */
export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [nav, setNav] = useState("hero");
  const [top, setTop] = useState(false);
  const [exp, setExp] = useState(false);
  const scroll = useScroll();
  const flicker = useFlicker(C.roles, 2200);
  const greet = useFlicker(C.greetings, 2600);

  useEffect(() => { const f = () => setTop(window.scrollY > 500); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  useEffect(() => {
    const ids = ["hero", "about", "skills", "experience", "projects", "education", "achievements", "contact"];
    const o = new IntersectionObserver(es => { es.forEach(e => { if (e.isIntersecting) setNav(e.target.id); }); }, { rootMargin: "-40% 0px -40% 0px" });
    ids.forEach(id => { const el = document.getElementById(id); if (el) o.observe(el); }); return () => o.disconnect();
  }, []);
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const th = dark ? {
    "--bg": "#060610", "--sf": "rgba(255,255,255,.025)", "--s2": "rgba(255,255,255,.055)",
    "--brd": "rgba(255,255,255,.06)", "--t1": "#f0f0f5", "--t2": "#b8b8cc", "--t3": "#6b6b82",
    "--a1": "#14b8a6", "--a2": "#818cf8", "--a3": "#c084fc", "--card": "rgba(255,255,255,.018)",
    "--glass": "rgba(6,6,16,.82)", "--glow": "rgba(20,184,166,.12)",
    "--mono": "ui-monospace,SFMono-Regular,Menlo,monospace",
    "--grid": "rgba(255,255,255,.025)",
  } : {
    "--bg": "#fafafa", "--sf": "rgba(0,0,0,.028)", "--s2": "rgba(0,0,0,.065)",
    "--brd": "rgba(0,0,0,.08)", "--t1": "#111118", "--t2": "#3a3a4a", "--t3": "#7a7a92",
    "--a1": "#0d9488", "--a2": "#6366f1", "--a3": "#a855f7", "--card": "rgba(0,0,0,.015)",
    "--glass": "rgba(250,250,250,.85)", "--glow": "rgba(13,148,136,.06)",
    "--mono": "ui-monospace,SFMono-Regular,Menlo,monospace",
    "--grid": "rgba(0,0,0,.035)",
  };

  const navItems = [
    { id: "about", l: "About" }, { id: "skills", l: "Skills" }, { id: "experience", l: "Experience" },
    { id: "projects", l: "Projects" }, { id: "education", l: "Education" }, { id: "achievements", l: "Achievements" }, { id: "contact", l: "Contact" },
  ];

  const feat = C.projects.filter(p => p.featured);
  const rest = C.projects.filter(p => !p.featured);

  return (
    <div style={{ ...th, background: "var(--bg)", color: "var(--t1)", fontFamily: "'Inter',system-ui,-apple-system,sans-serif", minHeight: "100vh", overflowX: "hidden", transition: "background .35s,color .35s" }}>

      <div style={{ position: "fixed", top: 0, left: 0, height: 2, zIndex: 100, background: "linear-gradient(90deg,var(--a1),var(--a2),var(--a3))", width: `${scroll * 100}%`, transition: "width .08s linear" }} />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 90, background: "var(--glass)", backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)", borderBottom: "1px solid var(--brd)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56, padding: "0 24px" }}>
          <div style={{ width: 32 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div className="desk-nav" style={{ display: "flex", gap: 1 }}>
              {navItems.map(n => (
                <button key={n.id} onClick={() => go(n.id)} style={{ background: nav === n.id ? "var(--s2)" : "none", border: "none", cursor: "pointer", padding: "5px 11px", borderRadius: 6, fontSize: 12, fontWeight: 500, color: nav === n.id ? "var(--t1)" : "var(--t3)", transition: "all .2s" }}>{n.l}</button>
              ))}
            </div>
            <div style={{ width: 1, height: 16, background: "var(--brd)", margin: "0 5px" }} />
            <button onClick={() => setDark(!dark)} aria-label="Theme" style={{ background: "var(--sf)", border: "1px solid var(--brd)", cursor: "pointer", borderRadius: 7, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t3)" }}>
              {dark ? <Sun size={13} /> : <Moon size={13} />}
            </button>
            <a href={C.resumeUrl} target="_blank" rel="noopener noreferrer" style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))", color: "#fff", padding: "6px 13px", borderRadius: 7, fontSize: 11.5, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
              <Download size={12} /> Resume
            </a>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════
          HERO
         ═══════════════════════════════════════════════════ */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "120px 24px 80px" }}>
        {/* Grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)`, backgroundSize: "56px 56px", pointerEvents: "none" }} />
        {/* Center glow */}
        <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%,-50%)", width: 650, height: 650, borderRadius: "50%", filter: "blur(140px)", opacity: .18, background: "radial-gradient(circle, var(--a1), var(--a2), transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1320, textAlign: "center", position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 20px", borderRadius: 100, background: "linear-gradient(135deg, rgba(20,184,166,.08), rgba(129,140,248,.08))", border: "1px solid rgba(20,184,166,.15)", fontSize: 13, color: "var(--a1)", marginBottom: 40, animation: "up .6s cubic-bezier(.16,1,.3,1) both", fontWeight: 600, backdropFilter: "blur(8px)", boxShadow: "0 0 30px rgba(20,184,166,.08)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
            Open to opportunities
          </div>

          {/* "Hi, I'm Shreya" */}
          <h1 style={{ fontSize: "clamp(34px,6vw,62px)", fontWeight: 800, letterSpacing: "-.04em", lineHeight: 1.1, marginBottom: 6, animation: "up .6s cubic-bezier(.16,1,.3,1) .06s both" }}>
            Hi, I'm Shreya.
          </h1>

          {/* Static "Data Scientist" in gradient */}
          <p style={{ fontSize: "clamp(24px,4vw,42px)", fontWeight: 800, letterSpacing: "-.03em", marginBottom: 14, animation: "up .6s cubic-bezier(.16,1,.3,1) .1s both", background: "linear-gradient(135deg,var(--a1),var(--a2),var(--a3))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Data Scientist
          </p>

          {/* Flickering sub-roles in smaller white font */}
          <div style={{ minHeight: 32, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, animation: "up .6s cubic-bezier(.16,1,.3,1) .14s both" }}>
            <span style={{
              fontSize: "clamp(15px,2vw,20px)", fontWeight: 500, color: "var(--t2)", letterSpacing: "-.01em",
              opacity: flicker.show ? 1 : 0,
              transform: flicker.show ? "translateY(0)" : "translateY(6px)",
              transition: "opacity .35s ease, transform .35s ease",
            }}>
              {flicker.text}
            </span>
          </div>

          {/* Tagline */}
          <p style={{ fontSize: "clamp(14px,1.6vw,17px)", color: "var(--t2)", lineHeight: 1.65, maxWidth: 520, margin: "0 auto 28px", animation: "up .6s cubic-bezier(.16,1,.3,1) .18s both" }}>
            {C.tagline}
          </p>

          {/* Tech pills */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 32, animation: "up .6s cubic-bezier(.16,1,.3,1) .24s both" }}>
            {C.heroPills.map(t => (
              <span key={t} style={{ padding: "5px 16px", borderRadius: 100, fontSize: 12.5, fontWeight: 500, border: "1px solid var(--brd)", background: "var(--sf)", color: "var(--t2)", backdropFilter: "blur(4px)", transition: "border-color .2s" }}>{t}</span>
            ))}
          </div>

          {/* CTA buttons with glow */}
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", animation: "up .6s cubic-bezier(.16,1,.3,1) .3s both", position: "relative" }}>
            {/* Glow behind buttons */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 320, height: 80, borderRadius: "50%", filter: "blur(30px)", opacity: .15, background: "var(--a2)", pointerEvents: "none" }} />
            <button onClick={() => go("projects")} style={{ background: "var(--sf)", color: "var(--t1)", border: "1px solid var(--brd)", padding: "13px 28px", borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, position: "relative", backdropFilter: "blur(8px)" }}>
              Projects <ExternalLink size={14} />
            </button>
            <a href={`mailto:${C.links.email}`} style={{ background: "var(--sf)", color: "var(--t1)", border: "1px solid var(--brd)", padding: "13px 28px", borderRadius: 12, fontSize: 14, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, position: "relative", backdropFilter: "blur(8px)" }}>
              Contact <Mail size={14} />
            </a>
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 28, animation: "up .6s cubic-bezier(.16,1,.3,1) .36s both" }}>
            {[
              { icon: <Github size={18} />, href: C.links.github },
              { icon: <Linkedin size={18} />, href: C.links.linkedin },
              { icon: <Mail size={18} />, href: `mailto:${C.links.email}` },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{ width: 44, height: 44, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--sf)", border: "1px solid var(--brd)", color: "var(--t3)", textDecoration: "none", transition: "all .2s", boxShadow: "0 0 20px rgba(129,140,248,.06)" }}>{s.icon}</a>
            ))}
          </div>
        </div>

        <button onClick={() => go("about")} aria-label="Scroll" style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--t3)", animation: "bounce 2s ease-in-out infinite" }}>
          <ChevronDown size={20} />
        </button>
      </section>

      {/* ═══════════════════════════════════════════════════
          ABOUT ME — Bengali name + English name + bio + image
         ═══════════════════════════════════════════════════ */}
      <Reveal id="about" from="left">
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "92px 24px" }}>
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, letterSpacing: "-.03em", background: "linear-gradient(135deg,var(--a1),var(--a2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: 8 }}>
              About Me
            </h2>
            <p style={{ fontSize: 13, color: "var(--t3)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <Sparkles size={13} /> Engineering Intelligence & Insights from Data <Sparkles size={13} />
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}>
            {/* Left: Flickering greeting + English name + bio */}
            <div>
              {/* Flickering Hello World in multiple languages */}
              <div style={{ minHeight: 42, marginBottom: 6 }}>
                <p style={{
                  fontSize: "clamp(20px,3vw,30px)", fontWeight: 700, color: "var(--a2)", lineHeight: 1.3,
                  opacity: greet.show ? 1 : 0,
                  transform: greet.show ? "translateY(0)" : "translateY(6px)",
                  transition: "opacity .35s ease, transform .35s ease",
                }}>
                  {greet.text}<span className="cursor-blink" style={{ color: "var(--a2)", fontWeight: 300 }}>|</span>
                </p>
              </div>
              {/* English name */}
              <h3 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, letterSpacing: "-.03em", marginBottom: 20 }}>
                {C.name}
              </h3>
              {/* Bio */}
              {C.bio.map((p, i) => (
                <p key={i} style={{ fontSize: 15, lineHeight: 1.75, color: "var(--t2)", marginBottom: 14, maxWidth: 600, textAlign: "justify" }}>{p}</p>
              ))}
              {/* View Projects button */}
              <button onClick={() => go("projects")} style={{
                marginTop: 16, background: "linear-gradient(135deg,var(--a1),var(--a2))", color: "#fff",
                border: "none", padding: "11px 22px", borderRadius: 10, fontSize: 13.5, fontWeight: 600,
                cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 7,
              }}>
                <Code2 size={14} /> View Projects
              </button>
            </div>

            {/* Right: Profile image placeholder */}
            <img src="/shreya.jpg" alt="Shreya Pramanik" style={{ width: 320, height: 320, borderRadius: "50%", objectFit: "cover", border: "3px solid var(--brd)", flexShrink: 0, boxShadow: "0 0 40px var(--glow)" }} />
          </div>
        </div>
      </Reveal>

      {/* ═══ STATS ═══ */}
      <Reveal id="stats-section" from="right">
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 24px 80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 14 }}>
            {C.stats.map((s, i) => (
              <div key={i} style={{ padding: "18px 12px", borderRadius: 14, background: "var(--card)", border: "1px solid var(--brd)", textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-.03em", background: "linear-gradient(135deg,var(--a1),var(--a2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.value}</div>
                <div style={{ fontSize: 10.5, color: "var(--t3)", marginTop: 3, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".07em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ═══ SKILLS ═══ */}
      <Reveal id="skills" from="left">
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "88px 24px" }}>
          <SL t="Skills" />
          <H2>Technical toolkit</H2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
            {C.skills.map((cat, ci) => (
              <div key={ci} style={{ padding: 24, borderRadius: 16, background: "var(--card)", border: "1px solid var(--brd)", transition: "border-color .3s,box-shadow .3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(20,184,166,.22)"; e.currentTarget.style.boxShadow = "0 6px 28px var(--glow)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--brd)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,rgba(20,184,166,.12),rgba(129,140,248,.12))" }}><CI t={cat.icon} /></div>
                  <h3 style={{ fontSize: 14.5, fontWeight: 700 }}>{cat.category}</h3>
                </div>
                <p style={{ fontSize: 12.5, lineHeight: 1.6, color: "var(--t2)", marginBottom: 16 }}>{cat.desc}</p>
                <div style={{ fontSize: 11, color: "var(--t3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 10 }}>Skills</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {cat.items.map(s => (
                    <span key={s} style={{ padding: "5px 13px", borderRadius: 8, fontSize: 12, fontWeight: 500, background: "var(--s2)", color: "var(--t2)", transition: "background .2s" }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ═══ EXPERIENCE ═══ */}
      <Reveal id="experience" from="right">
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "88px 24px" }}>
          <SL t="Experience" />
          <H2>Where I've worked</H2>
          <div style={{ position: "relative", paddingLeft: 26 }}>
            <div style={{ position: "absolute", left: 5, top: 8, bottom: 8, width: 2, background: "linear-gradient(180deg,var(--a1),var(--a2),transparent)" }} />
            {C.experience.map((e, i) => (
              <div key={i} style={{ marginBottom: 32, position: "relative" }}>
                <div style={{ position: "absolute", left: -26, top: 5, width: 12, height: 12, borderRadius: "50%", border: "3px solid var(--a1)", background: "var(--bg)" }} />
                <div style={{ padding: 22, borderRadius: 14, background: "var(--card)", border: "1px solid var(--brd)", transition: "border-color .3s" }}
                  onMouseEnter={ev => { ev.currentTarget.style.borderColor = "rgba(20,184,166,.18)"; }}
                  onMouseLeave={ev => { ev.currentTarget.style.borderColor = "var(--brd)"; }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 6, marginBottom: 5 }}>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-.015em", marginBottom: 3 }}>{e.role}</h3>
                      <div style={{ display: "flex", alignItems: "center", gap: 9, color: "var(--t3)", fontSize: 12, flexWrap: "wrap" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Briefcase size={11} /> {e.company}</span>
                        <span style={{ display: "flex", alignItems: "center", gap: 4 }}><MapPin size={11} /> {e.location}</span>
                      </div>
                    </div>
                    <span style={{ fontSize: 11, color: "var(--t3)", fontFamily: "var(--mono)", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 4 }}><Calendar size={11} /> {e.duration}</span>
                  </div>
                  <div style={{ margin: "12px 0 12px 0" }}>
                    {e.achievements.map((a, j) => (
                      <div key={j} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--a1)", marginTop: 8, flexShrink: 0 }} />
                        <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "var(--t2)", margin: 0 }}>{a}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                    {e.tech.map(t => (<span key={t} style={{ padding: "3px 10px", borderRadius: 6, fontSize: 10.5, fontWeight: 600, background: "var(--s2)", color: "var(--t3)" }}>{t}</span>))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ═══ PROJECTS ═══ */}
      <Reveal id="projects" from="left">
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "88px 24px" }}>
          <SL t="Projects" />
          <H2>Selected work</H2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18 }}>
            {feat.map((p, i) => (<PC key={i} p={p} />))}
          </div>
          {rest.length > 0 && (<>
            <button onClick={() => setExp(!exp)} style={{ margin: "28px auto 0", display: "flex", alignItems: "center", gap: 7, background: "var(--sf)", border: "1px solid var(--brd)", padding: "8px 18px", borderRadius: 9, fontSize: 12.5, fontWeight: 600, color: "var(--t2)", cursor: "pointer" }}>
              {exp ? "Show less" : `Show ${rest.length} more`}
              <ChevronDown size={13} style={{ transform: exp ? "rotate(180deg)" : "", transition: "transform .3s" }} />
            </button>
            <div style={{ maxHeight: exp ? 3000 : 0, overflow: "hidden", transition: "max-height .6s cubic-bezier(.16,1,.3,1)", marginTop: exp ? 18 : 0 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18 }}>
                {rest.map((p, i) => (<PC key={i} p={p} />))}
              </div>
            </div>
          </>)}
        </div>
      </Reveal>

      {/* ═══ EDUCATION ═══ */}
      <Reveal id="education" from="right">
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "88px 24px" }}>
          <SL t="Education" />
          <H2>Academic background</H2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {C.education.map((ed, i) => (
              <div key={i} style={{ padding: 24, borderRadius: 14, background: "var(--card)", border: "1px solid var(--brd)" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: ed.courses.length ? 14 : 0 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--s2)", flexShrink: 0 }}>
                    <GraduationCap size={18} style={{ color: "var(--a1)" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 16.5, fontWeight: 700 }}>{ed.degree}</h3>
                    <div style={{ fontSize: 13.5, color: "var(--t2)", marginTop: 2 }}>{ed.school}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 9, marginTop: 3, fontSize: 11.5, color: "var(--t3)" }}>
                      <span style={{ fontFamily: "var(--mono)", display: "flex", alignItems: "center", gap: 4 }}><Calendar size={10} /> {ed.duration}</span>
                      {ed.location && <span style={{ display: "flex", alignItems: "center", gap: 4 }}><MapPin size={10} /> {ed.location}</span>}
                    </div>
                  </div>
                </div>
                {ed.courses.length > 0 && (<div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>{ed.courses.map(c => (<span key={c} style={{ padding: "3px 10px", borderRadius: 6, fontSize: 10.5, fontWeight: 600, background: "var(--s2)", color: "var(--t3)" }}>{c}</span>))}</div>)}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ═══ ACHIEVEMENTS ═══ */}
      <Reveal id="achievements" from="left">
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "40px 24px 88px" }}>
          <SL t="Achievements" />
          <H2>Recognition</H2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
            {C.achievements.map((a, i) => (
              <div key={i} style={{ padding: 22, borderRadius: 14, background: "var(--card)", border: "1px solid var(--brd)", display: "flex", gap: 12, alignItems: "flex-start", transition: "border-color .3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(20,184,166,.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--brd)"; }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,rgba(20,184,166,.1),rgba(129,140,248,.1))", flexShrink: 0 }}>
                  {a.icon === "trophy" ? <Trophy size={16} style={{ color: "var(--a1)" }} /> : <Award size={16} style={{ color: "var(--a1)" }} />}
                </div>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{a.title}</h3>
                  <p style={{ fontSize: 12.5, lineHeight: 1.6, color: "var(--t2)" }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ═══ CONTACT ═══ */}
      <Reveal id="contact" from="right">
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "40px 24px 100px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", padding: "5px 14px", borderRadius: 100, border: "1px solid var(--brd)", background: "var(--sf)", fontSize: 10.5, fontFamily: "var(--mono)", color: "var(--t3)", marginBottom: 16, letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 700 }}>Contact</div>
          <h2 style={{ fontSize: "clamp(27px,5vw,50px)", fontWeight: 800, letterSpacing: "-.04em", lineHeight: 1.1, marginBottom: 14 }}>
            Let's work{" "}
            <span style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>together</span>
          </h2>
          <p style={{ fontSize: 15, color: "var(--t2)", lineHeight: 1.7, marginBottom: 30 }}>
            I'm actively looking for Data Analyst, Business Intelligence, and Data Scientist roles.If my profile looks like a fit, I'd love to hear from you.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`mailto:${C.links.email}`} style={{ background: "linear-gradient(135deg,var(--a1),var(--a2))", color: "#fff", padding: "14px 30px", borderRadius: 12, fontSize: 15, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 20px var(--glow)" }}><Mail size={17} /> Send Email</a>
            <a href={C.links.linkedin} target="_blank" rel="noopener noreferrer" style={{ background: "var(--sf)", color: "var(--t1)", border: "1px solid var(--brd)", padding: "14px 30px", borderRadius: 12, fontSize: 15, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}><Linkedin size={17} /> LinkedIn</a>
          </div>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 28 }}>
            <a href={C.links.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--t3)" }}><Github size={18} /></a>
            <a href={C.links.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--t3)" }}><Linkedin size={18} /></a>
            <a href={`mailto:${C.links.email}`} style={{ color: "var(--t3)" }}><Mail size={18} /></a>
          </div>
        </div>
      </Reveal>

      <footer style={{ borderTop: "1px solid var(--brd)", padding: 18, textAlign: "center", fontSize: 11.5, color: "var(--t3)" }}>Built by {C.name} · © {new Date().getFullYear()}</footer>

      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Top" style={{ position: "fixed", bottom: 18, right: 18, width: 38, height: 38, borderRadius: 9, background: "var(--glass)", border: "1px solid var(--brd)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t3)", zIndex: 80, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", opacity: top ? 1 : 0, pointerEvents: top ? "auto" : "none", transition: "all .3s" }}><ArrowUp size={15} /></button>
      <a href={C.resumeUrl} target="_blank" rel="noopener noreferrer" style={{ position: "fixed", bottom: 18, left: 18, padding: "8px 14px", borderRadius: 9, background: "linear-gradient(135deg,var(--a1),var(--a2))", color: "#fff", fontSize: 11.5, fontWeight: 600, textDecoration: "none", zIndex: 80, display: "flex", alignItems: "center", gap: 5, boxShadow: "0 4px 16px var(--glow)", opacity: top ? 1 : 0, pointerEvents: top ? "auto" : "none", transition: "all .3s" }}><Download size={11} /> Resume</a>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *{margin:0;padding:0;box-sizing:border-box;}
        html{scroll-behavior:smooth;}
        ::selection{background:var(--a1);color:#fff;}
        ::-webkit-scrollbar{width:5px;}
        ::-webkit-scrollbar-track{background:transparent;}
        ::-webkit-scrollbar-thumb{background:var(--s2);border-radius:3px;}
        @keyframes up{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        @keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(6px)}}
        @keyframes orb{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(24px,-14px) scale(1.03)}66%{transform:translate(-14px,10px) scale(.97)}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        .cursor-blink{animation:blink 1s step-end infinite;}
        button:focus-visible,a:focus-visible{outline:2px solid var(--a1);outline-offset:2px;}
        @media(max-width:768px){
          .desk-nav{display:none!important;}
          #about > div > div { grid-template-columns:1fr!important; }
          #about > div > div > div:last-child { margin:0 auto; }
        }
      `}</style>
    </div>
  );
}
