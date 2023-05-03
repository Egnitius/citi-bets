// //Retrieving user input
// const usernameInput = document.getElementById('user_name');
// const pwdInput = document.getElementById('pwd');

// //Storing the input in sessions
// sessionStorage.setItem('username', usernameInput.value);
// sessionStorage.setItem('password', pwdInput.value);


//form validation
function validateForm() {
    // Get the form values
    var name = document.getElementById("first_name").value;
    var uname = document.getElementById("user_name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    var confirmPassword = document.getElementById("cpwd").value;

    // Check that all required fields are filled out
    if (name == "" || uname == "" || email == "" || password == "" || confirmPassword == "") {
      alert("All fields are required. Please complete the form.");
      return false;
    }

    // Check that the email is properly formatted
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // Check that the password and confirm password fields match
    if (password != confirmPassword) {
      alert("The password and confirm password fields do not match.");
      return false;
    }

    // If all validation checks pass, store the username and password in session storage
    sessionStorage.setItem("username", uname);
    sessionStorage.setItem("password", password);

        // Redirect to another HTML page
        window.location.replace ("Login.html");

        // Prevent the form from being submitted
        return false;
}

//Reading session data and loging in 
function login() {
    // Get the form values
    var username = document.getElementById("user_name").value;
    var password = document.getElementById("pwd").value;
    
    // Check if the username and password are correct
    if (username === sessionStorage.getItem("username") && password === sessionStorage.getItem("password")) {
      alert("Login successful!");
      // Redirect to the home page
      window.location.href = "betspage.html";
      return true;
    } else {
      alert("Incorrect username or password. Please try again.");
      return false;
    }
  }
