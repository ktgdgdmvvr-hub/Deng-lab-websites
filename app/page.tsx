"use client";

import { useEffect, useState } from "react";
import { usePersistentLanguage } from "./hooks/usePersistentLanguage";
import { ScrollPrompt } from "./components/SiteChrome";
import { sitePath } from "./sitePath";

const copy = {
  zh: {
    nav: [
      ["研究方向", "/research"],
      ["研究团队", "#people"],
      ["科研成果", "/publications"],
      ["实验室动态", "/news"],
      ["加入我们", "#join"],
      ["相关链接", "/resources"],
    ],
    eyebrow: "脑发育与儿童罕见神经发育障碍研究",
    title: <>从神经干细胞出发，<br />理解大脑如何发育</>,
    lead: "理解神经干细胞命运，寻找儿童罕见神经发育障碍的收敛机制",
    explore: "探索我们的研究",
    join: "加入我们",
    mission: "EVERY CHILD IS SPECIAL",
    scroll: "向下探索",
    researchKicker: "RESEARCH FOCUS",
    researchTitle: "从基本规律，到疾病机制",
    researchIntro: "我们研究神经干细胞的状态转换与命运决定，以及胞内运输、分泌和细胞微环境异常如何参与儿童罕见神经发育障碍。",
    cards: [
      ["01", "神经干细胞命运决定的细胞生物学机制", "研究神经干细胞如何在静息、激活、自我更新与分化之间完成有序转换。"],
      ["02", "胞内膜运输、分泌与神经干细胞微环境", "研究膜蛋白递送与回收、胞外基质和可溶性信号分泌如何影响神经干细胞状态。"],
      ["03", "儿童罕见神经发育障碍的收敛细胞机制", "比较不同疾病的共性与特异性细胞过程，寻找影响神经干细胞命运的可干预节点。"],
    ],
    aboutKicker: "PRINCIPAL INVESTIGATOR",
    aboutTitle: "邓倩楠 博士",
    aboutRole: "副研究员 · 硕士生导师",
    aboutText: "长期从事神经干细胞与脑发育的细胞生物学研究，关注神经干细胞命运调控及其异常与神经发育障碍之间的联系。主持国家自然科学基金青年科学基金项目（C类）。",
    aboutFacts: [
      ["研究训练", "浙江大学博士 · 杜克—新加坡国立大学医学院博士后"],
      ["代表期刊", "The EMBO Journal · PLOS Biology · Genetics"],
      ["当前项目", "罕见神经发育遗传病 MRD57 的氧化还原机制"],
    ],
    profile: "了解研究团队",
    questionKicker: "QUESTIONS THAT DRIVE US",
    questionTitle: "我们真正想回答的问题",
    questions: [
      "神经干细胞如何在静息、激活、自我更新与分化之间完成有序转换？",
      "胞内膜运输与分泌如何连接细胞内在状态、外部微环境和神经干细胞命运？",
      "不同儿童罕见神经发育障碍是否存在收敛的细胞机制和命运异常？",
    ],
    pubKicker: "SELECTED PUBLICATIONS",
    pubTitle: "代表性成果",
    pubIntro: "从果蝇神经干细胞的基本规律，到儿童罕见神经发育疾病的机制研究。",
    papers: [
      ["2026 · UNDER REVISION", "Loss of Tousled-Like Kinase 2 Reduces Antioxidative Responses and Disrupts Brain Development", "PNAS · manuscript under revision / preprint", "https://doi.org/10.65215/LTSpreprints.2026.03.06.000145"],
      ["2022", "Parafibromin governs cell polarity and centrosome assembly in Drosophila neural stem cells", "PLOS Biology 20(10): e3001834", "https://doi.org/10.1371/journal.pbio.3001834"],
      ["2021", "Msps governs acentrosomal microtubule assembly and reactivation of quiescent neural stem cells", "The EMBO Journal 40(19): e104549", "https://doi.org/10.15252/embj.2020104549"],
    ],
    allPubs: "查看全部成果",
    joinKicker: "WORK WITH US",
    joinTitle: "和我们一起，理解每一个罕见的生命",
    joinText: "我们欢迎对脑发育、神经干细胞和神经发育障碍机制感兴趣的研究生、本科生与科研人员，也期待跨学科合作。",
    joinTags: ["研究生与本科生", "科研人员", "学术合作"],
    contact: "联系我们",
    emailLabel: "联系邮箱",
    addressLabel: "所在单位",
    address: "海南医科大学基础医学院",
    closing: "每一个罕见的生命，都值得被看见。",
  },
  en: {
    nav: [
      ["Research", "/research"],
      ["People", "#people"],
      ["Publications", "/publications"],
      ["News", "/news"],
      ["Join Us", "#join"],
      ["Resources", "/resources"],
    ],
    eyebrow: "Brain Development & Pediatric Rare Neurodevelopmental Disorders",
    title: <>Starting with neural stem cells,<br />we ask how the brain develops</>,
    lead: "Understanding neural stem-cell fate and convergent mechanisms in rare pediatric neurodevelopmental disorders",
    explore: "Explore our research",
    join: "Join us",
    mission: "EVERY CHILD IS SPECIAL",
    scroll: "Scroll to explore",
    researchKicker: "RESEARCH FOCUS",
    researchTitle: "From fundamental principles to disease mechanisms",
    researchIntro: "We study neural stem-cell state transitions and fate decisions, and how disrupted trafficking, secretion and the cellular microenvironment contribute to rare pediatric neurodevelopmental disorders.",
    cards: [
      ["01", "Cell-biological mechanisms of neural stem-cell fate decisions", "How neural stem cells make orderly transitions among quiescence, activation, self-renewal and differentiation."],
      ["02", "Intracellular membrane trafficking, secretion and the neural stem-cell niche", "How membrane-protein traffic, extracellular matrix and soluble signals shape neural stem-cell state."],
      ["03", "Convergent cellular mechanisms of rare pediatric neurodevelopmental disorders", "Comparing shared and disease-specific processes to identify actionable nodes that alter neural stem-cell fate."],
    ],
    aboutKicker: "PRINCIPAL INVESTIGATOR",
    aboutTitle: "Qiannan Deng, PhD",
    aboutRole: "Associate Professor · Master's Supervisor",
    aboutText: "Dr. Deng studies the cell biology of neural stem cells and brain development, with a particular focus on how disrupted stem-cell fate contributes to neurodevelopmental disorders. She leads a Young Scientists Fund project supported by the NSFC.",
    aboutFacts: [
      ["Training", "PhD, Zhejiang University · Postdoc, Duke-NUS Medical School"],
      ["Selected journals", "The EMBO Journal · PLOS Biology · Genetics"],
      ["Current focus", "Redox mechanisms in the rare neurodevelopmental disorder MRD57"],
    ],
    profile: "Meet the team",
    questionKicker: "QUESTIONS THAT DRIVE US",
    questionTitle: "The questions behind our work",
    questions: [
      "How do neural stem cells transition among quiescence, activation, self-renewal and differentiation?",
      "How do intracellular trafficking and secretion connect intrinsic cell state, the external microenvironment and neural stem-cell fate?",
      "Do rare pediatric neurodevelopmental disorders converge on shared cellular mechanisms and fate abnormalities?",
    ],
    pubKicker: "SELECTED PUBLICATIONS",
    pubTitle: "Selected work",
    pubIntro: "From fundamental principles of Drosophila neural stem cells to the mechanisms of rare childhood neurodevelopmental disorders.",
    papers: [
      ["2026 · UNDER REVISION", "Loss of Tousled-Like Kinase 2 Reduces Antioxidative Responses and Disrupts Brain Development", "PNAS · manuscript under revision / preprint", "https://doi.org/10.65215/LTSpreprints.2026.03.06.000145"],
      ["2022", "Parafibromin governs cell polarity and centrosome assembly in Drosophila neural stem cells", "PLOS Biology 20(10): e3001834", "https://doi.org/10.1371/journal.pbio.3001834"],
      ["2021", "Msps governs acentrosomal microtubule assembly and reactivation of quiescent neural stem cells", "The EMBO Journal 40(19): e104549", "https://doi.org/10.15252/embj.2020104549"],
    ],
    allPubs: "View all publications",
    joinKicker: "WORK WITH US",
    joinTitle: "Help us understand every rare life",
    joinText: "We welcome students and researchers interested in brain development, neural stem cells and neurodevelopmental disorders—and collaborations across disciplines.",
    joinTags: ["Students", "Researchers", "Collaborators"],
    contact: "Contact us",
    emailLabel: "Email",
    addressLabel: "Institution",
    address: "School of Basic Medical Sciences, Hainan Medical University",
    closing: "Every rare life deserves to be seen.",
  },
};

