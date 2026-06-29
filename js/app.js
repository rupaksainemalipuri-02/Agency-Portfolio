/**
 * THE BORING CLUB - MAIN APPLICATION SCRIPT
 * Features: Dynamic rendering, theme toggle, mobile menu, scroll reveal animations,
 *           IntersectionObservers, and custom client-side form validation.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modular components
  initThemeToggle();
  initMobileMenu();
  renderTeam();
  renderProjects();
  initScrollObservers();
  initContactForm();
});

/* ==========================================================================
   1. DATA STORAGE (TEAM & PROJECTS)
   ========================================================================== */

/**
 * Array of 5 team members representing the agency students.
 */
const teamMembers = [
  {
    name: "Abhishek Jain",
    role: "Frontend Developer & UI Lead",
    skills: ["HTML5", "CSS3", "JavaScript", "UI Design"],
    github: "https://github.com/abhishek711p-pixel",
    image: "assets/avatars/avatar1.png"
  },
  {
    name: "Radhika",
    role: "UI/UX Designer",
    skills: ["User Research", "Wireframes", "Figma", "CSS Layouts"],
    github: "https://github.com/parbhakarradhika301-cmd",
    image: "assets/avatars/avatar2.png"
  },
  {
    name: "Rupak Sai",
    role: "Fullstack Developer",
    skills: ["JavaScript", "Node.js", "DOM Manipulation", "Git"],
    github: "https://github.com/rupaksainemalipuri-02",
    image: "assets/avatars/avatar3.png"
  },
  {
    name: "Shahil",
    role: "Backend Architect",
    skills: ["Data Architecture", "APIs", "Unit Testing", "Security"],
    github: "https://github.com/shahilhossain230406-ai",
    image: "assets/avatars/avatar1.png"
  },
  {
    name: "Anuj",
    role: "DevOps & Scrum Master",
    skills: ["CI/CD Pipelines", "Git Workflow", "Web Performance", "Agile"],
    github: "https://github.com/Anuj-uniyal",
    image: "assets/avatars/avatar5.png"
  }
];

/**
 * Array of 6 projects showcasing the agency's abilities.
 */
const projects = [
  {
    title: "Github Developer Explorer",
    description: "Explore GitHub profiles and repositories with this powerful developer tool.",
    technologies: ["HTML5", "CSS3", "Vanilla JS"],
    github: "https://github-dev-explorer-alpha.vercel.app/",
    image: "assets/project-images/project1.png"
  },
  {
    title: "Pocket Track",
    description: "An expense tracker application to manage and monitor your finances.",
    technologies: ["CSS3 Flex", "DOM APIs", "Vanilla JS"],
    github: "https://pocket-track-ashen.vercel.app/",
    image: "assets/project-images/project2.png"
  },
  {
    title: "Quiz Application",
    description: "An interactive quiz application to test your knowledge.",
    technologies: ["HTML5 Canvas", "SVG Icons", "Vanilla JS"],
    github: "https://quiz-applicatiom-6b96v7i4q-radhikas-projects-4c6bee5c.vercel.app/",
    image: "assets/project-images/project3.png"
  }
];

/* ==========================================================================
   2. DYNAMIC DOM RENDERING
   ========================================================================== */

/**
 * Generates and injects team member cards into the HTML container.
 */
function renderTeam() {
  const teamGrid = document.getElementById('team-grid');
  if (!teamGrid) return;

  // Clear fallback message
  teamGrid.innerHTML = '';

  teamMembers.forEach(member => {
    const card = document.createElement('div');
    card.className = 'team-card scroll-reveal';

    // Generate skills markup
    const skillsHTML = member.skills
      .map(skill => `<span class="skill-tag">${skill}</span>`)
      .join('');

    card.innerHTML = `
      <div class="avatar-wrapper">
        <img src="${member.image}" alt="${member.name}" class="member-avatar" loading="lazy">
      </div>
      <div class="member-info">
        <h3 class="member-name">${member.name}</h3>
        <p class="member-role">${member.role}</p>
        <div class="member-skills">
          ${skillsHTML}
        </div>
        <div class="member-socials">
          <a href="${member.github}" target="_blank" rel="noopener noreferrer" class="github-btn" aria-label="${member.name}'s GitHub Profile">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .3C5.4.3 0 5.7 0 12.4c0 5.3 3.5 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C18 3 19 3.2 19 3.2c.6 1.7.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"></path>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    `;

    teamGrid.appendChild(card);
  });
}

