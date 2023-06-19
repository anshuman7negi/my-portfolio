document.querySelector('.hamburger').addEventListener('click',()=>{
    document.querySelector('.mobile-menu').classList.toggle('visible')
    const sections = document.querySelectorAll('section, .logo, .hamburger');
    for (let i = 0; i < sections.length; i += 1) {
        console.log(sections[i]);
        sections[i].classList.toggle('blurred');
    }
});