const heroMedia = {
  zh: [
    {
      src: sitePath("/images/hero-research/proliferation-differentiation.webp"),
      label: "LIVE IMAGING",
      title: "神经干细胞增殖与分化",
      animated: true,
      crop: "proliferation",
    },
    {
      src: sitePath("/images/hero-research/photoconversion.webp"),
      label: "PHOTOCONVERSION",
      title: "静息神经干细胞突起的光转换",
      animated: true,
      crop: "photoconversion",
    },
    {
      src: sitePath("/images/hero-research/quiescent-actin.png"),
      label: "QUIESCENCE",
      title: "静息神经干细胞中的肌动蛋白纤维",
      animated: false,
      crop: "actin",
    },
    {
      src: sitePath("/images/hero-research/quiescent-niche.png"),
      label: "STEM-CELL NICHE",
      title: "静息神经干细胞与微环境",
      animated: false,
      crop: "niche",
    },
    {
      src: sitePath("/images/hero-research/tumorigenesis.png"),
      label: "DISEASE STATE",
      title: "神经干细胞异常与肿瘤发生",
      animated: false,
      crop: "tumorigenesis",
    },
  ],
  en: [
    {
      src: sitePath("/images/hero-research/proliferation-differentiation.webp"),
      label: "LIVE IMAGING",
      title: "Neural stem-cell proliferation and differentiation",
      animated: true,
      crop: "proliferation",
    },
    {
      src: sitePath("/images/hero-research/photoconversion.webp"),
      label: "PHOTOCONVERSION",
      title: "Photoconversion of a quiescent NSC protrusion",
      animated: true,
      crop: "photoconversion",
    },
    {
      src: sitePath("/images/hero-research/quiescent-actin.png"),
      label: "QUIESCENCE",
      title: "Actin filaments in quiescent neural stem cells",
      animated: false,
      crop: "actin",
    },
    {
      src: sitePath("/images/hero-research/quiescent-niche.png"),
      label: "STEM-CELL NICHE",
      title: "Quiescent neural stem cells and their niche",
      animated: false,
      crop: "niche",
    },
    {
      src: sitePath("/images/hero-research/tumorigenesis.png"),
      label: "DISEASE STATE",
      title: "Neural stem-cell dysregulation and tumorigenesis",
      animated: false,
      crop: "tumorigenesis",
    },
  ],
};

