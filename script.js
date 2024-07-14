const mobileNavbarBtn = document.querySelector('.mobile-navbar-btn');
        const navbar = document.querySelector('.navbar');
        const menuIcon = document.querySelector('.menu-icon');
        const closeIcon = document.querySelector('.close-icon');

        mobileNavbarBtn.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
