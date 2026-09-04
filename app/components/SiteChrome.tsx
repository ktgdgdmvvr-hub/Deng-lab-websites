"use client";

import { useEffect, useState } from "react";
import { sitePath } from "../sitePath";

type Lang = "zh" | "en";

const nav = {
  zh: [
    ["研究方向", "/research"],
    ["研究团队", "/#people"],
    ["科研成果", "/publications"],
    ["实验室动态", "/news"],
    ["加入我们", "/#join"],
    ["相关链接", "/resources"],
  ],
  en: [
    ["Research", "/research"],
    ["People", "/#people"],
    ["Publications", "/publications"],
    ["News", "/news"],
    ["Join Us", "/#join"],
    ["Resources", "/resources"],
  ],
};

export function LabHeader({
  lang,
  onLanguageChange,
  menuOpen,
  onMenuToggle,
}: {
  lang: Lang;
  onLanguageChange: () => void;
  menuOpen: boolean;
  onMenuToggle: () => void;
}) {
  return (
    <header className="site-header internal-header">
      <a className="brand" href={sitePath("/")} aria-label="Deng Lab home">
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
        onClick={onMenuToggle}
      >
        <span /><span />
      </button>
      <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
        {nav[lang].map(([label, href]) => <a key={href} href={sitePath(href)}>{label}</a>)}
        <button className="language" onClick={onLanguageChange}>{lang === "zh" ? "EN" : "中文"}</button>
      </nav>
    </header>
  );
}

export function LabFooter({ lang }: { lang: Lang }) {
  return (
    <footer>
      <div className="footer-brand">
        <strong>DENG LAB</strong>
        <span>Laboratory of Brain Development<br />and Rare Neurodevelopmental Disorders</span>
      </div>
      <div className="footer-contact">
        <p><span>{lang === "zh" ? "联系邮箱" : "Email"}</span><a href="mailto:qiannandeng0520@gmail.com">qiannandeng0520@gmail.com</a></p>
        <p><span>{lang === "zh" ? "所在单位" : "Institution"}</span>{lang === "zh" ? "海南医科大学基础医学院" : "School of Basic Medical Sciences, Hainan Medical University"}</p>
      </div>
      <p className="footer-closing">{lang === "zh" ? "每一个罕见的生命，都值得被看见。" : "Every rare life deserves to be seen."}</p>
      <div className="footer-bottom"><span>© 2026 Deng Lab</span><div><a href={sitePath("/resources")}>{lang === "zh" ? "相关链接" : "RESOURCES"}</a><a href="#top">BACK TO TOP ↑</a></div></div>
    </footer>
  );
}

export function ScrollPrompt({ label, target }: { label: string; target: string }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const update = () => setHidden(window.scrollY > 80);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <a className={hidden ? "global-scroll-cue is-hidden" : "global-scroll-cue"} href={target} aria-label={label}>
      <span>{label}</span>
      <i aria-hidden="true" />
      <b aria-hidden="true">⌄</b>
    </a>
  );
}
