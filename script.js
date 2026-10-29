// Content lives here so adding a project or certificate means editing one list.

const TOOLS = [
  { name: "Python", icon: "images/skills/python.png" },
  { name: "n8n", icon: "images/skills/n8n.png" },
  { name: "Make", icon: "images/skills/make.png" },
  { name: "Zapier", icon: "images/skills/zapier.png" },
  { name: "GoHighLevel", icon: "images/skills/ghl.png" },
  { name: "Retell", icon: "images/skills/retell.png" },
  { name: "VAPI", icon: "images/skills/vapi.png" },
  { name: "Claude Code", icon: "https://cdn.simpleicons.org/claude" },
  { name: "Power BI", icon: "images/skills/power.png" },
  { name: "AWS", icon: "images/skills/AWS.png" },
  { name: "Microsoft Fabric", icon: "images/skills/Microsoft-Fabric.png" },
];

// group = which filter the project sits under; cat = the label shown on the card
const PROJECTS = [
  { title: "Assistant: an AI chief of staff for a multi-business operator", cat: "AI agent", group: "agents",
    tools: "Claude Code, React, Python, Claude API, OpenAI (embeddings and Whisper), Redis, Vercel, Telegram, Gmail, Outlook, Smartsheet, Procore, Square POS", },
  { title: "Alpha & Omega: team time and payroll tracker", cat: "Automation", group: "automation",
    tools: "Claude Code, React, Tailwind CSS, Supabase (Postgres), n8n", },
  { title: "PlumbersStock inventory dashboard: purchasing and inventory intelligence", cat: "Dashboard", group: "dashboards",
    tools: "Claude Code, React, Python, Chart.js, pandas, SQL", },
  { title: "AI voice receptionist for inbound calls", cat: "AI voice", group: "voice",
    tools: "Make, VAPI, Zapier, Gmail, OpenAI",
    link: "https://github.com/Historfic/AI-Voice-Inbound-Call-for-a-Roofing-Company", img: "images/data/ai_inbound_voice.png" },
  { title: "AI voice cold calling", cat: "AI voice", group: "voice",
    tools: "Make, VAPI, Excel, sales calls, marketing campaign",
    link: "https://github.com/Historfic/AI-Receptionist-Outbound-Call", img: "images/data/outbound_call.png" },
  { title: "HVAC AI voice receptionist", cat: "AI voice", group: "voice",
    tools: "Retell, n8n, Airtable, API integration, Twilio, booked appointments" },
  { title: "GoHighLevel voice assistant for outbound calls", cat: "AI voice", group: "voice",
    tools: "GoHighLevel, OpenAI, Retell, n8n", img: "images/data/ghl_outbound.png" },
  { title: "Facebook Ads chatbot AI agent", cat: "AI agent", group: "agents",
    tools: "n8n, Google Gemini, AI agent, Facebook Ads, webhook",
    link: "https://docs.google.com/presentation/d/1GhD9gjL1ktH-BfwTnJgbpYXVIeZXglOf0WXzJUgcPv0/edit?usp=sharing",
    img: "images/v2/slides/facebook-ads-chatbot.jpg" },
  { title: "JobIQ: AI-powered job search and auto-apply engine", cat: "AI agent", group: "agents",
    tools: "Claude Code, React, Python, Claude API, OnlineJobs.ph scraping pipeline", },
  { title: "YouTube analyzer", cat: "AI agent", group: "agents",
    tools: "Claude Code, Python, YouTube Data API v3, Gmail API, Google OAuth 2.0, matplotlib, python-pptx, pandas",
    link: "https://docs.google.com/presentation/d/1YSuJaVVv-7oeCYpMQOby2mAArNrUp8G2/edit?usp=sharing&ouid=115405162924001799418&rtpof=true&sd=true",
    img: "images/data/Youtube API Analysis.drawio.jpg" },
  { title: "Sales calls review", cat: "AI analysis", group: "agents",
    tools: "n8n, OpenAI, Slack, API integration, data analysis", img: "images/data/Sales Calls Review.png" },
  { title: "AI voice workflow prompt", cat: "AI agent", group: "agents",
    tools: "Retell, n8n, OpenAI" },
  { title: "AI content repurposing automation", cat: "Automation", group: "automation",
    tools: "Zapier, OpenAI, Airtable, GoHighLevel, Google Drive",
    link: "https://docs.google.com/presentation/d/1Qgv4CXRqUVEsS4ciqeTt3PAZKBdc5HQzbLfSE8Rz-EI/edit?usp=sharing" },
  { title: "Facebook caption generator", cat: "Automation", group: "automation",
    tools: "Make, social media management, marketing campaign, API integration", img: "images/data/caption generator.png" },
  { title: "PageSpeed Insights analysis", cat: "Automation", group: "automation",
    tools: "n8n, Google Sheets, web scraping, data analysis",
    link: "https://docs.google.com/presentation/d/11t7CaKzdgtkvFM3n6WpmyvOnvmt0vSUr0myq1pH0E1k/edit?usp=sharing" },
  { title: "Landing proposal generator page", cat: "Web app", group: "web",
    tools: "Claude Code, HTML5, CSS3, vanilla JavaScript",
    link: "https://docs.google.com/presentation/d/1ebjeKmcHkOs0XTFNkGZvwK0pkox8i6gJn4MQ1lo-vhI/edit?usp=sharing" },
  { title: "Fernlight Advice: income protection price check", cat: "Landing page demo", group: "web",
    tools: "HTML5, CSS3, vanilla JavaScript", link: "https://historfic.github.io/fernlight-advice-income-protection/",
    img: "images/v2/landing/fernlight-advice-income-protection.jpg" },
  { title: "Brightdesk Commercial Cleaning: quote request", cat: "Landing page demo", group: "web",
    tools: "Next.js, React, TypeScript, Tailwind CSS", link: "https://historfic.github.io/brightdesk-commercial-cleaning/",
    img: "images/v2/landing/brightdesk-commercial-cleaning.jpg" },
  { title: "Harbourmark: business insurance", cat: "Landing page demo", group: "web",
    tools: "Next.js, React, TypeScript, Tailwind CSS", link: "https://historfic.github.io/harbourmark-business-cover/",
    img: "images/v2/landing/harbourmark-business-cover.jpg" },
  { title: "Harbourmark: mortgage comparison", cat: "Landing page demo", group: "web",
    tools: "Next.js, React, TypeScript, Tailwind CSS", link: "https://historfic.github.io/harbourmark-mortgages/",
    img: "images/v2/landing/harbourmark-mortgages.jpg" },
  { title: "Harbourmark: personal insurance", cat: "Landing page demo", group: "web",
    tools: "Next.js, React, TypeScript, Tailwind CSS", link: "https://historfic.github.io/harbourmark-personal-cover/",
    img: "images/v2/landing/harbourmark-personal-cover.jpg" },
  { title: "Fernlight Advice: ACC cover comparison", cat: "Landing page demo", group: "web",
    tools: "HTML5, CSS3, vanilla JavaScript", link: "https://historfic.github.io/fernlight-advice-acc/",
    img: "images/v2/landing/fernlight-advice-acc.jpg" },
  { title: "Fernlight Advice: KiwiSaver projection", cat: "Landing page demo", group: "web",
    tools: "HTML5, CSS3, vanilla JavaScript", link: "https://historfic.github.io/fernlight-advice-kiwisaver/",
    img: "images/v2/landing/fernlight-advice-kiwisaver.jpg" },
  { title: "Fernlight Advice: home loan snapshot", cat: "Landing page demo", group: "web",
    tools: "HTML5, CSS3, vanilla JavaScript", link: "https://historfic.github.io/fernlight-advice-home-loans/",
    img: "images/v2/landing/fernlight-advice-home-loans.jpg" },
  { title: "Homegrove Mortgages: mortgage adviser", cat: "Landing page demo", group: "web",
    tools: "HTML5, CSS3, vanilla JavaScript", link: "https://historfic.github.io/homegrove-mortgages/",
    img: "images/v2/landing/homegrove-mortgages.jpg" },
  { title: "Anchorbay Cover: income protection", cat: "Landing page demo", group: "web",
    tools: "HTML5, CSS3, vanilla JavaScript", link: "https://historfic.github.io/anchorbay-income-protection/",
    img: "images/v2/landing/anchorbay-income-protection.jpg" },
  { title: "Anchorbay Cover: life, trauma and TPD", cat: "Landing page demo", group: "web",
    tools: "HTML5, CSS3, vanilla JavaScript", link: "https://historfic.github.io/anchorbay-lump-sum-cover/",
    img: "images/v2/landing/anchorbay-lump-sum-cover.jpg" },
  { title: "International debt dashboard", cat: "Data analytics", group: "data",
    tools: "EDA, Python, data visualization, Power BI",
    link: "https://github.com/Historfic/Analysis-of-International-Debt-Country-Rankings-and-Specific-Insights",
    img: "images/data/International Debt.jpg" },
  { title: "Comparative analysis of VoyceMe", cat: "Data analytics", group: "data",
    tools: "EDA, Python, Power BI, data visualization",
    link: "https://github.com/Historfic/Comparative-Performance-Analysis-of-VoyceMe-Series-vs-Competitors",
    img: "images/data/VoyceMe.jpg" },
  { title: "Data-driven product management", cat: "Data analytics", group: "data",
    tools: "EDA, Python, data integration, Excel",
    link: "https://github.com/Historfic/Data-Driven-Product-Management---Conducting-a-Market-Analysis",
    img: "images/data/Data_Driven.png" },
  { title: "Data professional survey", cat: "Dashboard", group: "dashboards",
    tools: "Power BI, Power Query Editor, data cleaning, data visualization",
    link: "https://github.com/Historfic/Data-Professionals-Survey",
    img: "images/data/Data Professional Survey Breakdown_page-0001.jpg" },
  { title: "LuxurStay hotel operations", cat: "Dashboard", group: "dashboards",
    tools: "Power BI, operations analysis, KPI tracking", img: "images/data/Hotel_Operations.jpg" },
  { title: "Walmart sales dashboard", cat: "Dashboard", group: "dashboards",
    tools: "Power BI, sales analytics, trend analysis", img: "images/business/WalmartDashboard.jpg" },
];