/**
 * Generates and injects project cards into the HTML container.
 */
function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;

  // Clear fallback message
  projectsGrid.innerHTML = '';

  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card scroll-reveal';

    // Generate technologies markup
    const techHTML = project.technologies
      .map(tech => `<span class="project-tech-tag">${tech}</span>`)
      .join('');

    card.innerHTML = `
      <div class="project-image-wrapper">
        <img src="${project.image}" alt="${project.title} Interface" class="project-image" loading="lazy">
      </div>
      <div class="project-info">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-techs">
          ${techHTML}
        </div>
        <div class="project-footer">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="github-btn" aria-label="View code for ${project.title} on GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .3C5.4.3 0 5.7 0 12.4c0 5.3 3.5 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C18 3 19 3.2 19 3.2c.6 1.7.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"></path>
            </svg>
            Link
          </a>
        </div>
      </div>
    `;

    projectsGrid.appendChild(card);
  });
}

/* ==========================================================================
   3. THEME TOGGLE (LIGHT / DARK)
   ========================================================================== */

/**
 * Handles toggling color-schemes and saving preferences to localStorage.
 */
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  // The initial state is loaded by the inline script in <head> to prevent FOUC.
  // We just need to add the click listener to toggle it.
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';

    // Update HTML class
    document.documentElement.className = newTheme;

    // Update meta tag
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.content = newTheme;
    }

    // Save to localStorage
    localStorage.setItem('theme', newTheme);
  });

  // Listen for changes in system preference, only apply if no user override exists
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      const nextTheme = e.matches ? 'dark' : 'light';
      document.documentElement.className = nextTheme;
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) meta.content = nextTheme;
    }
  });
}

/* ==========================================================================
   4. MOBILE HAMBURGER MENU
   ========================================================================== */

/**
 * Toggles mobile menu overlay navigation.
 */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuToggle || !mobileMenu) return;

  const toggleMenu = () => {
    const isOpen = menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    mobileMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    // Lock body scrolling when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  menuToggle.addEventListener('click', toggleMenu);

  // Close menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menuToggle.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
}

/* ==========================================================================
   5. INTERSECTION OBSERVERS (SCROLL REVEALS, SKILLS & COUNTERS)
   ========================================================================== */

/**
 * Configures scroll reveal, statistics animation, and active navigation indicators.
 */
function initScrollObservers() {
  // A. Generic Scroll Reveal (adds class .revealed)
  const revealElements = document.querySelectorAll('.scroll-reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Stop observing once animated
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before entering viewport
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // B. Skill Progress Bars Animation
  const skillBars = document.querySelectorAll('.progress-bar-fill');
  const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fillBar = entry.target;
        const progress = fillBar.getAttribute('data-progress');
        fillBar.style.width = progress;
        observer.unobserve(fillBar);
      }
    });
  }, {
    threshold: 0.1
  });

  skillBars.forEach(bar => skillObserver.observe(bar));

  // C. Animated Statistics Counters
  const statNumbers = document.querySelectorAll('.stat-number');
  const statsSection = document.querySelector('.stats-section');

  if (statsSection && statNumbers.length > 0) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters(statNumbers);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    statsObserver.observe(statsSection);
  }

  // D. Active Navigation Highlighting
  const sections = document.querySelectorAll('section');
  const desktopLinks = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');
        desktopLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-40% 0px -40% 0px' // Activates when the section fills the viewport middle
  });

  sections.forEach(sec => sectionObserver.observe(sec));
}

/**
 * Animates counting numbers from 0 to target values.
 */
