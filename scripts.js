/* Add your JavaScript to this file */
window.onload = function() {
    var subform = document.querySelector("form");
    // console.log(subform);

    subform.addEventListener("submit", function(event) {
        event.preventDefault();

        // console.log("Form submitted.");
        
        var email_field = document.querySelector("#email");
        // console.log(email_field);

        var email = email_field.value.trim();
        // console.log(email);

        let valid_msg = "Thank you! Your email " + email + " has been added to our mailing list!"
        let invalid_msg = "Please enter a valid email address."
        
        let msg_div = document.querySelector(".message");  

        if(isEmpty(email)) {
            displayMessage(msg_div, invalid_msg);
        }

        else {
            displayMessage(msg_div, valid_msg);
        }
    });
};

// checks if field is empty
function isEmpty(fieldValue) {
    if (fieldValue.length == 0) {
      // console.log("Field is empty");
      return true;
    }
  
    return false;
}

// displays message
function displayMessage(formFieldParent, message) {
    let p = document.createElement("p");  
    formFieldParent.appendChild(p);    
    formFieldParent.innerHTML = message;
    
    // console.log(formFieldParent.children.length);
    // console.log(formFieldParent);    
}

// checks if a valid email address was entered
function isValidEmail(email) {
    return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(email);
};