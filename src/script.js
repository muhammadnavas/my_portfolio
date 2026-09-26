// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Theme switcher (background alternatives)
const APPLY_THEME_KEY = 'siteTheme';

function applyTheme(themeName) {
    if (!themeName) return;
    document.body.classList.remove('theme-pink','theme-blue','theme-dark','theme-soft');
    document.body.classList.add(themeName);
}

function saveTheme(themeName) {
    try { localStorage.setItem(APPLY_THEME_KEY, themeName); } catch(e) { /* ignore */ }
}

// clickable buttons (desktop + mobile)
function initThemeButtons() {
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');
            applyTheme(theme);
            saveTheme(theme);
        });
    });

    document.querySelectorAll('.mobile-theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');
            applyTheme(theme);
            saveTheme(theme);
            // hide mobile menu after selecting
            if (mobileMenu) mobileMenu.classList.add('hidden');
        });
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
        }
    });
});

// Project Data
const projects = [
    {
        title: "Notezy.online - Student Resource Hub",
        description: "Designed and developed a full-stack MERN application serving 5,000+ active users. Built REST APIs for uploading, retrieving, and managing 1,000+ academic resources, using Google Drive API for scalable cloud storage and efficient file management.",
        technologies: ["MERN Stack", "Google Drive", "Gemini LLM", "REST API"],
        icon: "fas fa-graduation-cap",
        color: "blue",
        github: "",
        website: "https://notezy.online"
    },
    {
        title: "AI Technical Interviewer",
        description: "Developed a microservices-based technical hiring platform using the MERN Stack, with ML-based code analysis, AI-powered coding tests, an interview scheduler, and an AI interviewer for technical screening.",
        technologies: ["MERN", "Python", "LLMs", "REST API"],
        icon: "fas fa-user-tie",
        color: "red",
        github: "",
        website: ""
    },
    {
        title: "Fake News Predictor",
        description: "Developed a fake news detection system using machine learning for news classification. Integrated multiple fact-checking and news APIs to verify content authenticity and designed a real-time news validation pipeline providing authenticity scores and insights.",
        technologies: ["Python", "Streamlit", "APIs", "Machine Learning", "Gemini LLM", "NLP"],
        icon: "fas fa-search",
        color: "yellow",
        github: "https://github.com/muhammadnavas/Fake_News_Predictor.git",
        website: "https://fakenews-predictor.streamlit.app/"
    },
    {
        title: "LinkUp - Coding Challenge & Talent Discovery Platform",
        description: "Built a full-stack platform connecting students and companies through coding challenges. Developed role-based dashboards for students and recruiters and implemented challenge creation, code submission, and solution review workflows.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
        icon: "fas fa-code",
        color: "green",
        github: "",
        website: ""
    }
];

// Render Projects
function renderProjects() {
    const projectsContainer = document.querySelector('#projects .grid');
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsContainer.appendChild(projectCard);
    });
}

// Create Project Card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'bg-white p-6 rounded-lg shadow-md card-hover';
    
    const colorClasses = {
        blue: 'text-blue-600 bg-blue-100',
        green: 'text-green-600 bg-green-100',
        purple: 'text-purple-600 bg-purple-100',
        red: 'text-red-600 bg-red-100',
        indigo: 'text-indigo-600 bg-indigo-100',
        yellow: 'text-yellow-600 bg-yellow-100'
    };
    
    card.innerHTML = `
    <div class="flex items-center mb-4">
        <div class="w-12 h-12 ${colorClasses[project.color]} rounded-lg flex items-center justify-center mr-4">
            <i class="${project.icon} text-xl"></i>
        </div>
        <h3 class="text-xl font-semibold text-gray-800">${project.title}</h3>
    </div>
    <p class="text-gray-600 mb-4 leading-relaxed">${project.description}</p>
    <div class="flex flex-wrap gap-2 mb-4">
        ${project.technologies.map(tech => 
            `<span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">${tech}</span>`
        ).join('')}
    </div>
    <div class="flex gap-2 mt-3 flex-wrap">
    ${project.github ? `
        <a href="${project.github}" target="_blank"
           class="inline-flex items-center px-2.5 py-1 bg-pink-100 text-[#831843] text-sm rounded-full hover:bg-pink-200 transition-colors duration-150">
           <i class="fab fa-github mr-1"></i> GitHub
        </a>` : ''}
    ${project.website ? `
        <a href="${project.website}" target="_blank"
           class="inline-flex items-center px-2.5 py-1 bg-pink-100 text-[#831843] text-sm rounded-full hover:bg-pink-200 transition-colors duration-150">
           <i class="fas fa-globe mr-1"></i> Website
        </a>` : ''}
</div>

`;

    
    return card;
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize animations on page load
function initAnimations() {
    const animatedElements = document.querySelectorAll('.card-hover');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Typing Effect for Hero Section
function typeEffect() {
    const roles = [
        "AI & ML Student",
        "Full-Stack Developer", 
        "Problem Solver",
        "Innovation Enthusiast"
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    const roleElement = document.querySelector('#home p');
    
    if (!roleElement) return;
    
    function type() {
        if (charIndex < roles[roleIndex].length) {
            roleElement.textContent = roles[roleIndex].substring(0, charIndex + 1);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 500);
        }
    }
    
    // Start typing effect
    setTimeout(type, 1000);
}

// Skill Progress Animation
function animateSkillBars() {
    const skillCards = document.querySelectorAll('#skills .card-hover');
    
    skillCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'scale(1.05)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        }, index * 100);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // load saved theme first (so background doesn't flash)
    const saved = (function(){ try { return localStorage.getItem(APPLY_THEME_KEY); } catch(e){return null;} })();
    if (saved) applyTheme(saved); // apply stored theme on load
    // initialize theme buttons
    initThemeButtons();

    renderProjects();
    initAnimations();
    typeEffect();
    
    // Animate skills when scrolled into view
    const skillsSection = document.querySelector('#skills');
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    });
    
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
});

// Contact Form Handler (if you add a form later)
function handleContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle form submission here
            alert('Thank you for your message! I\'ll get back to you soon.');
        });
    }
}

// Back to Top Button
function addBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTop.className = 'fixed bottom-8 right-8 bg-gradient-to-r from-[#831843] to-[#f472b6] text-white w-12 h-12 rounded-full shadow-lg opacity-0 pointer-events-none transition-all duration-300 hover:scale-110';
    backToTop.id = 'back-to-top';
    
    document.body.appendChild(backToTop);
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.pointerEvents = 'auto';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.pointerEvents = 'none';
        }
    });
}

// Initialize back to top button
addBackToTop();