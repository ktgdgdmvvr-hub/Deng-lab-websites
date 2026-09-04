"use client";

import { useState } from "react";
import { LabFooter, LabHeader, ScrollPrompt } from "../components/SiteChrome";
import { usePersistentLanguage } from "../hooks/usePersistentLanguage";

type Lang = "zh" | "en";

const sections = [
  {
    id: "institutions",
    number: "01",
    title: { zh: "机构与平台", en: "Institutions" },
    intro: {
      zh: "实验室所处的医学教育与基础研究环境。",
      en: "The academic and research environment in which the lab is based.",
    },
    links: [
      {
        code: "HMU",
        name: { zh: "海南医科大学", en: "Hainan Medical University" },
        description: {
          zh: "学校官方网站与公共信息入口。",
          en: "Official university website and public information portal.",
        },
        href: "https://www.muhn.edu.cn/",
        domain: "muhn.edu.cn",
      },
      {
        code: "SBMS",
        name: { zh: "海南医科大学基础医学院", en: "School of Basic Medical Sciences" },
        description: {
          zh: "实验室所在学院，涵盖基础医学、生物学、人才培养与科研动态。",
          en: "The lab's home school, spanning basic medicine, biology, education and research.",
        },
        href: "https://www.muhn.edu.cn/lxy/",
        domain: "muhn.edu.cn/lxy",
      },
    ],
  },
  {
    id: "rare-disease",
    number: "02",
    title: { zh: "罕见病知识", en: "Rare Disease Knowledge" },
    intro: {
      zh: "从疾病定义、临床表现到遗传咨询与患者资源。",
      en: "From disease definitions and clinical features to genetic counseling and patient resources.",
    },
    links: [
      {
        code: "NRDRS",
        name: { zh: "中国国家罕见病注册系统", en: "National Rare Diseases Registry System of China" },
        description: {
          zh: "面向中国罕见病队列、病例注册与协作研究的国家级平台。",
          en: "A national platform supporting rare-disease registries, cohorts and collaborative research in China.",
        },
        href: "https://www.nrdrs.org.cn/",
        domain: "nrdrs.org.cn",
      },
      {
        code: "ORPHA",
        name: { zh: "Orphanet", en: "Orphanet" },
        description: {
          zh: "查询罕见病、相关基因、孤儿药、专家中心与患者组织。",
          en: "Rare diseases, associated genes, orphan drugs, expert centers and patient organizations.",
        },
        href: "https://www.orpha.net/",
        domain: "orpha.net",
      },
      {
        code: "GARD",
        name: { zh: "NIH GARD", en: "NIH GARD" },
        description: {
          zh: "为患者、家庭、临床人员与研究者提供可靠的遗传和罕见病信息。",
          en: "Reliable genetic and rare-disease information for families, clinicians and researchers.",
        },
        href: "https://rarediseases.info.nih.gov/",
        domain: "rarediseases.info.nih.gov",
      },
      {
        code: "GR",
        name: { zh: "GeneReviews", en: "GeneReviews" },
        description: {
          zh: "经同行评议的遗传病诊断、临床管理与遗传咨询综述。",
          en: "Peer-reviewed guidance on diagnosis, management and genetic counseling for inherited disorders.",
        },
        href: "https://www.ncbi.nlm.nih.gov/books/NBK1116/",
        domain: "ncbi.nlm.nih.gov/books",
      },
      {
        code: "OMIM",
        name: { zh: "OMIM", en: "OMIM" },
        description: {
          zh: "人类基因、遗传表型及其相互关系的权威知识库。",
          en: "An authoritative knowledgebase of human genes, genetic phenotypes and their relationships.",
        },
        href: "https://omim.org/",
        domain: "omim.org",
      },
    ],
  },
  {
    id: "genetics",
    number: "03",
    title: { zh: "基因与表型", en: "Genes & Phenotypes" },
    intro: {
      zh: "用于表型标准化、变异解释和基因—疾病证据评估。",
      en: "Resources for phenotype standardization, variant interpretation and gene–disease evidence.",
    },
    links: [
      {
        code: "HPO",
        name: { zh: "Human Phenotype Ontology", en: "Human Phenotype Ontology" },
        description: {
          zh: "以标准化术语描述人类疾病表型，连接临床表现、疾病与基因。",
          en: "Standardized terminology connecting clinical phenotypes with diseases and genes.",
        },
        href: "https://hpo.jax.org/",
        domain: "hpo.jax.org",
      },
      {
        code: "CV",
        name: { zh: "ClinVar", en: "ClinVar" },
        description: {
          zh: "查询遗传变异与人类健康之间的关系及临床意义解释。",
          en: "Relationships between genetic variation and human health, with clinical interpretations.",
        },
        href: "https://www.ncbi.nlm.nih.gov/clinvar/",
        domain: "ncbi.nlm.nih.gov/clinvar",
      },
      {
        code: "CG",
        name: { zh: "ClinGen", en: "ClinGen" },
        description: {
          zh: "汇集基因—疾病有效性、剂量敏感性和变异致病性证据。",
          en: "Curated evidence for gene–disease validity, dosage sensitivity and variant pathogenicity.",
        },
        href: "https://www.clinicalgenome.org/",
        domain: "clinicalgenome.org",
      },
    ],
  },
  {
    id: "model-resources",
    number: "04",
    title: { zh: "果蝇模型与材料", en: "Drosophila Models & Materials" },
    intro: {
      zh: "支持果蝇遗传学、神经解剖、品系获取和跨物种机制研究。",
      en: "Supporting fly genetics, neuroanatomy, stock acquisition and cross-species discovery.",
    },
    links: [
      {
        code: "FB",
        name: { zh: "FlyBase", en: "FlyBase" },
        description: {
          zh: "果蝇基因、基因组、等位基因、表型、表达与文献的综合数据库。",
          en: "An integrated database of Drosophila genes, genomes, alleles, phenotypes, expression and literature.",
        },
        href: "https://flybase.org/",
        domain: "flybase.org",
      },
      {
        code: "BDSC",
        name: { zh: "Bloomington 果蝇品系中心", en: "Bloomington Drosophila Stock Center" },
        description: {
          zh: "收集、保存并向研究者分发黑腹果蝇遗传品系。",
          en: "Collects, maintains and distributes Drosophila melanogaster genetic stocks.",
        },
        href: "https://bdsc.indiana.edu/",
        domain: "bdsc.indiana.edu",
      },
      {
        code: "VDRC",
        name: { zh: "Vienna 果蝇资源中心", en: "Vienna Drosophila Resource Center" },
        description: {
          zh: "提供 RNAi、CRISPR、报告基因及其他转基因果蝇资源。",
          en: "RNAi, CRISPR, reporter and other transgenic Drosophila resources.",
        },
        href: "https://shop.vbc.ac.at/vdrc_store/",
        domain: "shop.vbc.ac.at/vdrc_store",
      },
      {
        code: "VFB",
        name: { zh: "Virtual Fly Brain", en: "Virtual Fly Brain" },
        description: {
          zh: "探索果蝇神经解剖、神经元类型、表达模式与相关文献。",
          en: "Explore fly neuroanatomy, neuron types, expression patterns and linked literature.",
        },
        href: "https://virtualflybrain.org/",
        domain: "virtualflybrain.org",
      },
    ],
  },
  {
    id: "literature-data",
    number: "05",
    title: { zh: "文献与数据", en: "Literature & Data" },
    intro: {
      zh: "追踪同行评议研究、公共组学数据与临床研究进展。",
      en: "Follow peer-reviewed research, public omics data and clinical studies.",
    },
    links: [
      {
        code: "PM",
        name: { zh: "PubMed", en: "PubMed" },
        description: {
          zh: "生物医学与生命科学文献的权威检索入口。",
          en: "The primary search portal for biomedical and life-science literature.",
        },
        href: "https://pubmed.ncbi.nlm.nih.gov/",
        domain: "pubmed.ncbi.nlm.nih.gov",
      },
      {
        code: "GEO",
        name: { zh: "NCBI GEO", en: "NCBI GEO" },
        description: {
          zh: "公共功能基因组学数据，包括转录组和其他高通量实验。",
          en: "Public functional-genomics data, including transcriptomic and other high-throughput studies.",
        },
        href: "https://www.ncbi.nlm.nih.gov/geo/",
        domain: "ncbi.nlm.nih.gov/geo",
      },
      {
        code: "CT",
        name: { zh: "ClinicalTrials.gov", en: "ClinicalTrials.gov" },
        description: {
          zh: "检索全球已注册的临床研究及其招募和进展状态。",
          en: "Search registered clinical studies, recruitment status and study progress worldwide.",
        },
        href: "https://clinicaltrials.gov/",
        domain: "clinicaltrials.gov",
      },
    ],
  },
] as const;

