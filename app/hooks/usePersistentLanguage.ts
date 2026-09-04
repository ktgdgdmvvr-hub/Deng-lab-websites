"use client";

import { useEffect, useState } from "react";

export type SiteLanguage = "zh" | "en";

const LANGUAGE_KEY = "deng-lab-language";

export function usePersistentLanguage() {
  const [lang, setLang] = useState<SiteLanguage>("zh");

  useEffect(() => {
    const saved = window.localStorage.getItem(LANGUAGE_KEY);
    if (saved === "zh" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  const toggleLanguage = () => {
    setLang(current => {
      const next = current === "zh" ? "en" : "zh";
      window.localStorage.setItem(LANGUAGE_KEY, next);
      return next;
    });
  };

  return { lang, toggleLanguage };
}
