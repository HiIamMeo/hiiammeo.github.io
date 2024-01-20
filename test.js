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

function scrollTo(){
    const about = document.querySelector('nav-about');
    const skill = document.querySelector('nav-skill');
    const exp = document.querySelector('nav-exp');
    const edu = document.querySelector('nav-edu');
}

navBar();