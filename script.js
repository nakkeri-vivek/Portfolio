
// Typing Animation

var typed = new Typed(".text", {
    strings: ["Programming" , "AI and ML Engineer" , "Web Development"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// Navigation bar Scrolling function
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.nav-bar');
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// Skill Section
 const skillsData = {
  "programming": [ "C","Java", "Python",  "JavaScript", "HTML", "CSS", "React","MySQL", "Bootstrap" ],
  "ds-ml": ["AI", "Colab" , "ChatGPT" , "TensorFlow", "Streamlit","Keras"],
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


// ProjectCards

const projects = {
  1: {
    title: "CropCure - Potato Edition",
    description: "This project utilizes machine learning and computer vision techniques to detect diseases in potato leaves. The goal is to build a system that can help farmers identify early signs of disease and take necessary actions to prevent crop loss. Potato crops are highly vulnerable to various diseases that can impact yield and quality. This project aims to provide a solution by detecting diseases such as late blight, early blight, and other fungal or bacterial infections using images of potato leaves. The system uses a convolutional neural network (CNN) to classify leaf images into healthy or diseased categories.",
    images: ["/project1-1.png","/project2-3.png",],
    "skillsusedin" : ["Python", " OpenCV", " TensorFlow", " Matpoltlib", " Scikit-learn"," Keras"," Streamlit"],
    links: [
      { name: "GitHub", url: "https://github.com/nakkeri-vivek/CropCure-PotatoEdition.git" },
      
    ]
  },
  2: {
    title: "Personal Portfolio",
    description: "The Personal Portfolio website is a clean and responsive platform created to highlight my journey, projects, and interests in technology. It offers a smooth and engaging user experience with dynamic elements like animated text, interactive project cards, and modal popups for detailed project insights. The site is structured into clear sections including an introduction, about me, project showcases, and a contact area with social media integration. Designed with simplicity and functionality in mind, the portfolio serves as a digital space where visitors can learn more about my background and explore the work I’ve done. It’s a personal project aimed at creating a professional online presence and making meaningful connections.",
    images: ["/project2-1.png", "/project2-2.png"],
    "skillsusedin" : ["HTML", " CSS"," JavaScript"," GitHub"," Vercel"],
    links: [
      { name: "GitHub", url: "https://github.com/nakkeri-vivek/P.git" },
      { name: "Live Demo", url: "https://p-taupe-omega.vercel.app/" }
    ]
  },
  3: {
    title: "Project Three",
    description: "Stock price predictor using ML algorithms in Streamlit.",
    images: ["/image2.jpg"],
    links: [
      { name: "GitHub", url: "https://github.com/user/project3" },
      { name: "Report", url: "#" }
    ]
  }
};

const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const modalImages = document.getElementById('modal-images');
const modalLinks = document.getElementById('modal-links');
const closeModal = document.querySelector('.close-modal');
const skillsusedIn = document.getElementById('skills-usedin');

// Open modal
document.querySelectorAll('.view-more-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    const id = card.dataset.id;
    const project = projects[id];

    modalTitle.textContent = project.title;
    modalDesc.textContent = project.description;
    skillsusedIn.textContent = project.skillsusedin;
    
    modalTitle.style.margin = "15px";
    modalTitle.style.textDecoration = "underline";
    modalTitle.style.color = "#222222"

    modalImages.innerHTML = '';
    project.images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      modalImages.appendChild(img);
    });

    modalLinks.innerHTML = '';
    project.links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.url;
      a.target = "_blank";
      a.textContent = link.name;
      modalLinks.appendChild(a);
    });
    modalLinks.style.marginBottom = "0";

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    
  });
});

// Close modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  document.documentElement.style.overflow = '';
});
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  document.documentElement.style.overflow = '';
});
