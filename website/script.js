var typed = new Typed(".text", {
    strings: ["Programming" , "AI and ML Engineer" , "Web Development"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.nav-bar');
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});



