//zoom au survol éléments navigation.

document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
        item.classList.add('scale-110');
        });
        item.addEventListener('mouseout', function() {
        item.classList.remove('scale-110');
        });
    });
});

//bouton "scroll-down"

document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.getElementById('scroll-down');
    

    scrollButton.addEventListener('click', function () {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
});


// formulaire
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();  
        const fullName = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (fullName && email && message) {
            alert('Votre message a été envoyé !');
        } else {
            alert('veuillez remplir tous champs !');
        }
    });
});



// page actuelle 
const currentPage = window.location.pathname.split("/").pop(); 

// redirections
const redirectMap = {
    "bio.html": "index.html",
    "Projets.html": "index.html",
    "Contact.html": "index.html",
    "cv.html": "index.html"
};


document.querySelectorAll("nav a").forEach(link => {
    const href = link.getAttribute("href"); 

    
    if (href === currentPage && redirectMap[currentPage]) {
        link.setAttribute("href", redirectMap[currentPage]); 
    }
});