const GROUPS = [
  { id: "all", label: "All" },
  { id: "voice", label: "AI voice" },
  { id: "agents", label: "AI agents" },
  { id: "automation", label: "Automation" },
  { id: "dashboards", label: "Dashboards" },
  { id: "web", label: "Web and landing pages" },
  { id: "data", label: "Data analytics" },
];

const CERTS = [
  { title: "Software Development with Claude Code", issuer: "DataCamp" },
  { title: "Certified GoHighLevel Manager", issuer: "Tara AI Community+" },
  { title: "End to End System Design with n8n", issuer: "Technical Virtual Assistants PH" },
  { title: "No Code Automation with Zapier", issuer: "Technical Virtual Assistants PH" },
  { title: "Microsoft Fabric Analytics Engineer Associate", issuer: "Microsoft",
    link: "https://learn.microsoft.com/en-us/users/rafaelbashan-7980/credentials/certification/fabric-analytics-engineer-associate?tab=credentials-tab",
    img: "images/cert/microsoft.jpg" },
  { title: "Associate Data Engineer", issuer: "DataCamp", link: "https://www.datacamp.com/certificate/DEA0010473715509",
    img: "images/cert/Associate Data Engineer_page-0001.jpg" },
  { title: "Associate Data Analyst", issuer: "DataCamp", link: "https://www.datacamp.com/certificate/DAA0015033218170",
    img: "images/cert/Associate Data Analyst Certification_page-0001.jpg" },
  { title: "SQL Associate", issuer: "DataCamp", link: "https://www.datacamp.com/certificate/SQA0012364065695",
    img: "images/cert/Associate SQL.jpg" },
  { title: "Data Literacy", issuer: "DataCamp", link: "https://www.datacamp.com/skill-verification/DL0036722551507",
    img: "images/cert/Data Literacy.jpg" },
  { title: "Data Literacy Professional", issuer: "DataCamp",
    link: "https://www.datacamp.com/statement-of-accomplishment/track/d09880a26414257cc1570cdc84a00a913a4429b5?raw=1",
    img: "images/cert/Data Literacy Professional SOA.jpg" },
  { title: "Associate Data Engineer in SQL", issuer: "DataCamp",
    link: "https://www.datacamp.com/statement-of-accomplishment/track/2efcb775d1e66767f8f0faeb8bdf65953c887db0?raw=1",
    img: "images/cert/Associate Data Engineer in SQL SOA_page-0001.jpg" },
  { title: "Data Engineer in Python", issuer: "DataCamp",
    link: "https://www.datacamp.com/statement-of-accomplishment/track/15f545db0a98e19fa5c4fc7c0236c0b4bcc74080?raw=1",
    img: "images/cert/Data Engineer in Python SOA.jpg" },
  { title: "Marketing Analytics", issuer: "DataCamp",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/1c29fe18df4dec9d39a275ef5e8b3d372adb1ce1?raw=1",
    img: "images/cert/Marketing Analytics SOA.jpg" },
  { title: "SQL for Database Administrators", issuer: "DataCamp",
    link: "https://www.datacamp.com/statement-of-accomplishment/track/656f7ff621358dda7867efcf6ea3303f0ac89c2e?raw=1",
    img: "images/cert/SQL for Database Administrators SOA (16 Hours)_page-0001.jpg" },
];

