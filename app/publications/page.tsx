"use client";

import { useState } from "react";
import { LabFooter, LabHeader, ScrollPrompt } from "../components/SiteChrome";
import { usePersistentLanguage } from "../hooks/usePersistentLanguage";

const papers = [
  { year: "2026", type: "Preprint / under revision", title: "Loss of Tousled-Like Kinase 2 Reduces Antioxidative Responses and Disrupts Brain Development", authors: "Deng Q*, Hou F*, Zhou X, Tong C, Zou C, Zhang K", journal: "Manuscript under revision at PNAS; preprint", href: "https://doi.org/10.65215/LTSpreprints.2026.03.06.000145" },
  { year: "2025", type: "Research article", title: "Microproteins Simba1 and Simba2 activate Wingless signaling during the reactivation of neural stem cells in Drosophila", authors: "Lin J, Deng Q, Gao Y, Tan YS, Zhong Z, Tan LKA, Tan BOP, Virshup DM, Bosch JA, Perrimon N, Wang H", journal: "Nature Communications 16:11651", href: "https://www.nature.com/ncomms/" },
  { year: "2022", type: "Research article", title: "Parafibromin governs cell polarity and centrosome assembly in Drosophila neural stem cells", authors: "Deng Q*, Wang C, Koe CT, Heinen JP, Tan YS, Li S, Gonzalez C, Sung WK, Wang H", journal: "PLOS Biology 20(10):e3001834", href: "https://doi.org/10.1371/journal.pbio.3001834" },
  { year: "2022", type: "Mini-review", title: "Re-visiting the principles of apicobasal polarity in Drosophila neural stem cells", authors: "Deng Q*, Wang H", journal: "Developmental Biology 484:57–62", href: "https://doi.org/10.1016/j.ydbio.2022.02.001" },
  { year: "2021", type: "Research article", title: "Msps governs acentrosomal microtubule assembly and reactivation of quiescent neural stem cells", authors: "Deng Q*, Tan YS, Chew LY, Wang H", journal: "The EMBO Journal 40(19):e104549", href: "https://doi.org/10.15252/embj.2020104549" },
  { year: "2016", type: "Research article", title: "Cross-talk between mitochondrial fusion and the Hippo pathway in controlling cell proliferation during Drosophila development", authors: "Deng Q*, Guo T, Zhou X, Xi Y, Yang X, Ge W", journal: "Genetics 203(4):1777–1788", href: "https://doi.org/10.1534/genetics.115.186445" },
];

export default function PublicationsPage() {
  const { lang, toggleLanguage } = usePersistentLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Research article", "Mini-review", "Preprint / under revision"];
  const visible = filter === "All" ? papers : papers.filter(p => p.type === filter);
  return (
    <main id="top">
      <LabHeader lang={lang} onLanguageChange={toggleLanguage} menuOpen={menuOpen} onMenuToggle={() => setMenuOpen(!menuOpen)} />
      <section className="subpage-hero publication-page-hero">
        <p className="section-kicker dark">PUBLICATIONS</p>
        <h1>{lang === "zh" ? "科研成果" : "Publications"}</h1>
        <p>{lang === "zh" ? "从神经干细胞的基本规律，到儿童罕见神经发育疾病的机制研究。" : "From fundamental principles of neural stem cells to rare childhood neurodevelopmental disorders."}</p>
      </section>
      <ScrollPrompt label={lang === "zh" ? "向下浏览全部成果" : "SCROLL TO PUBLICATIONS"} target="#publication-list" />
      <section className="publication-directory" id="publication-list">
        <div className="publication-filters" aria-label="Publication filters">
          {filters.map(item => <button className={filter === item ? "active" : ""} onClick={() => setFilter(item)} key={item}>{item}</button>)}
        </div>
        <div className="publication-count">{String(visible.length).padStart(2, "0")} {lang === "zh" ? "项成果" : "works"}</div>
        <div className="publication-records">
          {visible.map(paper => (
            <article key={paper.title}>
              <div className="record-meta"><span>{paper.year}</span><small>{paper.type}</small></div>
              <div className="record-copy"><h2>{paper.title}</h2><p>{paper.authors}</p><strong>{paper.journal}</strong></div>
              <a href={paper.href} target="_blank" rel="noreferrer" aria-label={`Open ${paper.title}`}>↗</a>
            </article>
          ))}
        </div>
        <p className="publication-note">* {lang === "zh" ? "表示第一作者或共同第一作者" : "indicates first or co-first author"}</p>
      </section>
      <LabFooter lang={lang} />
    </main>
  );
}