function HeroMediaWindow({ lang }: { lang: "zh" | "en" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const items = heroMedia[lang];
  const windowLabel = lang === "zh" ? "神经干细胞显微影像窗口" : "Neural stem-cell microscopy window";

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, [items.length, paused]);

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + items.length) % items.length);
  };

  return (
    <aside
      className="hero-media-window"
      aria-label={windowLabel}
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") move(-1);
        if (event.key === "ArrowRight") move(1);
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="hero-media-track"
        style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
      >
        {items.map((item, index) => (
          <figure
            className={`hero-media-slide crop-${item.crop}${index === activeIndex ? " is-active" : ""}`}
            aria-hidden={index !== activeIndex}
            key={item.src}
          >
            <img src={item.src} alt={item.title} loading={index < 2 ? "eager" : "lazy"} />
            {item.animated && (
              <span className="hero-media-live"><i aria-hidden="true" /> LIVE MICROSCOPY</span>
            )}
            <figcaption>
              <small>{item.label}</small>
              <strong>{item.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>

      <button
        className="hero-media-arrow previous"
        type="button"
        onClick={() => move(-1)}
        aria-label={lang === "zh" ? "上一张影像" : "Previous image"}
      >
        <span aria-hidden="true">‹</span>
      </button>
      <button
        className="hero-media-arrow next"
        type="button"
        onClick={() => move(1)}
        aria-label={lang === "zh" ? "下一张影像" : "Next image"}
      >
        <span aria-hidden="true">›</span>
      </button>

      <div className="hero-media-dots" aria-label={lang === "zh" ? "选择影像" : "Choose image"}>
        {items.map((item, index) => (
          <button
            className={index === activeIndex ? "active" : ""}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`${lang === "zh" ? "查看" : "View"} ${item.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
            key={item.src}
          />
        ))}
      </div>
      <div className="hero-media-count" aria-hidden="true">
        <strong>0{activeIndex + 1}</strong>
        <span>/ 05</span>
      </div>
    </aside>
  );
}

export default function Home() {
  const { lang, toggleLanguage } = usePersistentLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Deng Lab home">
          <span className="institution">海南医科大学基础医学院</span>
          <span className="brand-rule" aria-hidden="true" />
          <span className="brand-lab">
            <strong>DENG LAB</strong>
            <img className="brand-logo" src={sitePath("/images/deng-lab-logo-transparent.png")} alt="" />
          </span>
        </a>

        <button
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>

        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          {t.nav.map(([label, href]) => (
            <a key={href} href={sitePath(href)} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <button className="language" onClick={toggleLanguage}>
            {lang === "zh" ? "EN" : "中文"}
          </button>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-media-panel">
          <HeroMediaWindow lang={lang} />
        </div>

        <div className="hero-profile-panel">
          <div className="hero-portrait" aria-label="Dr. Qiannan Deng in the laboratory">
            <div className="cell cell-a" aria-hidden="true" />
            <div className="cell cell-b" aria-hidden="true" />
            <div className="neuron-lines" aria-hidden="true" />
            <img src={sitePath("/images/qiannan-deng-hero-blurred.png")} alt="邓倩楠博士在实验室" />
            <div className="portrait-caption">
              <span>PRINCIPAL INVESTIGATOR</span>
              <strong>邓倩楠 · Qiannan Deng, PhD</strong>
            </div>
          </div>

          <div className="hero-intro">
            <div className="hero-intro-main">
              <p className="eyebrow">{t.eyebrow}</p>
              <h1>{t.title}</h1>
              <div className="title-mark" aria-hidden="true" />
            </div>
            <div className="hero-intro-side">
              <p className="lead">{t.lead}</p>
              <div className="hero-actions">
                <a className="button primary" href={sitePath("/research")}>{t.explore}<span>→</span></a>
                <a className="button secondary" href="#join">{t.join}<span>↗</span></a>
              </div>
              <div className="mission-line">
                <svg aria-hidden="true" viewBox="0 0 70 58"><path d="M32 3l6 20 21-3-16 13 12 18-20-9-15 13 4-22L5 22l22-1z" /></svg>
                <span>{t.mission}</span>
              </div>
            </div>
          </div>
        </div>

        <ScrollPrompt label={t.scroll} target="#research" />
      </section>

      <section className="research" id="research">
        <div className="section-intro">
          <p className="section-kicker">{t.researchKicker}</p>
          <h2>{t.researchTitle}</h2>
          <p>{t.researchIntro}</p>
        </div>
        <div className="research-grid">
          {t.cards.map(([number, title, description], index) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={sitePath(`/research/${["neural-stem-cell-fate", "membrane-trafficking-niche", "common-mechanisms"][index]}`)} aria-label={`Read more about ${title}`}>{lang === "zh" ? "了解更多" : "Learn more"} <b>↗</b></a>
            </article>
          ))}
        </div>
      </section>

      <section className="pi-section" id="people">
        <div className="pi-photo-wrap">
          <img src={sitePath("/images/qiannan-deng.jpeg")} alt="Qiannan Deng, Principal Investigator" />
          <span className="photo-index">01 / PI</span>
        </div>
        <div className="pi-copy">
          <p className="section-kicker dark">{t.aboutKicker}</p>
          <h2>{t.aboutTitle}</h2>
          <p className="pi-role">{t.aboutRole}</p>
          <p className="pi-bio">{t.aboutText}</p>
          <dl>
            {t.aboutFacts.map(([term, detail]) => (
              <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>
            ))}
          </dl>
          <a className="text-link" href="#people">{t.profile}<span>↗</span></a>
        </div>
      </section>

      <section className="questions">
        <div className="question-heading">
          <p className="section-kicker">{t.questionKicker}</p>
          <h2>{t.questionTitle}</h2>
          <div className="drawn-orbit" aria-hidden="true"><span /></div>
        </div>
        <ol>
          {t.questions.map((question, index) => (
            <li key={question}><span>0{index + 1}</span><p>{question}</p></li>
          ))}
        </ol>
      </section>

      <section className="publications" id="publications">
        <div className="publication-heading">
          <div>
            <p className="section-kicker dark">{t.pubKicker}</p>
            <h2>{t.pubTitle}</h2>
          </div>
          <p>{t.pubIntro}</p>
        </div>
        <div className="paper-list">
          {t.papers.map(([year, title, journal, href]) => (
            <a key={title} href={href} target="_blank" rel="noreferrer">
              <span className="paper-year">{year}</span>
              <span className="paper-main"><strong>{title}</strong><small>{journal}</small></span>
              <b>↗</b>
            </a>
          ))}
        </div>
        <a className="text-link" href={sitePath("/publications")}>{t.allPubs}<span>→</span></a>
      </section>

      <section className="join-section" id="join">
        <div className="join-copy">
          <p className="section-kicker">{t.joinKicker}</p>
          <h2>{t.joinTitle}</h2>
          <p>{t.joinText}</p>
          <div className="join-tags">
            {t.joinTags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
        </div>
        <a className="join-mail" href="mailto:qiannandeng0520@gmail.com">
          <span>{t.contact}</span>
          <b>↗</b>
        </a>
      </section>

      <footer>
        <div className="footer-brand">
          <strong>DENG LAB</strong>
          <span>Laboratory of Brain Development<br />and Rare Neurodevelopmental Disorders</span>
        </div>
        <div className="footer-contact">
          <p><span>{t.emailLabel}</span><a href="mailto:qiannandeng0520@gmail.com">qiannandeng0520@gmail.com</a></p>
          <p><span>{t.addressLabel}</span>{t.address}</p>
        </div>
        <p className="footer-closing">{t.closing}</p>
        <div className="footer-bottom"><span>© 2026 Deng Lab</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