const FIRST_BATCH = 9;

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const src = (p) => (/^https?:/.test(p) ? p : encodeURI(p));

function linkLabel(url) {
  if (url.includes("github.com")) return "View on GitHub";
  if (url.includes("github.io")) return "Open the live page";
  return "Read the case study";
}

function renderTools() {
  document.getElementById("tool-list").innerHTML = TOOLS.map((t) =>
    `<li><img src="${src(t.icon)}" alt="" width="20" height="20" loading="lazy">${esc(t.name)}</li>`).join("");
}

function projectCard(p) {
  const thumb = p.img
    ? `<div class="project-thumb"><img src="${src(p.img)}" alt="" loading="lazy"></div>`
    : `<div class="project-thumb is-empty" aria-hidden="true">${esc(p.cat)}</div>`;
  const link = p.link
    ? `<a class="project-link" href="${esc(p.link)}" target="_blank" rel="noopener">${linkLabel(p.link)}<span class="visually-hidden">: ${esc(p.title)}</span></a>`
    : "";
  return `<li class="project" data-group="${p.group}">${thumb}<div class="project-body">
    <span class="project-cat">${esc(p.cat)}</span><h3>${esc(p.title)}</h3>
    <p class="project-tools">${esc(p.tools)}</p>${link}</div></li>`;
}

