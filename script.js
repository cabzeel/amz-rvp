const navbar = document.querySelector('nav')
        const menu = document.querySelector('.fa-bars')

        menu.addEventListener('click', ()=>{
            navbar.classList.toggle('hidemenu')
        })

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        // Remove 'active' class from all nav links
        navLinks.forEach((navLink) => navLink.classList.remove('active'));

        // Add 'active' class to the clicked link
        link.classList.add('active');
    });
});

const pagination = document.querySelectorAll('.pagination span');

pagination.forEach((page, index) => {
   page.addEventListener('click', () => {
        // Remove 'active' class from all nav links
        pagination.forEach((page) => page.classList.remove('current'));

        // Add 'active' class to the clicked link
       if (index !== pagination.length - 2) {
        page.classList.add('current')
       };
    });
});

