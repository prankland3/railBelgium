
var sign_up_form = document.getElementById("sign-up-form");


function signUp() {
    // get the elements of the form
    var pwd_repeat = document.getElementById("pwdRepeat");
    var pwd = document.getElementById("pwd");
    var username = document.getElementById("userName");
    var email = document.getElementById("email");
    var first_name = document.getElementById("FirstName");
    var last_name = document.getElementById("SeccondName")

        // Validate form
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
        if (username.value == "" || password.value == "" || email.value == "" || first_name == "" || last_name == "") {
            alert("Some required fields are not filled in. Please fill them in!");
        } else if (!pwd.value.match(lowerCaseLetters)) {
            alert("your password must contain lowercase letters");
        
        } else if (!pwd.value.match(upperCaseLetters)) {
            alert("password must contain uppercase.");

        } else if (!pwd.value.match(numbers)) {
           alert("password must contain numbers");

        } else if (!pwd.value.length >= 8 && pwd.value.length < 0) {
            alert("password must be longer than 8 characters");

        } else if(pwd !== pwd_repeat) {
            alert("the passwords don't match pleas recheck them.");
        }else {
            alert("sign up success");

            const data =  document.querySelector("#sign-up-form");

            const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' // Set content type to JSON
            },
              body:data // Convert JSON data to a string and set it as the request body
            };
            fetch('http://localhost:5000/signup', options)
              .then(response => {
                // Check if the request was successful
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                // Parse the response as JSON
                return response.json();
              })
              .then(data => {
                // Handle the JSON data
                console.log(data);
              })
              .catch(error => {
                // Handle any errors that occurred during the fetch
                console.error('Fetch error:', error);
              });
        }
  }