function validateform(){
    var pass = document.getElementById('password');
    var con = document.getElementById('confirm');
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
    var error = document.getElementById('err1');
    if (password != confirm || password==""){
        error.textContent = "Invalid password";
        pass.style.border = "2px solid red";
        con.style.border = "2px solid red";
        error.style.color = "red";
        return false;
    }else if(password.length < 8){
        error.textContent = "Must be in 8 or above";
        pass.style.border = "2px solid red";
        con.style.border = "2px solid red";
        error.style.color = "red";
        return false;
    }else {
        error.textContent = "Valid";
        pass.style.border = "2px solid green";
        con.style.border = "2px solid green";
        error.style.color = "green";
        return false;
    }
}
