
    // Get the navigation links and the checkbox element
    const navLinks = document.querySelectorAll('nav ul li a');
    const checkBox = document.getElementById('check');

    // Function to close the sliding navigation menu
    function closeNav() {
        checkBox.checked = false;
    }

    // Attach a click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', closeNav);
    });

