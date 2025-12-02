const translations = {
    es: {
        title: "Auxiliar Informático",
        contactBtn: "Contáctame",
        aboutTitle: "Sobre Mí",
        ageLabel: "Edad",
        ageValue: "17 años",
        locationLabel: "Ubicación",
        locationValue: "Barcelona, España",
        languagesLabel: "Idiomas",
        languagesValue: "Castellano*, Catalán, Inglés",
        aboutText: "Técnico en formación en el ámbito de sistemas microinformáticos y redes, con experiencia práctica en mantenimiento de equipos y gestión básica de redes y servicios. Me parece que destaco por mi capacidad y por mi interés constante en aprender y aplicar nuevas tecnologías. He participado en diversos proyectos reales, desde configuración de servidores y herramientas online hasta pequeñas automatizaciones, lo que me ha permitido desarrollar un enfoque práctico y orientado a soluciones.",
        experienceTitle: "Experiencia",
        exp1Date: "2025 - actualmente",
        exp1Title: "Becario informático",
        exp1Desc: "Prácticas duales de 515h",
        exp2Date: "2023 - 2025",
        exp2Title: "Informático personal",
        exp2Desc: "Educación a gente mayor e ayuda con tareas informáticas",
        educationTitle: "Formación",
        edu1Title: "Sistemas MicroInformáticos y Redes",
        edu1Year: "2024 - Actualmente",
        edu2Title: "Educación Secundaria Obligatoria",
        skillsTitle: "Habilidades",
        skill1: "Soporte informático",
        skill2: "Administración de sistemas",
        skill3: "Gestión de software y herramientas",
        skill4: "Programación",
        skill5: "Soporte a usuarios",
        skill6: "Resolución de problemas",
        projectsTitle: "Proyectos Personales",
        proj1Title: "Servidor de Minecraft",
        proj1Desc: "Configuración y gestión de servidores de Minecraft. Incluyendo plugins, automatizaciones y minijuegos.",
        projectUnavailable: "🚫 No disponible",
        proj2Title: "Sites de Extensiones",
        proj2Desc: "Elaboración de un Google Sites, sobre extensiones de archivos y comandos de Windows/Unix. (Mini-Proyecto del grado)",
        viewProject: "Ver Proyecto",
        contactTitle: "Contacto",
        phoneLabel: "Teléfono",
        rights: "Todos los derechos reservados."
    },
    ca: {
        title: "Auxiliar Informàtic",
        contactBtn: "Contacta'm",
        aboutTitle: "Sobre Mi",
        ageLabel: "Edat",
        ageValue: "17 anys",
        locationLabel: "Ubicació",
        locationValue: "Barcelona, Espanya",
        languagesLabel: "Idiomes",
        languagesValue: "Castellà*, Català, Anglès",
        aboutText: "Tècnic en formació en l'àmbit de sistemes microinformàtics i xarxes, amb experiència pràctica en manteniment d'equips i gestió bàsica de xarxes i serveis. Em sembla que destaco per la meva capacitat i pel meu interès constant a aprendre i aplicar noves tecnologies. He participat en diversos projectes reals, des de configuració de servidors i eines en línia fins a petites automatitzacions, la qual cosa m'ha permès desenvolupar un enfocament pràctic i orientat a solucions.",
        experienceTitle: "Experiència",
        exp1Date: "2025 - actualment",
        exp1Title: "Becari informàtic",
        exp1Desc: "Pràctiques duals de 515h",
        exp2Date: "2023 - 2025",
        exp2Title: "Informàtic personal",
        exp2Desc: "Educació a gent gran i ajuda amb tasques informàtiques",
        educationTitle: "Formació",
        edu1Title: "Sistemes Microinformàtics i Xarxes",
        edu1Year: "2024 - Actualment",
        edu2Title: "Educació Secundària Obligatòria",
        skillsTitle: "Habilitats",
        skill1: "Suport informàtic",
        skill2: "Administració de sistemes",
        skill3: "Gestió de programari i eines",
        skill4: "Programació",
        skill5: "Suport a usuaris",
        skill6: "Resolució de problemes",
        projectsTitle: "Projectes Personals",
        proj1Title: "Servidor de Minecraft",
        proj1Desc: "Configuració i gestió de servidors de Minecraft. Incloent plugins, automatitzacions i minijocs.",
        projectUnavailable: "🚫 No disponible",
        proj2Title: "Sites d'Extensions",
        proj2Desc: "Elaboració d'un Google Sites, sobre extensions d'arxius i comandes de Windows/Unix. (Mini-Projecte del grau)",
        viewProject: "Veure Projecte",
        contactTitle: "Contacte",
        phoneLabel: "Telèfon",
        rights: "Tots els drets reservats."
    },
    en: {
        title: "IT Assistant",
        contactBtn: "Contact Me",
        aboutTitle: "About Me",
        ageLabel: "Age",
        ageValue: "17 years old",
        locationLabel: "Location",
        locationValue: "Barcelona, Spain",
        languagesLabel: "Languages",
        languagesValue: "Spanish*, Catalan, English",
        aboutText: "Technician in training in the field of microinformatics systems and networks, with practical experience in equipment maintenance and basic management of networks and services. It seems to me that I stand out for my ability and my constant interest in learning and applying new technologies. I have participated in several real projects, from server configuration and online tools to small automations, which has allowed me to develop a practical and solution-oriented approach.",
        experienceTitle: "Experience",
        exp1Date: "2025 - present",
        exp1Title: "IT Intern",
        exp1Desc: "Dual internship of 515h",
        exp2Date: "2023 - 2025",
        exp2Title: "Personal IT Support",
        exp2Desc: "Teaching elderly people and helping with IT tasks",
        educationTitle: "Education",
        edu1Title: "Microcomputer Systems and Networks",
        edu1Year: "2024 - Present",
        edu2Title: "Compulsory Secondary Education",
        skillsTitle: "Skills",
        skill1: "IT Support",
        skill2: "Systems Administration",
        skill3: "Software & Tools Management",
        skill4: "Programming",
        skill5: "User Support",
        skill6: "Problem Solving",
        projectsTitle: "Personal Projects",
        proj1Title: "Minecraft Server",
        proj1Desc: "Configuration and management of Minecraft servers. Including plugins, automations, and minigames.",
        projectUnavailable: "🚫 Not available",
        proj2Title: "Extensions Sites",
        proj2Desc: "Creation of a Google Sites about file extensions and Windows/Unix commands. (Degree Mini-Project)",
        viewProject: "View Project",
        contactTitle: "Contact",
        phoneLabel: "Phone",
        rights: "All rights reserved."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Language Switcher Logic
    const langBtns = document.querySelectorAll('.lang-btn');

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button state
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Get selected language
            const lang = btn.getAttribute('data-lang');

            // Update text content
            updateLanguage(lang);
        });
    });

    function updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update html lang attribute
        document.documentElement.lang = lang;
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const sections = document.querySelectorAll('.section');
    const cards = document.querySelectorAll('.card, .about-card, .timeline-item');

    sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });

    // Custom animation class logic for cards when they intersect
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => cardObserver.observe(card));
});
