"use strict";

document.documentElement.classList.add("js");

const englishContent = [
  { selector: ".skip-link", value: "Skip to content" },
  { selector: ".brand-mark", value: "KP" },
  { selector: ".brand-text", value: "Finance Director · Consultant" },
  {
    selector: ".main-nav a",
    value: ["Who I Help", "Outcomes", "How I Work", "Case Studies", "About", "Contact"],
  },
  { selector: ".hero-name", value: "Kseniia<br>Plotnikova" },
  {
    selector: ".hero-role",
    value: "Finance Director <span aria-hidden=\"true\">|</span> Financial Management Consultant",
  },
  {
    selector: ".hero-lead",
    value: "Building transparent financial management systems for Russian and international businesses",
  },
  {
    selector: ".hero-summary",
    value: "I help business owners gain a clear, regular view of profit for the business as a whole and for individual projects, expected cash inflows and outflows, and the reasons for variances from plan. If a system is already in place, I review the methodology and data, correct errors, and establish a reliable recurring process for working with financial data.",
  },
  {
    selector: ".hero-action-row .button",
    value: "Discuss Your Needs on WhatsApp <span aria-hidden=\"true\">↗</span>",
  },
  {
    selector: ".hero-caption",
    value: "A financial system built for decisions, not for producing more spreadsheets",
  },
  { selector: ".hero-facts dt", value: ["10 years", "11 companies", "RU · EN"] },
  {
    selector: ".hero-facts dd",
    value: ["in corporate finance", "over the past 2.5 years", "management reporting"],
  },
  { selector: "#clients .eyebrow", value: "Growth opportunities and risks" },
  { selector: "#useful-title", value: "When my work is most valuable" },
  {
    selector: "#clients .section-intro",
    value: "A finance function becomes essential when the business outgrows its management accounting system and management lacks a coherent financial picture for decision-making.",
  },
  {
    selector: ".problem-grid p",
    value: [
      "As the business grows and the number of projects increases, there is no single, reliable view of profit and cash flow.",
      "The company’s overall result is known, but the profitability of individual projects, orders, or client engagements is not.",
      "Data is gathered manually from multiple systems, while reports arrive late or contradict one another.",
      "Budgets are not updated when costs, scope, or timelines change.",
      "Declining margins or future cash shortfalls become visible too late.",
      "Reporting depends on individual employees, while calculation rules and close deadlines are not formally documented.",
    ],
  },
  { selector: ".client-profile .eyebrow", value: "Industries and scale" },
  { selector: "#profile-title", value: "Who I work with" },
  { selector: ".profile-card-light .profile-label", value: "Core specialization" },
  { selector: ".profile-card-light h3", value: "Construction and project-based businesses" },
  {
    selector: ".profile-card-light > p:nth-of-type(2)",
    value: "Construction and property development, make-to-order manufacturing, equipment rental, and other businesses where it is important to understand the economics of individual projects, orders, assets, or business lines.",
  },
  {
    selector: ".profile-card-light .scale-note",
    value: "indicative annual revenue range for Russian companies",
  },
  { selector: ".profile-card-light .scale-value", value: "RUB 300 million–1.5 billion" },
  { selector: ".profile-card-dark .profile-label", value: "International focus" },
  { selector: ".profile-card-dark h3", value: "B2B IT and technology companies" },
  {
    selector: ".profile-card-dark > p:nth-of-type(2)",
    value: "Companies with distributed teams that need comparable management reporting in English across multiple currencies, analysis of client project performance, and regular financial planning.",
  },
  {
    selector: ".profile-card-dark .scale-note",
    value: "indicative annual revenue range for international companies",
  },
  { selector: ".profile-card-dark .scale-value", value: "EUR 2–10 million" },
  {
    selector: ".profile-footnote p",
    value: [
      "<strong>Additional experience:</strong> healthcare services, retail, commercial real estate leasing, and professional services.",
      "Scale is not a strict limitation. What matters more is the complexity of projects and financial flows, together with the owner’s need for regular management information.",
    ],
  },
  { selector: "#results .eyebrow", value: "Management system" },
  { selector: "#results-title", value: "What the owner gains" },
  {
    selector: "#results .section-intro",
    value: "After implementation, the company has an agreed methodology and a regular management accounting cycle.",
  },
  {
    selector: ".result-card h3",
    value: ["Consistent management reporting", "Control and planning", "A fully operational system"],
  },
  {
    selector: ".result-card:nth-child(1) li",
    value: [
      "profit and loss statement",
      "cash flow statement",
      "management balance sheet",
      "analysis by project and business line",
    ],
  },
  {
    selector: ".result-card:nth-child(2) li",
    value: [
      "budgets and budget-versus-actual analysis on a like-for-like basis",
      "explanations of material variances",
      "financial performance forecasts",
      "cash flow forecast",
    ],
  },
  {
    selector: ".result-card:nth-child(3) li",
    value: [
      "data preparation rules",
      "financial close calendar and clear ownership",
      "interactive dashboards",
      "trained team",
    ],
  },
  {
    selector: "#results .section-conclusion",
    value: "The reporting scope and level of detail are defined by the needs of the business. The goal is to give management the information required to make timely decisions.",
  },
  { selector: "#formats .eyebrow", value: "Engagement options and process" },
  { selector: "#formats-title", value: "How the work is structured" },
  {
    selector: "#formats .section-intro",
    value: "The engagement format depends on the company’s needs. For a full-cycle project, the sequence of stages is adapted to the current state of the management accounting system and the available data.",
  },
  { selector: ".work-label", value: ["Ways I can help", "Full-cycle implementation"] },
  {
    selector: ".work-panel-intro",
    value: "Start with a standalone assignment or choose end-to-end implementation.",
  },
  {
    selector: ".work-options h3",
    value: [
      "Financial management system assessment",
      "Management accounting implementation or redesign",
      "Project-level financial control",
      "Ongoing support",
    ],
  },
  {
    selector: ".work-options article div p",
    value: [
      "I review the existing data, reporting, and processes, identify key gaps, and recommend a sequence of improvements.",
      "I develop the methodology and reporting, set up budgets and a regular close cycle, train the team, and hand over the process.",
      "I set up financial analysis and performance forecasts for individual projects, orders, or client contracts.",
      "I provide ongoing financial performance analysis and expert support for the owner, CEO, or internal finance team after implementation.",
    ],
  },
  {
    selector: ".work-flow-heading > p:last-child",
    value: "If the assignment requires building the entire system, the work is completed in four sequential stages.",
  },
  {
    selector: ".work-flow-steps strong",
    value: ["Assessment", "Design", "Setup and validation", "Regular reporting cycle"],
  },
  { selector: ".role-note-label", value: "Roles and responsibilities" },
  {
    selector: ".role-note > p:last-child",
    value: "I define the methodology and organize the financial processes. I work with the finance and accounting teams, project managers, and department heads to compile operational data and define forecasting assumptions. The project team remains responsible for day-to-day project delivery and deadlines.",
  },
  { selector: "#cases .eyebrow", value: "Selected experience" },
  { selector: "#cases-title", value: "Case studies" },
  {
    selector: "#cases .section-intro",
    value: "These examples show the nature of the assignments and the scope of completed work. Company names are not disclosed.",
  },
  {
    selector: ".case-card:nth-child(1) .case-meta span",
    value: ["Construction", "Revenue of approximately RUB 1 billion"],
  },
  {
    selector: ".case-card:nth-child(1) > h3",
    value: "Industrial construction and manufacturing",
  },
  {
    selector: ".case-card:nth-child(2) .case-meta span",
    value: ["International IT", "Multi-currency reporting in English"],
  },
  { selector: ".case-card:nth-child(2) > h3", value: "Cybersecurity company" },
  {
    selector: ".case-card:nth-child(3) .case-meta span",
    value: ["Healthcare services", "Ongoing support for over 2.5 years"],
  },
  {
    selector: ".case-card:nth-child(3) > h3",
    value: "Chain of clinics specializing in device-based aesthetic treatments",
  },
  {
    selector: ".case-columns h4",
    value: [
      "Objective", "Work completed", "Outcome",
      "Objective", "Work completed", "Outcome",
      "Analysis focus", "Work completed", "Outcome",
    ],
  },
  {
    selector: ".case-columns p",
    value: [
      "Establish management reporting and financial performance tracking for individual projects.",
      "The reporting system was built from scratch. Project managers received metrics to monitor revenue, costs, and projected financial results, along with training on how to use them.",
      "The owner now has regular visibility into the financial results of the business and individual projects, budget variances, and financial risks. Monthly analysis supports discussion of appropriate actions before project completion.",
      "Further develop an existing management reporting system and correct identified errors.",
      "Reporting and analysis covered P&amp;L, the cash flow statement, the management balance sheet, project and business line performance, employee utilization, the monthly close, and budget-versus-actual analysis.",
      "The owner receives a regular management overview of the company and its projects. Local specialists manage statutory accounting and tax compliance in each country.",
      "Equipment utilization, service cost and margin analysis, and performance by business line, clinic, and acquisition channel.",
      "Patient acquisition and retention costs were compared with patient lifetime value, and a loyalty program was developed based on treatment frequency and average spend.",
      "The analysis supports decisions on pricing, equipment utilization, the staff incentive system, and priorities for developing individual business lines.",
    ],
  },
  { selector: ".other-work > h3", value: "Other assignments" },
  {
    selector: ".other-grid h4",
    value: ["Heavy equipment rental", "Retail", "Commercial real estate"],
  },
  {
    selector: ".other-grid p",
    value: [
      "Management accounting was built from scratch. The next phase covers utilization, revenue, repairs, and spare parts for each piece of equipment; this work is ongoing.",
      "Daily sales budget-versus-actual tracking, inventory analysis, and reorder guidelines for high-demand items.",
      "Analysis of occupancy and asset economics: costs, rental income, payback period, and an alternative sale scenario.",
    ],
  },
  { selector: "#about .eyebrow", value: "Experience" },
  { selector: "#about-title", value: "About me" },
  {
    selector: ".about-facts dd",
    value: ["years of experience", "companies advised over 2.5 years", "management accounting systems built from scratch"],
  },
  {
    selector: ".about-copy p",
    value: [
      "10 years in corporate finance, management accounting, budgeting, financial modeling, and investment analysis.",
      "Before moving into project-based consulting, I gained experience in banking and large real estate development companies. Over the past 2.5 years, I have worked with 11 companies as an external finance director and consultant: I built management accounting from scratch in five of them and improved or adapted the existing system in the others.",
      "I work with Russian companies and international teams. I can deliver management reporting in both Russian and English, including in multi-currency environments.",
    ],
  },
  { selector: "#contact .eyebrow", value: "Next step" },
  { selector: "#contact-title", value: "Let’s discuss your needs" },
  {
    selector: ".contact-copy > p:first-child",
    value: "Tell me what your company does, which decisions are difficult to make because the necessary financial data is unavailable, and what reporting is already in place. At our first meeting, we will discuss which metrics the owner needs, what is preventing regular access to them, and whether it makes more sense to begin with an assessment or implementation.",
  },
  {
    selector: ".contact-actions .button",
    value: [
      "Message me on WhatsApp <span aria-hidden=\"true\">↗</span>",
      "Message me on Telegram <span aria-hidden=\"true\">↗</span>",
    ],
  },
  { selector: ".language-note", value: "Available in Russian and English" },
  {
    selector: ".site-footer p",
    value: "Kseniia Plotnikova · Finance Director · Financial Management Consultant",
  },
  {
    selector: ".site-footer > .container > a",
    value: "Back to top <span aria-hidden=\"true\">↑</span>",
  },
];

