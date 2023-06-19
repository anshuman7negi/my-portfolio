document.querySelector('.hamburger').addEventListener('click',()=>{
    document.querySelector('.mobile-menu').classList.toggle('visible')
    const sections = document.querySelectorAll('section, .logo, .hamburger');
    for (let i = 0; i < sections.length; i += 1) {
        console.log(sections[i]);
        sections[i].classList.toggle('blurred');
    }
});

const closeBtn = document.querySelector('.cancel-btn');
closeBtn.addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.toggle('visible');
    const sections = document.querySelectorAll('section, .logo, .hamburger');
    for (let i = 0; i < sections.length; i += 1) {
        sections[i].classList.toggle('blurred');
 }
});

const linkBtn = document.querySelectorAll('.mobile-menu ul a');
for (let i = 0; i < linkBtn.length; i += 1) {
  linkBtn[i].addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.toggle('visible');
    const sections = document.querySelectorAll('section, .logo, .hamburger');
    for (let i = 0; i < sections.length; i += 1) {
        sections[i].classList.toggle('blurred');
 }
  });
}