function animateCounters(elements) {
  elements.forEach(element => {
    const target = parseInt(element.getAttribute('data-target'), 10);
    const duration = 2000; // 2 seconds total animation
    const frames = 60;
    const stepTime = duration / frames;
    let frame = 0;

    const count = setInterval(() => {
      frame++;
      // Cubic ease-out calculation for counting speed curve
      const progress = frame / frames;
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeOutProgress * target);

      element.textContent = currentValue;

      if (frame >= frames) {
        clearInterval(count);
        // Ensure final number is exact and appends '+' for non-team numbers
        element.textContent = target + (target === 5 ? '' : '+');
      }
    }, stepTime);
  });
}

/* ==========================================================================
   6. CONTACT FORM VALIDATION
   ========================================================================== */

/**
 * Client-side form validation and success modal interactions.
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const successCard = document.getElementById('form-success-card');
  const closeBtn = document.getElementById('success-close-btn');

  if (!form || !successCard) return;

  // Select fields
  const fields = {
    name: {
      input: document.getElementById('form-name'),
      error: document.getElementById('error-name')
    },
    email: {
      input: document.getElementById('form-email'),
      error: document.getElementById('error-email')
    },
    subject: {
      input: document.getElementById('form-subject'),
      error: document.getElementById('error-subject')
    },
    message: {
      input: document.getElementById('form-message'),
      error: document.getElementById('error-message')
    }
  };

  // Validation Rules helper
  const validators = {
    name: (val) => {
      if (!val.trim()) return 'Name cannot be empty.';
      if (val.trim().length < 2) return 'Name must be at least 2 characters.';
      // Letters, spaces, dots, and hyphens only
      const nameRegex = /^[\p{L}\.\- ]+$/u;
      if (!nameRegex.test(val)) return 'Name contains invalid characters.';
      return '';
    },
    email: (val) => {
      if (!val.trim()) return 'Email cannot be empty.';
      // Strict standard email verification pattern
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(val)) return 'Please enter a valid email address.';
      return '';
    },
    subject: (val) => {
      if (!val.trim()) return 'Subject cannot be empty.';
      if (val.trim().length < 4) return 'Subject must be at least 4 characters.';
      return '';
    },
    message: (val) => {
      if (!val.trim()) return 'Message cannot be empty.';
      if (val.trim().length < 10) return 'Message must be at least 10 characters.';
      return '';
    }
  };

  // Real-time validation on input change/blur
  Object.keys(fields).forEach(key => {
    const field = fields[key];
    const validate = () => {
      const errorMsg = validators[key](field.input.value);
      if (errorMsg) {
        field.input.classList.add('invalid');
        field.input.setAttribute('aria-invalid', 'true');
        field.error.textContent = errorMsg;
        return false;
      } else {
        field.input.classList.remove('invalid');
        field.input.removeAttribute('aria-invalid');
        field.error.textContent = '';
        return true;
      }
    };

    // Verify when typing or leaving input
    field.input.addEventListener('input', validate);
    field.input.addEventListener('blur', validate);
  });

  // Form Submit Handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Run all validations
    let isValid = true;
    Object.keys(fields).forEach(key => {
      const field = fields[key];
      const errorMsg = validators[key](field.input.value);
      if (errorMsg) {
        field.input.classList.add('invalid');
        field.input.setAttribute('aria-invalid', 'true');
        field.error.textContent = errorMsg;
        isValid = false;
      }
    });

    if (isValid) {
      // Hide the form, display the success overlay
      form.classList.add('hidden');
      successCard.classList.add('active');
      successCard.setAttribute('aria-hidden', 'false');

      // Clear all fields
      form.reset();
      Object.keys(fields).forEach(key => {
        fields[key].input.classList.remove('invalid');
        fields[key].input.removeAttribute('aria-invalid');
        fields[key].error.textContent = '';
      });
    }
  });

  // Close Success Card Handler
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      successCard.classList.remove('active');
      successCard.setAttribute('aria-hidden', 'true');
      form.classList.remove('hidden');
    });
  }
}