export default function ResourcesPage() {
  const { lang, toggleLanguage } = usePersistentLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const currentLang = lang as Lang;

  return (
    <main id="top">
      <LabHeader lang={lang} onLanguageChange={toggleLanguage} menuOpen={menuOpen} onMenuToggle={() => setMenuOpen(!menuOpen)} />
      <section className="subpage-hero resources-page-hero">
        <p className="section-kicker dark">RESOURCES & CONNECTIONS</p>
        <h1>{lang === "zh" ? "资源与连接" : "Resources & Connections"}</h1>
        <p>{lang === "zh" ? "科研始于问题，也生长于连接。这里汇集与脑发育、儿童罕见病和实验模型相关的可靠学术资源。" : "Science begins with questions and grows through connections. Explore trusted resources for brain development, rare childhood disorders and experimental models."}</p>
        <div className="resource-network" aria-hidden="true"><i /><i /><i /><i /><i /><span /><span /><span /></div>
      </section>
      <ScrollPrompt label={lang === "zh" ? "向下浏览资源" : "SCROLL TO RESOURCES"} target="#resource-list" />

      <nav className="resource-jump" id="resource-list" aria-label="Resource categories">
        {sections.map(section => (
          <a href={`#${section.id}`} key={section.id}>
            <span>{section.number}</span>
            <strong>{section.title[currentLang]}</strong>
          </a>
        ))}
      </nav>

      <div className="resource-groups">
        {sections.map(section => (
          <section className="resource-group" id={section.id} key={section.id}>
            <div className="resource-group-heading">
              <span>RESOURCE / {section.number}</span>
              <h2>{section.title[currentLang]}</h2>
              <p>{section.intro[currentLang]}</p>
            </div>
            <div className="resource-card-grid">
              {section.links.map(item => (
                <a href={item.href} target="_blank" rel="noreferrer" className="resource-card" key={item.href}>
                  <div className="resource-card-top"><span>{item.code}</span><b aria-hidden="true">↗</b></div>
                  <h3>{item.name[currentLang]}</h3>
                  <p>{item.description[currentLang]}</p>
                  <small>{item.domain}</small>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="resource-disclaimer">
        <span>EVERY CHILD IS SPECIAL</span>
        <div>
          <h2>{lang === "zh" ? "让可靠的信息，成为理解罕见的起点。" : "Let reliable knowledge be the beginning of understanding the rare."}</h2>
          <p>{lang === "zh" ? "以上均为外部网站，仅供科研与信息参考，不构成医学诊断或治疗建议。" : "These external resources are provided for research and information only and do not constitute medical diagnosis or treatment advice."}</p>
        </div>
      </section>
      <LabFooter lang={lang} />
    </main>
  );
}
