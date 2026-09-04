"use client";

import { useState } from "react";
import { LabFooter, LabHeader, ScrollPrompt } from "../components/SiteChrome";
import { usePersistentLanguage } from "../hooks/usePersistentLanguage";
import { directions } from "./researchContent";
import { sitePath } from "../sitePath";

export default function ResearchDetail({ slug }: { slug: string }) {
  const { lang, toggleLanguage } = usePersistentLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const index = directions.findIndex(item => item.slug === slug);
  const item = directions[index] ?? directions[0];
  const t = item[lang];
  const previous = directions[(index + directions.length - 1) % directions.length];
  const next = directions[(index + 1) % directions.length];

  return (
    <main id="top">
      <LabHeader lang={lang} onLanguageChange={toggleLanguage} menuOpen={menuOpen} onMenuToggle={() => setMenuOpen(!menuOpen)} />
      <section className={`detail-hero detail-theme-${item.number}`}>
        <div>
          <a className="breadcrumb" href={sitePath("/research")}>← {lang === "zh" ? "全部研究方向" : "All research directions"}</a>
          <p className="detail-number">RESEARCH / {item.number}</p>
          <h1>{t.title}</h1>
          <p className="detail-statement">{t.statement}</p>
        </div>
        <div className="science-mark" aria-hidden="true"><span /><i /><b /></div>
      </section>
      <ScrollPrompt label={lang === "zh" ? "向下阅读研究概述" : "SCROLL TO OVERVIEW"} target="#overview" />

      <section className="detail-overview" id="overview">
        <p className="section-kicker dark">{lang === "zh" ? "研究概述" : "OVERVIEW"}</p>
        <div>
          <p className="detail-core-question"><strong>{lang === "zh" ? "核心问题：" : "Core question: "}</strong>{t.coreQuestion}</p>
          {t.overview.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="detail-figure-section">
        <figure className="research-evidence detail-evidence">
          <a className="research-evidence-image" href={item.figure.src} target="_blank" rel="noreferrer" aria-label={lang === "zh" ? `查看${item.figure.label}大图` : `Open full-size ${item.figure.label}`}>
            <img src={item.figure.src} alt={item.figure[lang].alt} />
            <span>{lang === "zh" ? "查看大图" : "VIEW FULL SIZE"} ↗</span>
          </a>
          <figcaption>
            <div className="research-evidence-meta">
              <strong>{item.figure.label}</strong>
              <span>{item.figure.source}</span>
            </div>
            <p>{item.figure[lang].caption}</p>
            <small>{item.figure[lang].note}</small>
          </figcaption>
        </figure>
        {item.secondaryFigure && (
          <figure className="research-evidence detail-evidence">
            <a className="research-evidence-image" href={item.secondaryFigure.src} target="_blank" rel="noreferrer" aria-label={lang === "zh" ? `查看${item.secondaryFigure.label}大图` : `Open full-size ${item.secondaryFigure.label}`}>
              <img src={item.secondaryFigure.src} alt={item.secondaryFigure[lang].alt} />
              <span>{lang === "zh" ? "查看大图" : "VIEW FULL SIZE"} ↗</span>
            </a>
            <figcaption>
              <div className="research-evidence-meta">
                <strong>{item.secondaryFigure.label}</strong>
                <span>{item.secondaryFigure.source}</span>
              </div>
              <p>{item.secondaryFigure[lang].caption}</p>
              <small>{item.secondaryFigure[lang].note}</small>
            </figcaption>
          </figure>
        )}
      </section>

      <section className="detail-questions">
        <div>
          <p className="section-kicker">{lang === "zh" ? "核心问题" : "CORE QUESTIONS"}</p>
          <h2>{lang === "zh" ? "我们正在追问" : "What we are asking"}</h2>
        </div>
        <ol>{t.questions.map((question, i) => <li key={question}><span>0{i + 1}</span><p>{question}</p></li>)}</ol>
      </section>

      <section className="detail-methods">
        <div>
          <p className="section-kicker dark">{lang === "zh" ? "模型与方法" : "MODELS & APPROACHES"}</p>
          <h2>{lang === "zh" ? "跨越尺度，建立因果证据" : "Building causal evidence across scales"}</h2>
        </div>
        <div className="method-tags">{t.approaches.map(method => <span key={method}>{method}</span>)}</div>
      </section>

      {t.papers.length > 0 && (
        <section className="related-work">
          <p className="section-kicker">{lang === "zh" ? "代表性研究" : "REPRESENTATIVE STUDIES"}</p>
          <div>
            {t.papers.map(paper => (
              <article key={paper.citation}>
                <strong>{paper.label}</strong>
                <cite>{paper.citation}</cite>
                <p><b>{lang === "zh" ? "研究贡献：" : "Contribution: "}</b>{paper.contribution}</p>
              </article>
            ))}
          </div>
          <a href={sitePath("/publications")}>{lang === "zh" ? "查看全部科研成果" : "View all publications"} →</a>
        </section>
      )}

      <nav className="research-pager" aria-label="Research direction navigation">
        <a href={sitePath(`/research/${previous.slug}`)}><span>← {lang === "zh" ? "上一方向" : "Previous"}</span><strong>{previous[lang].title}</strong></a>
        <a href={sitePath(`/research/${next.slug}`)}><span>{lang === "zh" ? "下一方向" : "Next"} →</span><strong>{next[lang].title}</strong></a>
      </nav>
      <LabFooter lang={lang} />
    </main>
  );
}
