const projects = [
  {
    title: "Notezy — Student Resource Hub",
    description: "Full-stack MERN application serving 5,000+ active users. Built REST APIs for uploading, retrieving and managing 1,000+ academic resources, with Google Drive for scalable file storage.",
    technologies: ["MERN", "Google Drive", "Gemini LLM", "REST API"],
    icon: "fa-graduation-cap",
    github: "",
    website: "https://notezy.online"
  },
  {
    title: "AI Technical Interviewer",
    description: "Microservices-based technical hiring platform with ML-based code analysis, AI-powered coding tests, interview scheduling and an AI interviewer for technical screening.",
    technologies: ["MERN", "Python", "LLMs", "REST API"],
    icon: "fa-robot",
    github: "",
    website: ""
  },
  {
    title: "Fake News Predictor",
    description: "Machine-learning news classification system with multiple fact-checking and news APIs. Designed a real-time validation pipeline that provides authenticity scores and insights.",
    technologies: ["Python", "Machine Learning", "NLP", "Gemini LLM", "RAG"],
    icon: "fa-newspaper",
    github: "https://github.com/muhammadnavas/Fake_News_Predictor.git",
    website: "https://fakenews-predictor.streamlit.app/"
  },
  {
    title: "LinkUp — Coding Challenge & Talent Discovery",
    description: "Full-stack platform connecting students and companies through coding challenges, with role-based student/recruiter dashboards, challenge creation, code submission and solution review workflows.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    icon: "fa-link",
    github: "",
    website: ""
  }
];

function renderProjects() {
  const container = document.getElementById("project-grid");
  if (!container) return;

  const colors = [
    ["text-pink-700", "bg-pink-100"],
    ["text-indigo-700", "bg-indigo-100"],
    ["text-amber-700", "bg-amber-100"],
    ["text-emerald-700", "bg-emerald-100"]
  ];

  container.innerHTML = projects.map((project, index) => {
    const [textColor, iconBg] = colors[index % colors.length];
    const links = [
      project.github ? `<a href="${project.github}" target="_blank" rel="noreferrer" class="text-sm font-semibold text-pink-700 hover:text-pink-900"><i class="fab fa-github mr-1"></i>GitHub</a>` : "",
      project.website ? `<a href="${project.website}" target="_blank" rel="noreferrer" class="text-sm font-semibold text-pink-700 hover:text-pink-900"><i class="fas fa-external-link-alt mr-1"></i>Live Demo</a>` : ""
    ].join("");

    return `
      <article class="bg-slate-50 rounded-2xl p-7 card-hover border border-slate-100">
        <div class="flex items-start justify-between gap-4">
          <div class="w-12 h-12 rounded-xl ${iconBg} ${textColor} flex items-center justify-center text-xl shrink-0">
            <i class="fas ${project.icon}"></i>
          </div>
          <div class="flex gap-4 pt-2">${links}</div>
        </div>
        <h3 class="text-xl font-bold mt-6">${project.title}</h3>
        <p class="text-slate-600 leading-7 mt-3">${project.description}</p>
        <div class="flex flex-wrap gap-2 mt-5">
          ${project.technologies.map(tech => `<span class="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600">${tech}</span>`).join("")}
        </div>
      </article>
    `;
  }).join("");
}

function initMobileMenu() {
  const button = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (!button || !menu) return;

  button.addEventListener("click", () => menu.classList.toggle("hidden"));
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => menu.classList.add("hidden"));
  });
}

function initTyping() {
  const element = document.getElementById("hero-role");
  if (!element) return;

  const roles = ["AI & ML Developer", "Full-Stack Developer", "Problem Solver"];
  let role = 0;
  let char = 0;
  let deleting = false;

  const tick = () => {
    const current = roles[role];

    if (!deleting) {
      char++;
      element.textContent = current.slice(0, char);
      if (char === current.length) {
        deleting = true;
        setTimeout(tick, 1500);
        return;
      }
    } else {
      char--;
      element.textContent = current.slice(0, char);
      if (char === 0) {
        deleting = false;
        role = (role + 1) % roles.length;
      }
    }

    setTimeout(tick, deleting ? 45 : 75);
  };

  setTimeout(tick, 900);
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initMobileMenu();
  initTyping();
});
