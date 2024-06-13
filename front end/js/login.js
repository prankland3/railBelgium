var loginForm = document.getElementById("login-form");
let loginURL = "localhost:5000" // tijdelijke link voor testdoeleinden

function login(){
   let username = document.getElementById("userName");

    let pwd = document.getElementById("pwd");

    if (pwd == "" || username == ""){
        alert("please fill in al the fields");
    } else {
        const data =  document.querySelector("#login-form");

            const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' // Set content type to JSON
            },
              body:data // Convert JSON data to a string and set it as the request body
            };
            fetch('http://localhost:5000/login', options)
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