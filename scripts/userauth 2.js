auth.onAuthStateChanged(user => {
    if (user) {
        console.log("The user is now logged in as ", user)
        setupUI(user)
        userRedirect
        
    } else {
        setupUI()
        console.log("User is now logged off")
        window.location.href = "http://127.0.0.1:5500/cryptoAppp/index.html"
    
    }
})