document.getElementById("container-form").addEventListener("submit", function(event) {
    event.preventDefault()

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let cfpassword = document.getElementById("cfpassword").value

    if (cfpassword != password) {
        window.alert("Password not Match Confirm Password. Please try Agein!")
    } else {
        console.log("Sign Up Seccuessfuly!\nUsername :" + username + "\nEmail : " + email + "\nPassword :" + password + 
        "\nConfirm Password :" + cfpassword)
    }

    document.getElementById("username").value = ""
    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
    document.getElementById("cfpassword").value = ""
})