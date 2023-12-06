// Functionality for scrolling to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the header

        // Check if the target is the "about" section and if the viewport width is greater than 1250px
        if (targetId === '#about' && window.innerWidth > 1250) {
            return; // Do not proceed with the scrolling
        }

        let position;
        // Calculate the position to scroll to, accounting for the header height
        if(window.innerWidth > 1251){
            position = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        }
        else{
            position = targetElement.getBoundingClientRect().top + window.pageYOffset;
        }

        // Scroll to the target position
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    });
});