function renderProjects() {
  const list = document.getElementById("projects");
  const ordered = [...PROJECTS].sort((a, b) => Boolean(b.img) - Boolean(a.img));
  list.innerHTML = ordered.map(projectCard).join("");

  const filters = document.getElementById("filters");
  filters.innerHTML = GROUPS.map((g) => {
    const n = g.id === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.group === g.id).length;
    return `<button type="button" class="filter" data-group="${g.id}" aria-pressed="${g.id === "all"}">${g.label} (${n})</button>`;
  }).join("");

  const more = document.createElement("button");
  more.type = "button";
  more.className = "btn btn-ghost show-all";
  list.after(more);

  let active = "all";
  let expanded = false;

  function apply() {
    const cards = [...list.children];
    let shown = 0;
    cards.forEach((card) => {
      const match = active === "all" || card.dataset.group === active;
      const visible = match && (active !== "all" || expanded || shown < FIRST_BATCH);
      card.hidden = !visible;
      if (visible) shown += 1;
    });
    const hiddenCount = PROJECTS.length - shown;
    more.hidden = !(active === "all" && hiddenCount > 0);
    more.textContent = `Show all ${PROJECTS.length} projects`;
  }

  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    active = btn.dataset.group;
    filters.querySelectorAll(".filter").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    apply();
  });

  more.addEventListener("click", () => { expanded = true; apply(); });
  apply();
}

function renderCerts() {
  const ordered = [...CERTS].sort((a, b) => Boolean(b.img) - Boolean(a.img));
  document.getElementById("certs").innerHTML = ordered.map((c) => {
    const img = c.img
      ? `<div class="cert-img"><img src="${src(c.img)}" alt="" loading="lazy"></div>`
      : `<div class="cert-img is-empty" aria-hidden="true">${esc(c.issuer)}</div>`;
    const link = c.link ? `<a href="${esc(c.link)}" target="_blank" rel="noopener">View credential<span class="visually-hidden">: ${esc(c.title)}</span></a>` : "";
    return `<li class="cert">${img}<div class="cert-body"><h3>${esc(c.title)}</h3><p class="cert-issuer">${esc(c.issuer)}</p>${link}</div></li>`;
  }).join("");
}

function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }
  });
}

// Calendly opens as a popup when its script has loaded; otherwise the link opens Calendly in a new tab.
function setupCalendly() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest(".js-calendly");
    if (!link || !window.Calendly) return;
    e.preventDefault();
    window.Calendly.initPopupWidget({ url: link.href });
  });
}

renderTools();
renderProjects();
renderCerts();
setupNav();
setupCalendly();
