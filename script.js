function rsvpBoxSizing () {
    /*
    Purpose: if active file is the rsvp page, style the form's buttons and boxes to a certain size.
    Author: Sean Poston
    */
    var currentLocation = window.location;
    if (currentLocation['pathname'] === '/rsvp.html') {
        document.getElementById('fname').style.height="75px";
        document.getElementById('fname').style.fontSize="18pt";

        document.getElementById('lname').style.height="75px";
        document.getElementById('lname').style.fontSize="18pt";

        document.getElementById('numattend').style.height="75px";
        document.getElementById('numattend').style.fontSize="18pt";
        document.getElementById('numattend').style.width="292px";

        document.getElementById('submit').style.height="75px";
        document.getElementById('submit').style.width="250px";
        document.getElementById('submit').style.fontSize="18pt";
    }
}


function toggleMenu () {
    /*
    Purpose: insert active class to move showcase over and display hidden menu
    Author: Sean Poston
    */
    const menuToggle = document.querySelector('.toggle');
    const showcase = document.querySelector('.showcase');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
    });
}

rsvpBoxSizing();
toggleMenu();