const bindings = englishContent.map(({ selector, value }) => {
  const elements = [...document.querySelectorAll(selector)];
  const englishValues = Array.isArray(value) ? value : elements.map(() => value);

  if (elements.length !== englishValues.length) {
    throw new Error(`Translation mapping mismatch for ${selector}`);
  }

  return {
    elements,
    englishValues,
    russianValues: elements.map((element) => element.innerHTML),
  };
});

const pageMetadata = {
  ru: {
    title: "Ксения Плотникова — финансовый директор и консультант",
    description:
      "Ксения Плотникова — финансовый директор и консультант по управлению финансами. Построение прозрачной системы управления финансами для российского и международного бизнеса.",
    navigationLabel: "Основная навигация",
    languageLabel: "Выбор языка",
    brandLabel: "Ксения Плотникова — к началу страницы",
    factsLabel: "Ключевые факты",
    heroImageAlt: "Ксения Плотникова, финансовый директор и консультант по управлению финансами",
    aboutImageAlt: "Ксения Плотникова",
    whatsappMessage: "Здравствуйте, Ксения! Хочу обсудить финансовую систему моей компании",
  },
  en: {
    title: "Kseniia Plotnikova — Finance Director and Financial Management Consultant",
    description:
      "Kseniia Plotnikova — Finance Director and Financial Management Consultant. Building transparent financial management systems for Russian and international businesses.",
    navigationLabel: "Primary navigation",
    languageLabel: "Language selection",
    brandLabel: "Kseniia Plotnikova — back to top",
    factsLabel: "Key facts",
    heroImageAlt: "Kseniia Plotnikova, Finance Director and Financial Management Consultant",
    aboutImageAlt: "Kseniia Plotnikova",
    whatsappMessage: "Hello, Kseniia! I would like to discuss the financial management system for my company.",
  },
};

