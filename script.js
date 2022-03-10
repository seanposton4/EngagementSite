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

function displayCountdown () {
    /*
    Purpose: display countdown timer until wedding
    Author: Sean Poston
    */

    //omit certain pages
    //must do exclusive rather than inclusive 
    //due to home page not having anything
    let currentLocation = window.location;

    let nonDisplay =    [
                            '/about.html', 
                            '/rsvp.html', 
                            '/include.php',
                            '/pics.html', 
                            '/registry.html', 
                            '/script.js', 
                            '/thankyou.html', 
                            '/form-error.html',
                            '/groomsmen.html',
                        ];

    if (!nonDisplay.includes(currentLocation['pathname'])) {
        const weddingDate = new Date('Nov 27, 2021 15:00:00').getTime();

        //run the function once to immediately display
        //otherwise, it will wait one second.
        let times = calculateCountdown(weddingDate);
        if (times[4] >= 0) {
            document.getElementById('timer').innerHTML = times[0] + "d " + times[1] + ":" 
                + times[2] + ":" + times[3];
        }
        else {
            document.getElementById('timer').innerHTML = "We're married!";
        }

        //loop the countdown timer every 1 second and update display
        let loop = setInterval(function() {
            let times = calculateCountdown(weddingDate);

            document.getElementById('timer').innerHTML = times[0] + "d " + times[1] + ":" 
                + times[2] + ":" + times[3];

            //if timer is at 0, break loop and display string
            if (times[4] <= 0) {
                document.getElementById('timer').innerHTML = "We're married!";
                clearInterval(loop);
            }
        }, 1000)
    }
}

function calculateCountdown (weddingDate) {
    /*
    Purpose: calculate the time till the wedding and return the data in an array
    Author: Sean Poston
    */
    let now = new Date().getTime();
    
    let timeLeft = weddingDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    //convert to two digits if fewer than two
    if (days < 10) {days = '0' + days;}
    if (hours < 10) {hours = '0' + hours;}
    if (minutes < 10) {minutes = '0' + minutes;}
    if (seconds < 10) {seconds = '0' + seconds;}

    let times = [
        days,
        hours,
        minutes,
        seconds,
        timeLeft
    ];

    return times;
}

toggleMenu();
displayCountdown();