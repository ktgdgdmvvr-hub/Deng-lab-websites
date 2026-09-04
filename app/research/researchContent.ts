import { sitePath } from "../sitePath";

export type Lang = "zh" | "en";

export const directions = [
  {
    slug: "neural-stem-cell-fate",
    number: "01",
    figure: {
      src: sitePath("/images/research/neural-stem-cell-fate-map.png"),
      label: "FIG. 1",
      source: "Deng Lab · Original research schematic",
      zh: {
        alt: "神经干细胞从静息激活到不对称分裂的机制示意图，展示微管、Golgi、E-cadherin及Hyx-AurA-Polo调控轴",
        caption: "基于已发表研究概括的神经干细胞静息激活、再生和不对称分裂机制示意图。",
        note: "实验室原创重绘。",
      },
      en: {
        alt: "Mechanistic map of neural stem-cell reactivation and asymmetric division, featuring microtubules, Golgi, E-cadherin and the Hyx-AurA-Polo axis",
        caption: "A research-based synthesis of neural stem-cell reactivation, regeneration and asymmetric division.",
        note: "Original schematic redrawn by Deng Lab.",
      },
    },
    secondaryFigure: null,
    zh: {
      title: "神经干细胞命运决定的细胞生物学机制",
      short: "研究神经干细胞如何在静息、激活、自我更新与分化之间完成有序转换。",
      statement: "大脑的形成，始于神经干细胞对每一次命运选择的精确判断。",
      coreQuestion: "神经干细胞如何在静息、激活、自我更新与分化之间完成有序转换？",
      overview: [
        "博士后期间的研究揭示了无中心体微管、Golgi 微管组织和 E-cadherin 定位在静息神经干细胞激活与损伤后再生中的作用。Msps/XMAP215–Kinesin-2 轴促进 E-cadherin 定位与细胞周期重启，Arf1–Sec71–Msps 轴则连接 Golgi 微管组织、静息退出和损伤后突起再生。",
        "在增殖期神经干细胞中，研究发现 Parafibromin/Hyx 通过 Polo 和 AurA 维持细胞极性、中心体组装和不对称分裂。这些工作构成了实验室研究神经干细胞状态转换与命运决定的基础。",
      ],
      questions: [
        "无中心体微管网络如何支持静息神经干细胞重新激活与损伤后再生？",
        "细胞极性、中心体和微管组装如何共同保障不对称分裂？",
        "细胞骨架、膜运输与细胞黏附如何被整合为一次精确的命运转换？",
      ],
      approaches: ["果蝇遗传学", "活体成像", "细胞生物学", "分子生化"],
      papers: [
        {
          label: "第一作者研究｜The EMBO Journal, 2021",
          citation: "Deng Q*, Tan YS, Chew LY, Wang H. Msps governs acentrosomal microtubule assembly and reactivation of quiescent neural stem cells. The EMBO Journal. 2021;40(19):e104549.",
          contribution: "建立静息神经干细胞突起中的无中心体微管组织模式，揭示 Msps–Kinesin-2 通过促进 E-cadherin 定位和细胞周期重启调控神经干细胞激活。",
        },
        {
          label: "第一作者研究｜PLOS Biology, 2022",
          citation: "Deng Q*, Wang C, Koe CT, et al. Parafibromin governs cell polarity and centrosome assembly in Drosophila neural stem cells. PLOS Biology. 2022;20(10):e3001834.",
          contribution: "揭示 Parafibromin/Hyx–Polo/AurA 通路对神经干细胞极性、中心体/微管组装和不对称分裂的调控作用。",
        },
        {
          label: "共同作者研究｜Developmental Cell, 2023",
          citation: "Gujar MR, Gao Y, Teng X, Deng Q, Lin KY, Tan YS, Toyama Y, Wang H. Golgi-dependent reactivation and regeneration of Drosophila quiescent neural stem cells. Developmental Cell. 2023;58(19):1933–1949.e5.",
          contribution: "揭示 Golgi 体作为静息神经干细胞的主要无中心体微管组织中心，并鉴定 Arf1–Sec71–Msps 轴在静息退出及损伤后突起再生中的作用。",
        },
      ],
    },
    en: {
      title: "Cell-biological mechanisms of neural stem-cell fate decisions",
      short: "How neural stem cells make orderly transitions among quiescence, activation, self-renewal and differentiation.",
      statement: "Building a brain begins with every precise fate decision made by a neural stem cell.",
      coreQuestion: "How do neural stem cells make orderly transitions among quiescence, activation, self-renewal and differentiation?",
      overview: [
        "Our postdoctoral work defined how acentrosomal microtubules, Golgi-based microtubule organization and E-cadherin localization support quiescent neural stem-cell reactivation and regeneration after injury. The Msps/XMAP215–Kinesin-2 axis promotes E-cadherin localization and cell-cycle re-entry, while the Arf1–Sec71–Msps axis links Golgi microtubule organization to exit from quiescence and protrusion regeneration.",
        "In proliferating neural stem cells, we found that Parafibromin/Hyx acts through Polo and AurA to maintain cell polarity, centrosome assembly and asymmetric division. Together, these studies form the foundation for our work on neural stem-cell state transitions and fate decisions.",
      ],
      questions: [
        "How do acentrosomal microtubules support reactivation and post-injury regeneration of quiescent neural stem cells?",
        "How do cell polarity, centrosomes and microtubule assembly safeguard asymmetric division?",
        "How are the cytoskeleton, membrane trafficking and cell adhesion integrated into a precise fate transition?",
      ],
      approaches: ["Drosophila genetics", "Live imaging", "Cell biology", "Molecular biochemistry"],
      papers: [
        {
          label: "First-author study | The EMBO Journal, 2021",
          citation: "Deng Q*, Tan YS, Chew LY, Wang H. Msps governs acentrosomal microtubule assembly and reactivation of quiescent neural stem cells. The EMBO Journal. 2021;40(19):e104549.",
          contribution: "Established the organization of acentrosomal microtubules in quiescent neural stem-cell protrusions and revealed how Msps–Kinesin-2 promotes E-cadherin localization and cell-cycle re-entry.",
        },
        {
          label: "First-author study | PLOS Biology, 2022",
          citation: "Deng Q*, Wang C, Koe CT, et al. Parafibromin governs cell polarity and centrosome assembly in Drosophila neural stem cells. PLOS Biology. 2022;20(10):e3001834.",
          contribution: "Revealed how the Parafibromin/Hyx–Polo/AurA pathway controls neural stem-cell polarity, centrosome and microtubule assembly, and asymmetric division.",
        },
        {
          label: "Co-author study | Developmental Cell, 2023",
          citation: "Gujar MR, Gao Y, Teng X, Deng Q, Lin KY, Tan YS, Toyama Y, Wang H. Golgi-dependent reactivation and regeneration of Drosophila quiescent neural stem cells. Developmental Cell. 2023;58(19):1933–1949.e5.",
          contribution: "Identified the Golgi as the principal acentrosomal microtubule-organizing center in quiescent neural stem cells and defined the Arf1–Sec71–Msps axis in reactivation and protrusion regeneration.",
        },
      ],
    },
  },
  {
    slug: "membrane-trafficking-niche",
    number: "02",
    figure: {
      src: sitePath("/images/research/simba-wingless-model.png"),
      label: "PUBLISHED MODEL",
      source: "Lin et al. · Nature Communications, 2025 · Fig. 7",
      zh: {
        alt: "Simba1和Simba2在血脑屏障胶质细胞和神经干细胞中激活Wingless信号、促进静息神经干细胞重新激活的工作模型",
        caption: "Simba1/2–Wingless 信号连接血脑屏障胶质细胞、神经干细胞微环境与静息神经干细胞激活。",
        note: "原图引自 Lin et al., Nature Communications 16, 11651 (2025)，依 CC BY-NC-ND 4.0 原样使用。",
      },
      en: {
        alt: "Working model in which Simba1 and Simba2 activate Wingless signaling in blood-brain-barrier glia and neural stem cells to promote quiescent neural stem-cell reactivation",
        caption: "Simba1/2–Wingless signaling links blood-brain-barrier glia, the neural stem-cell niche and quiescent neural stem-cell reactivation.",
        note: "Unmodified from Lin et al., Nature Communications 16, 11651 (2025), under CC BY-NC-ND 4.0.",
      },
    },
    secondaryFigure: null,
    zh: {
      title: "胞内膜运输、分泌与神经干细胞微环境",
      short: "研究膜蛋白递送与回收、胞外基质和可溶性信号分泌如何影响神经干细胞状态转换。",
      statement: "神经干细胞的命运，也由它与周围细胞交换的每一道信号塑造。",
      coreQuestion: "胞内膜运输与分泌如何连接细胞内在状态、外部微环境和神经干细胞命运？",
      overview: [
        "课题组将研究膜蛋白的递送与回收、胞外基质和可溶性信号的分泌，以及这些过程如何影响细胞黏附、细胞间通讯和神经干细胞状态转换。",
        "相关研究基础显示，微蛋白 Simba1/2 通过促进血脑屏障胶质细胞与神经干细胞之间的 Wingless 信号传递，推动静息神经干细胞激活。这为研究分泌性 niche 信号如何非细胞自主地调控神经干细胞命运提供了直接依据。",
      ],
      questions: [
        "膜蛋白的递送、回收与定位如何改变神经干细胞对外界信号的响应？",
        "胞外基质与可溶性信号的分泌如何塑造神经干细胞微环境？",
        "邻近胶质细胞与神经干细胞之间的信号交换如何触发静息退出？",
      ],
      approaches: ["果蝇遗传学", "活体成像", "膜运输分析", "分泌与胞外基质", "人培养细胞"],
      papers: [
        {
          label: "相关研究｜Nature Communications, 2025",
          citation: "Lin J, Deng Q, Gao Y, Tan YS, Zhong Z, Tan LKA, Tan BOP, Virshup DM, Bosch JA, Perrimon N, Wang H. Microproteins Simba1 and Simba2 activate Wingless signaling during the reactivation of neural stem cells in Drosophila. Nature Communications. 2025;16:11651.",
          contribution: "揭示 Simba1/2 通过调控血脑屏障胶质细胞—神经干细胞之间的 Wg 信号传递，非细胞自主地促进静息神经干细胞激活。",
        },
      ],
    },
    en: {
      title: "Intracellular membrane trafficking, secretion and the neural stem-cell niche",
      short: "How membrane-protein delivery and recycling, extracellular matrix and soluble signals shape neural stem-cell state transitions.",
      statement: "A neural stem cell’s fate is also shaped by every signal it exchanges with its neighbors.",
      coreQuestion: "How do intracellular membrane trafficking and secretion connect intrinsic cell state, the external microenvironment and neural stem-cell fate?",
      overview: [
        "We study the delivery and recycling of membrane proteins, the secretion of extracellular-matrix components and soluble signals, and how these processes influence cell adhesion, intercellular communication and neural stem-cell state transitions.",
        "Our foundation includes work showing that the microproteins Simba1/2 promote quiescent neural stem-cell reactivation by facilitating Wingless signaling between blood-brain-barrier glia and neural stem cells. This provides direct evidence for non-cell-autonomous control of neural stem-cell fate by secreted niche signals.",
      ],
      questions: [
        "How do membrane-protein delivery, recycling and localization alter a neural stem cell’s response to external signals?",
        "How do extracellular-matrix components and soluble signals shape the neural stem-cell niche?",
        "How does signaling between neighboring glia and neural stem cells trigger exit from quiescence?",
      ],
      approaches: ["Drosophila genetics", "Live imaging", "Membrane-trafficking assays", "Secretion and extracellular matrix", "Human cultured cells"],
      papers: [
        {
          label: "Related study | Nature Communications, 2025",
          citation: "Lin J, Deng Q, Gao Y, Tan YS, Zhong Z, Tan LKA, Tan BOP, Virshup DM, Bosch JA, Perrimon N, Wang H. Microproteins Simba1 and Simba2 activate Wingless signaling during the reactivation of neural stem cells in Drosophila. Nature Communications. 2025;16:11651.",
          contribution: "Showed that Simba1/2 regulate Wg signaling between blood-brain-barrier glia and neural stem cells to promote quiescent neural stem-cell reactivation non-cell-autonomously.",
        },
      ],
    },
  },
  {
    slug: "common-mechanisms",
    number: "03",
    figure: {
      src: sitePath("/images/research/tlk2-antioxidant-mechanism.png"),
      label: "FIG. 2",
      source: "Deng Lab · Original research schematic",
      zh: {
        alt: "TLK2缺失导致ATF4-NRF2抗氧化通路活性下降、氧化应激升高和脑发育异常的跨模型机制示意图",
        caption: "TLK2 缺失导致抗氧化应答下降和脑发育异常的跨模型机制示意图。",
        note: "实验室原创重绘。",
      },
      en: {
        alt: "Cross-model mechanism linking TLK2 loss to reduced ATF4-NRF2 antioxidant activity, oxidative stress and abnormal brain development",
        caption: "A cross-model mechanism linking TLK2 loss to impaired antioxidant responses and abnormal brain development.",
        note: "Original schematic redrawn by Deng Lab.",
      },
    },
    secondaryFigure: {
      src: sitePath("/images/research/cross-species-platform.png"),
      label: "FIG. 3",
      source: "Deng Lab · Research platform",
      zh: {
        alt: "从果蝇遗传模型、人培养细胞、iPSC和神经前体细胞到脑类器官及干预验证的跨物种跨模型研究体系",
        caption: "实验室跨物种、跨模型研究与干预验证体系。",
        note: "实验室原创研究框架图。",
      },
      en: {
        alt: "Cross-species and cross-model pipeline from Drosophila genetics and human cultured cells to iPSC-derived neural progenitors, brain organoids and intervention validation",
        caption: "Deng Lab's cross-species, cross-model research and intervention-validation platform.",
        note: "Original research-framework graphic by Deng Lab.",
      },
    },
    zh: {
      title: "儿童罕见神经发育障碍的收敛细胞机制",
      short: "比较不同儿童罕见神经发育障碍的共性与特异性细胞过程，寻找影响神经干细胞命运的可干预节点。",
      statement: "每一种罕见病都独一无二，也可能在细胞深处汇入共同的失衡。",
      coreQuestion: "不同儿童罕见神经发育障碍是否存在收敛的细胞机制和命运异常？",
      overview: [
        "以 TLK2 相关智力发育障碍 57 型（MRD57）为例，前期研究在果蝇和患者来源脑类器官中建立了 TLK2 缺失、ATF4–NRF2 抗氧化应答下降、氧化应激升高、神经干细胞异常与脑发育缺陷之间的联系。",
        "后续将从疾病基因和发育表型出发，比较不同疾病的共性与特异性细胞过程，并检验细胞内运输、分泌稳态、氧化应激与细胞外微环境等过程是否共同影响神经干细胞命运。",
        "实验室采用“果蝇体内发现—人源细胞机制验证—iPSC/NPC 与脑类器官评估”的递进体系，通过跨物种、跨模型证据区分相关性与因果性，并在可靠机制基础上开展遗传或药理学干预。",
      ],
      questions: [
        "不同遗传缺陷是否汇聚于共同的细胞过程和神经干细胞命运异常？",
        "ATF4–NRF2 抗氧化应答轴如何连接 TLK2 缺失与脑发育表型？",
        "跨物种、跨模型证据能否识别具有机制特异性的可干预节点？",
      ],
      approaches: ["果蝇遗传模型", "人培养细胞", "患者来源 iPSC / NPC", "脑类器官", "氧化应激分析", "遗传与药理干预"],
      papers: [
        {
          label: "返修稿 / 预印本｜Manuscript under revision at PNAS",
          citation: "Deng Q*, Hou F*, Zhou X, et al. Loss of Tousled-Like Kinase 2 Reduces Antioxidative Responses and Disrupts Brain Development. LangTaoSha Preprint Server. 2026. doi:10.65215/LTSpreprints.2026.03.06.000145.",
          contribution: "在果蝇神经干细胞和患者来源脑类器官中建立 TLK2 缺失—ATF4/NRF2 抗氧化应答下降—氧化应激—脑发育异常的跨模型机制联系，并提示潜在干预节点。",
        },
      ],
    },
    en: {
      title: "Convergent cellular mechanisms of rare pediatric neurodevelopmental disorders",
      short: "Comparing shared and disease-specific cellular processes to identify actionable nodes that alter neural stem-cell fate.",
      statement: "Every rare disorder is unique, yet distinct diseases may converge on the same imbalance deep within a cell.",
      coreQuestion: "Do rare pediatric neurodevelopmental disorders converge on shared cellular mechanisms and abnormalities in cell fate?",
      overview: [
        "Using TLK2-related intellectual developmental disorder 57 (MRD57) as an example, our earlier work established a cross-model link among TLK2 loss, reduced ATF4–NRF2 antioxidant responses, elevated oxidative stress, abnormal neural stem cells and impaired brain development in Drosophila and patient-derived brain organoids.",
        "Starting from disease genes and developmental phenotypes, we will compare shared and disease-specific cellular processes and test whether intracellular trafficking, secretory homeostasis, oxidative stress and the extracellular microenvironment converge on neural stem-cell fate.",
        "Our progressive strategy moves from in vivo discovery in Drosophila to mechanistic validation in human cells and assessment in iPSC-derived neural progenitors and brain organoids. Cross-species and cross-model evidence distinguishes correlation from causality before genetic or pharmacological intervention.",
      ],
      questions: [
        "Do distinct genetic defects converge on shared cellular processes and abnormalities in neural stem-cell fate?",
        "How does the ATF4–NRF2 antioxidant-response axis connect TLK2 loss to brain-development phenotypes?",
        "Can cross-species and cross-model evidence reveal mechanistically specific intervention nodes?",
      ],
      approaches: ["Drosophila genetic models", "Human cultured cells", "Patient-derived iPSCs / NPCs", "Brain organoids", "Oxidative-stress analysis", "Genetic and pharmacological intervention"],
      papers: [
        {
          label: "Revised manuscript / preprint | Under revision at PNAS",
          citation: "Deng Q*, Hou F*, Zhou X, et al. Loss of Tousled-Like Kinase 2 Reduces Antioxidative Responses and Disrupts Brain Development. LangTaoSha Preprint Server. 2026. doi:10.65215/LTSpreprints.2026.03.06.000145.",
          contribution: "Established a cross-model link from TLK2 loss to reduced ATF4/NRF2 antioxidant responses, oxidative stress and abnormal brain development in Drosophila neural stem cells and patient-derived brain organoids, highlighting candidate intervention nodes.",
        },
      ],
    },
  },
] as const;
