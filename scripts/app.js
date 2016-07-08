(function (){
    "use strict";
    
    // referneces to HTMLElements
    var button = document.getElementById("LogIn");
    var Username = document.getElementById("Username")
    var Password = document.getElementById("Password")
    
    var User = {
        
       username : "",
       password : ""
    }
    function displayUser(){
        User.username = Username.value
        User.password = Password.value
       console.log("++++++++++++++++++++++++++++++++++++++++++");
        console.log(User);
        
    }
    
    button.addEventListener("click",displayUser)
    
})();