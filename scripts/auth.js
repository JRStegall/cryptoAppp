//Listen for Authorization status changes
//This essentially will help keep track of the user and whether they are still logged in / off. 
//Will display as "null" if no user is logged in
auth.onAuthStateChanged(user => {
    if (user) {
        console.log("The user is now logged in as ", user)
        setupUI(user)
        userRedirect
        
    } else {
        setupUI()
        console.log("User is now logged off")
        
    }
})

//sign up
const signupForm = document.querySelector("#signupForm")

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    //This part will get the user info

    const email = signupForm["signupEmail"].value
    const password = signupForm["signupPassword"].value

    //This will sign up the user with their credentials. This is asycn
    auth.createUserWithEmailAndPassword(email, password).then(credential => {
        console.log("The User Has Signed In")
        
        signupForm.reset();
        
    })
    
})

// logOut

const logout = document.querySelector("#logout");
logout.addEventListener("click", (event) => {
    event.preventDefault();
    auth.signOut()
})



//Log In

const loginForm = document.querySelector("#signinForm");
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = signinForm["signinEmail"].value
    const password = signinForm["signinPassword"].value

    auth.signInWithEmailAndPassword(email, password).then(credential => {
        
        window.location.href = "http://127.0.0.1:5500/dashboard.html"
    });
})

