function navBar() {
    const navSiteButton = document.querySelector('.site-header .btn');
    var barButton = document.querySelector('.nav-bar-func i');
    const navBar = document.querySelector('.nav-bar');
    navSiteButton.addEventListener('click', function () {
        navSiteButton.style.display = 'none';
        navBar.style.left = "0px";
    });
    barButton.addEventListener('click', function () {
        navSiteButton.style.display = 'block';
        navBar.style.left = '-200px';
    });
}

function scrollToSection() {
    const home = document.querySelector('.nav-home');
    const about = document.querySelector('.nav-about');
    const skill = document.querySelector('.nav-skill');
    const exp = document.querySelector('.nav-exp');
    const edu = document.querySelector('.nav-edu');

    const scrollToAbout =  document.getElementsByClassName('default-body')[0].offsetTop;
    const scrollToSkill =  document.getElementsByClassName('default-body')[1].offsetTop;
    const scrollToExp =  document.getElementsByClassName('default-body')[2].offsetTop;
    const scrollToEdu =  document.getElementsByClassName('default-body')[3].offsetTop;

    home.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    });
    about.addEventListener('click', function () {
        window.scrollTo({ top: scrollToAbout, behavior: 'smooth'});
    });
    skill.addEventListener('click', function () {
        window.scrollTo({ top: scrollToSkill, behavior: 'smooth'});
    });
    exp.addEventListener('click', function () {
        window.scrollTo({ top: scrollToExp, behavior: 'smooth'});
    });
    edu.addEventListener('click', function () {
        window.scrollTo({ top: scrollToEdu, behavior: 'smooth'});
    });
}

// function skillResize() {
//     // const skill1 = document.getElementsByClassName('.col-md-4')[0];
//     // const skill2 = document.getElementsByClassName('.col-md-4')[1];
//     // const skill3 = document.getElementsByClassName('.col-md-4')[2];

//     const skill = document.getElementById('skill');
//     if (window.innerWidth < 992) {
//         skill.classList.remove('col-md-4');
//     }
// }


navBar();
scrollToSection();
// skillResize();