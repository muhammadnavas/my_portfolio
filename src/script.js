// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (mobileMenu) mobileMenu.classList.add('hidden');
        }
    });
});

// Project Data — ordered as per resume
const projects = [
    {
        title: "Notezy — Student Resource Hub",
        description: "A student-driven MERN stack VTU notes-sharing platform serving 5,000+ active users. Features an integrated AI chatbot, automated SGPA/CGPA calculator, and REST APIs for uploading and managing 1,000+ academic resources via Google Drive API for scalable cloud storage.",
        technologies: ["MERN Stack", "Google Drive API", "Gemini LLM", "REST API", "JWT", "AI Chatbot"],
        icon: "fas fa-graduation-cap",
        color: "blue",
        github: "https://github.com/muhammadnavas/Notezy",
        website: "https://notezy-eight.vercel.app"
    },
    {
        title: "AI Technical Interviewer",
        description: "A microservices-based AI-powered technical hiring platform. Features real-time AI interviews with voice interaction, an AI interview scheduler (Twilio), a collaborative AI CodeEditor with cloud code execution, and an AI vs. Human Code Detection system using ensemble ML models.",
        technologies: ["MERN", "Python", "LLMs", "REST API", "ML", "Microservices", "Twilio"],
        icon: "fas fa-user-tie",
        color: "red",
        github: "https://github.com/muhammadnavas/AI-Technical-Interviewer",
        website: ""
    },
    {
        title: "AI Browser Automation Agent",
        description: "An LLM-powered agent for autonomous multi-step browser tasks with human-in-the-loop controls, input validation, and information protection. Supports multi-tab automation and Chrome session management via Playwright, with self-healing retries and action verification.",
        technologies: ["Python", "FastAPI", "Playwright", "LLMs", "WebSockets", "Chrome Extension", "Redis"],
        icon: "fas fa-robot",
        color: "indigo",
        github: "",
        website: "https://ai-browser-automation-frontend.vercel.app/"
    },
    {
        title: "NudiLLM — Mini Kannada Language Model",
        description: "A ~14M-parameter GPT-style Kannada language model trained from scratch on Kannada Wikipedia using a custom Transformer architecture and SentencePiece tokenizer. Implements BPE tokenization, FP16 training, and autoregressive text generation, optimized for limited GPU memory.",
        technologies: ["PyTorch", "Transformers", "SentencePiece", "Hugging Face Datasets", "CUDA"],
        icon: "fas fa-language",
        color: "purple",
        github: "https://github.com/muhammadnavas/nudi-llm",
        website: "https://nudi-llm.onrender.com/"
    },
    {
        title: "Fake News Predictor",
        description: "A multi-source fake news detection system that analyzes news articles using ML and NLP. Integrates multiple fact-checking and news APIs to verify content authenticity, with a real-time validation pipeline providing authenticity scores and insights via an interactive Streamlit UI.",
        technologies: ["Python", "Streamlit", "Machine Learning", "NLP", "Gemini LLM", "APIs"],
        icon: "fas fa-search",
        color: "yellow",
        github: "https://github.com/muhammadnavas/Fake_News_Predictor",
        website: "https://fakenews-predictor.streamlit.app/"
    },
    {
        title: "LinkUp — Coding Challenge & Talent Discovery",
        description: "A full-stack platform bridging talented students and innovative companies through coding challenges. Features role-based dashboards for students and recruiters, challenge creation, code submission workflows, and a talent discovery pipeline for companies.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
        icon: "fas fa-handshake",
        color: "green",
        github: "https://github.com/muhammadnavas/LinkUp",
        website: "https://link-up-rose-xi.vercel.app/"
    }
];

// Render Projects
function renderProjects() {
    const container = document.querySelector('#projects .grid');
    projects.forEach(project => container.appendChild(createProjectCard(project)));
}

// Create Project Card
function createProjectCard(project) {
    const colorClasses = {
        blue:   'text-teal-700 bg-teal-50 border border-teal-200/60',
        green:  'text-emerald-700 bg-emerald-50 border border-emerald-200/60',
        purple: 'text-emerald-800 bg-emerald-50 border border-emerald-200/60',
        red:    'text-teal-700 bg-teal-50 border border-teal-200/60',
        indigo: 'text-emerald-700 bg-emerald-50 border border-emerald-200/60',
        yellow: 'text-teal-700 bg-teal-50 border border-teal-200/60'
    };

    const card = document.createElement('div');
    card.className = 'bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-emerald-100/70 card-hover flex flex-col hover:border-emerald-300/60 transition-all';
    card.innerHTML = `
        <div class="flex items-center mb-3 sm:mb-4">
            <div class="w-10 h-10 sm:w-12 sm:h-12 ${colorClasses[project.color]} rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-xs">
                <i class="${project.icon} text-lg sm:text-xl"></i>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 leading-snug">${project.title}</h3>
        </div>
        <p class="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base flex-grow">${project.description}</p>
        <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
            ${project.technologies.map(tech =>
                `<span class="bg-slate-50 text-slate-700 border border-slate-200/60 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md text-xs sm:text-sm font-medium">${tech}</span>`
            ).join('')}
        </div>
        <div class="flex gap-2.5 mt-auto pt-2 flex-wrap">
            ${project.github ? `
                <a href="${project.github}" target="_blank"
                   class="inline-flex items-center px-3 py-1.5 bg-emerald-50/80 text-emerald-800 text-xs sm:text-sm rounded-lg hover:bg-emerald-600 hover:text-white transition-all duration-200 font-medium border border-emerald-200/70">
                   <i class="fab fa-github mr-1.5"></i> GitHub
                </a>` : ''}
            ${project.website ? `
                <a href="${project.website}" target="_blank"
                   class="inline-flex items-center px-3.5 py-1.5 bg-emerald-600 text-white text-xs sm:text-sm rounded-lg hover:bg-emerald-700 transition-all duration-200 font-medium shadow-sm shadow-emerald-700/20">
                   <i class="fas fa-external-link-alt mr-1.5"></i> Website
                </a>` : ''}
        </div>
    `;
    return card;
}

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('shadow-lg', window.scrollY > 50);
});

// Scroll-in animation for all cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

function initAnimations() {
    document.querySelectorAll('.card-hover').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Back to Top Button
function addBackToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    btn.className = 'fixed bottom-8 right-8 bg-gradient-to-r from-emerald-700 to-teal-500 text-white w-12 h-12 rounded-full shadow-lg shadow-emerald-950/20 opacity-0 pointer-events-none transition-all duration-300 hover:scale-110';
    btn.id = 'back-to-top';
    document.body.appendChild(btn);

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    window.addEventListener('scroll', () => {
        btn.style.opacity = window.scrollY > 500 ? '1' : '0';
        btn.style.pointerEvents = window.scrollY > 500 ? 'auto' : 'none';
    });
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initAnimations();
});

addBackToTop();
