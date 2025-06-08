// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksArray = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinksArray.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-text');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Form Submission
const contactForm = document.querySelector('.contact-form');



// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Typing Animation
document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('#typed', {
        strings: ['Web Developer', 'Programmer', 'Machine Learning Engineer'],
        typeSpeed: 60,
        backSpeed: 50,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
});

// Navbar scroll behavior
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}); 

// Skill Cards
const skillsData = {
  "programming": [ "C","Java", "Python",  "JavaScript", "HTML", "CSS", "React","MySQL", "Bootstrap" ],
  "ds-ml": ["AI", "Cursor AI","Colab" , "ChatGPT" ,"Cursor AI", "TensorFlow", "Streamlit","Keras"],
  "tools": ["Jupyter Notebook", "Visual Studio Code",  "Git", "GitHub","Vercel"]
};

const buttons = document.querySelectorAll('.skill-btns');
const skillContainer = document.getElementById('skill-container');

function showSkills(category) {
  skillContainer.innerHTML = '';

  skillsData[category].forEach(skill => {
    const div = document.createElement('div');
    div.classList.add('skill-icon', 'hover-btn')
    div.innerHTML = `
      <img src="images/${skill.toLowerCase()}.png" alt="${skill}">
      <span>${skill.toUpperCase()}</span>
    `;
    skillContainer.appendChild(div);
  });

  buttons.forEach(btn => btn.classList.remove('active-skill'));
  document.querySelector(`button[data-category="${category}"]`).classList.add('active-skill' );

}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    showSkills(button.getAttribute('data-category'));
  });
});


showSkills('programming');