const loggedOutLinks = document.querySelectorAll(".loggedOut");
const loggedInLinks = document.querySelectorAll(".loggedIn");

const setupUI =(user) => {
    if (user){
        console.log("toggleUI elements");
        loggedInLinks.forEach(item => item.style.display = "block");
        loggedOutLinks.forEach(item => item.style.display = "none");
       
        
    } else {
        loggedInLinks.forEach(item => item.style.display = "none");
        loggedOutLinks.forEach(item => item.style.display = "block");
       
    }
}

const userRedirect = (user) => {
    if (user) {
        window.location.pathname ="dashboard.html";
       
    }
}