const languageLinks = [...document.querySelectorAll("[data-language]")];
const descriptionElement = document.querySelector('meta[name="description"]');
const navigationElement = document.querySelector(".main-nav");
const languageSwitcher = document.querySelector(".language-switcher");
const brandElement = document.querySelector(".brand");
const factsElement = document.querySelector(".hero-facts");
const images = [...document.querySelectorAll("img")];
const whatsappLinks = [...document.querySelectorAll('a[href^="https://wa.me/"]')];

function readSavedLanguage() {
  try {
    return window.localStorage.getItem("site-language");
  } catch {
    return null;
  }
}

function saveLanguage(language) {
  try {
    window.localStorage.setItem("site-language", language);
  } catch {
    // The site still works when browser storage is unavailable.
  }
}

function updateLanguageInUrl(language) {
  const url = new URL(window.location.href);

  if (language === "en") {
    url.searchParams.set("lang", "en");
  } else {
    url.searchParams.delete("lang");
  }

  window.history.replaceState({}, "", url);
}

function applyLanguage(language, updateUrl = true) {
  const selectedLanguage = language === "en" ? "en" : "ru";
  const metadata = pageMetadata[selectedLanguage];

  bindings.forEach(({ elements, englishValues, russianValues }) => {
    elements.forEach((element, index) => {
      element.innerHTML = selectedLanguage === "en" ? englishValues[index] : russianValues[index];
    });
  });

  document.documentElement.lang = selectedLanguage;
  document.title = metadata.title;
  descriptionElement?.setAttribute("content", metadata.description);
  navigationElement?.setAttribute("aria-label", metadata.navigationLabel);
  languageSwitcher?.setAttribute("aria-label", metadata.languageLabel);
  brandElement?.setAttribute("aria-label", metadata.brandLabel);
  factsElement?.setAttribute("aria-label", metadata.factsLabel);

  if (images[0]) images[0].alt = metadata.heroImageAlt;
  if (images[1]) images[1].alt = metadata.aboutImageAlt;

  const whatsappUrl = `https://wa.me/79362628540?text=${encodeURIComponent(metadata.whatsappMessage)}`;
  whatsappLinks.forEach((link) => link.setAttribute("href", whatsappUrl));

  languageLinks.forEach((link) => {
    if (link.dataset.language === selectedLanguage) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  saveLanguage(selectedLanguage);
  if (updateUrl) updateLanguageInUrl(selectedLanguage);
}

languageLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    applyLanguage(link.dataset.language);
  });
});

const requestedLanguage = new URL(window.location.href).searchParams.get("lang");
const initialLanguage = requestedLanguage === "en" || requestedLanguage === "ru"
  ? requestedLanguage
  : readSavedLanguage() === "en"
    ? "en"
    : "ru";

applyLanguage(initialLanguage, requestedLanguage !== initialLanguage);
