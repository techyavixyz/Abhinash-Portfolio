/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


// Contact me

document.getElementById('contactButton').addEventListener('click', function() {
    // Replace these placeholders with your actual phone number and email
    var phoneNumber = "+91639246937";
    var emailAddress = "ad204476@gmail.com";

    // Prompt the user to choose the action
    var action = prompt("How would you like to contact Abhinash Dubey?\n1. Call 6392246937\n2. Send Email ad204475@gmail.com");

    // Perform the chosen action
    if (action === "1") {
        // If the user chooses to call
        window.location.href = "tel:" + phoneNumber;
    } else if (action === "2") {
        // If the user chooses to send an email
        window.location.href = "mailto:" + emailAddress;
    } else {
        // If the user cancels or chooses an invalid option
        alert("Invalid choice. Please choose 1 for calling or 2 for sending an email.");
    }

});

// resume Button s and View 

document.getElementById('view-cv').addEventListener('click', () => {
    // Update the path to your CV
    window.open('Resume 1.0/Abhinash Kumar Dubey.pdf', '_blank');
  });
  
  document.getElementById('download-cv').addEventListener('click', () => {
    const cvUrl = 'Resume 1.0/Abhinash Kumar Dubey.pdf'; // Update the path to your CV
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Abhinash_Kumar_Dubey.pdf'; // Replace with your CV filename
    link.click();
  });


  // emaill to ad204476@gmail.com // Contact

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var message = document.getElementById('messageInput').value;

    // Replace this with the recipient email address
    var recipientEmail = "ad204476@gmail.com";

    // Construct the email body
    var subject = "New Contact Form Submission";
    var body = "Name: " + name + "\n";
    body += "Email: " + email + "\n";
    body += "Message: " + message;

    // Construct the mailto URL
    var mailtoLink = "mailto:" + recipientEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
});
