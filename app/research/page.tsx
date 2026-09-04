"use client";

import { useState } from "react";
import { LabFooter, LabHeader, ScrollPrompt } from "../components/SiteChrome";
import { usePersistentLanguage } from "../hooks/usePersistentLanguage";
import { directions } from "./researchContent";
import { sitePath } from "../sitePath";

export default function ResearchPage() {
  const { lang, toggleLanguage } = usePersistentLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main id="top">
      <LabHeader lang={lang} onLanguageChange={toggleLanguage} menuOpen={menuOpen} onMenuToggle={() => setMenuOpen(!menuOpen)} />
      <section className="subpage-hero research-page-hero">
        <p className="section-kicker dark">RESEARCH</p>
        <h1>{lang === "zh" ? "从基本规律，到疾病机制" : "From fundamental principles to disease mechanisms"}</h1>
        <p>{lang === "zh" ? "我们研究脑发育过程中神经干细胞的状态转换与命运决定，以及相关过程异常如何导致儿童罕见神经发育障碍。" : "We study neural stem-cell state transitions and fate decisions during brain development, and how their disruption contributes to rare pediatric neurodevelopmental disorders."}</p>
      </section>
      <ScrollPrompt label={lang === "zh" ? "向下阅读完整研究方向" : "SCROLL TO EXPLORE"} target="#direction-01" />
      <nav className="research-jump" aria-label="Research direction index">
        {directions.map(item => (
          <a href={`#direction-${item.number}`} key={item.slug}>
            <span>{item.number}</span><strong>{item[lang].title}</strong>
          </a>
        ))}
      </nav>
      <section className="full-research-directions">
        {directions.map((item, index) => (
          <article className={`full-direction direction-accent-${item.number}`} id={`direction-${item.number}`} key={item.slug}>
            <div className="full-direction-heading">
              <span className="directory-number">RESEARCH / {item.number}</span>
              <h2>{item[lang].title}</h2>
              <p className="direction-statement">{item[lang].statement}</p>
            </div>
            <div className="full-direction-body">
              <div className="direction-core-question">
                <p className="section-kicker dark">{lang === "zh" ? "核心问题" : "CORE QUESTION"}</p>
                <p>{item[lang].coreQuestion}</p>
              </div>
              <div className="direction-overview">
                <p className="section-kicker dark">{lang === "zh" ? "研究内容" : "RESEARCH SCOPE"}</p>
                {item[lang].overview.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="direction-columns">
                <div>
                  <p className="section-kicker dark">{lang === "zh" ? "我们关注的问题" : "QUESTIONS"}</p>
                  <ol>{item[lang].questions.map((question, i) => <li key={question}><span>0{i + 1}</span>{question}</li>)}</ol>
                </div>
                <div>
                  <p className="section-kicker dark">{lang === "zh" ? "模型与方法" : "MODELS & METHODS"}</p>
                  <div className="method-tags light">{item[lang].approaches.map(method => <span key={method}>{method}</span>)}</div>
                </div>
              </div>
              {item[lang].papers.length > 0 && (
                <div className="direction-work">
                  <p className="section-kicker dark">{lang === "zh" ? "代表性研究" : "REPRESENTATIVE STUDIES"}</p>
                  {item[lang].papers.map(paper => (
                    <article key={paper.citation}>
                      <strong>{paper.label}</strong>
                      <cite>{paper.citation}</cite>
                      <p><b>{lang === "zh" ? "研究贡献：" : "Contribution: "}</b>{paper.contribution}</p>
                    </article>
                  ))}
                </div>
              )}
              <a className="text-link" href={sitePath(`/research/${item.slug}`)}>{lang === "zh" ? "进入该方向详情" : "Open detailed view"}<span>↗</span></a>
            </div>
            <figure className="research-evidence research-evidence-wide">
              <a className="research-evidence-image" href={item.figure.src} target="_blank" rel="noreferrer" aria-label={lang === "zh" ? `查看${item.figure.label}大图` : `Open full-size ${item.figure.label}`}>
                <img src={item.figure.src} alt={item.figure[lang].alt} loading="lazy" />
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
              <figure className="research-evidence research-evidence-wide">
                <a className="research-evidence-image" href={item.secondaryFigure.src} target="_blank" rel="noreferrer" aria-label={lang === "zh" ? `查看${item.secondaryFigure.label}大图` : `Open full-size ${item.secondaryFigure.label}`}>
                  <img src={item.secondaryFigure.src} alt={item.secondaryFigure[lang].alt} loading="lazy" />
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
            <span className="direction-watermark">0{index + 1}</span>
          </article>
        ))}
      </section>
      <section className="all-core-questions">
        <div>
          <p className="section-kicker">{lang === "zh" ? "核心科学问题" : "CORE SCIENTIFIC QUESTIONS"}</p>
          <h2>{lang === "zh" ? "贯穿三个方向的共同追问" : "Questions connecting all three directions"}</h2>
        </div>
        <ol>
          {(lang === "zh" ? [
            "神经干细胞如何在静息、激活、自我更新与分化之间完成有序转换？",
            "胞内膜运输与分泌如何连接细胞内在状态、外部微环境和神经干细胞命运？",
            "不同儿童罕见神经发育障碍是否存在收敛的细胞机制，并能通过跨模型证据识别可干预节点？",
          ] : [
            "How do neural stem cells make orderly transitions among quiescence, activation, self-renewal and differentiation?",
            "How do intracellular trafficking and secretion connect intrinsic cell state, the external microenvironment and neural stem-cell fate?",
            "Do rare pediatric neurodevelopmental disorders converge on shared cellular mechanisms, and can cross-model evidence reveal actionable nodes?",
          ]).map((question, index) => <li key={question}><span>0{index + 1}</span><p>{question}</p></li>)}
        </ol>
      </section>
      <section className="research-principle">
        <span>EVERY CHILD IS SPECIAL</span>
        <p>{lang === "zh" ? "识别不同致病基因可能汇聚的关键细胞过程和可干预节点。" : "Identifying convergent cellular processes and actionable nodes across distinct disease genes."}</p>
      </section>
      <LabFooter lang={lang} />
    </main>
  );
}
