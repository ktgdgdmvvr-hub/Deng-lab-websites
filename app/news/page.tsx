"use client";

import { useState } from "react";
import { LabFooter, LabHeader, ScrollPrompt } from "../components/SiteChrome";
import { usePersistentLanguage } from "../hooks/usePersistentLanguage";
import { sitePath } from "../sitePath";

const copy = {
  zh: {
    kicker: "LAB NEWS",
    pageTitle: "实验室动态",
    pageIntro: "记录 Deng Lab 的开始、成长，以及与脑发育和儿童罕见神经发育疾病研究有关的重要时刻。",
    scroll: "向下阅读最新动态",
    storyKicker: "DENG LAB / 里程碑",
    date: "2026.07.20",
    title: "Deng Lab 正式成立",
    text: "2026年7月20日，Deng Lab 在海南医科大学基础医学院正式成立。我们将从神经干细胞出发，探索脑发育的基本规律与儿童罕见神经发育疾病的细胞机制——让每一个罕见的生命，都被认真看见。",
    posterAlt: "Deng Lab 黄色水彩宣传海报，包含果蝇、神经元、细胞及 Every Child Is Special 标语",
    posterAction: "查看完整海报",
  },
  en: {
    kicker: "LAB NEWS",
    pageTitle: "News & milestones",
    pageIntro: "Moments that mark the beginning and growth of Deng Lab—and our work on brain development and rare childhood neurodevelopmental disorders.",
    scroll: "SCROLL TO THE LATEST NEWS",
    storyKicker: "DENG LAB / MILESTONE",
    date: "20 JUL 2026",
    title: "Deng Lab is officially established",
    text: "On July 20, 2026, Deng Lab was officially established at the School of Basic Medical Sciences, Hainan Medical University. Starting with neural stem cells, we will explore the fundamental principles of brain development and the cellular mechanisms of rare childhood neurodevelopmental disorders—so that every rare life is truly seen.",
    posterAlt: "Yellow watercolor Deng Lab poster featuring a fruit fly, neuron, cell and the words Every Child Is Special",
    posterAction: "View full poster",
  },
};

export default function NewsPage() {
  const { lang, toggleLanguage } = usePersistentLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];

  return (
    <main id="top">
      <LabHeader lang={lang} onLanguageChange={toggleLanguage} menuOpen={menuOpen} onMenuToggle={() => setMenuOpen(!menuOpen)} />
      <section className="subpage-hero news-page-hero">
        <p className="section-kicker dark">{t.kicker}</p>
        <h1>{t.pageTitle}</h1>
        <p>{t.pageIntro}</p>
      </section>
      <ScrollPrompt label={t.scroll} target="#news-2026-07-20" />

      <section className="lab-news news-page-feature" id="news-2026-07-20">
        <div className="news-poster-panel">
          <a href={sitePath("/images/news/deng-lab-founded-2026.webp")} target="_blank" rel="noreferrer" aria-label={t.posterAction}>
            <img src={sitePath("/images/news/deng-lab-founded-2026.webp")} alt={t.posterAlt} />
            <span>{t.posterAction} ↗</span>
          </a>
          <small>EVERY CHILD IS SPECIAL · DENG LAB</small>
        </div>
        <article className="news-story">
          <p className="section-kicker">{t.storyKicker}</p>
          <time dateTime="2026-07-20">{t.date}</time>
          <h2>{t.title}</h2>
          <p>{t.text}</p>
          <div className="news-signature" aria-hidden="true">
            <span>01</span>
            <i />
            <b>2026</b>
          </div>
        </article>
      </section>
      <LabFooter lang={lang} />
    </main>
  );
}
