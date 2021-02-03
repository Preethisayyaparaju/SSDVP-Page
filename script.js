function validateForm()
{
    var Firstname=document.getElementById("Firstname");
    var lastname=document.getElementById("lastname");
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    var ConfirmPassword=document.getElementById("ConfirmPassword");   
}
function login(){
    var email=document.getElementById("Email");
    var pssd=document.getElementById("Password");
    if(email.value==Email.value&&password.value==Password.value){
        alert("You have been successfully looged & Remember your password")
    }
    else{
        alert("Email or password is wrong PLZ Try again !!!")
    }
}

