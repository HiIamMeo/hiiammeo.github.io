function navBar() {
    const navSiteButton = document.querySelector('.site-header .btn');
    var barButton = document.querySelector('.nav-bar-func i');
    const navBar = document.querySelector('.nav-bar');
    navSiteButton.addEventListener('click', function () {
        navSiteButton.style.display = 'none';
        navBar.style.display = 'block';
    });
    barButton.addEventListener('click', function () {
        navSiteButton.style.display = 'block';
        navBar.style.display = 'none';
    });
}

navBar();