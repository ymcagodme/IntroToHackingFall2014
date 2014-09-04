// Javascript File

var username;
var password;

function getCredentials() {
  username = localStorage.getItem("username");
  password = localStorage.getItem("password");
  if (username && password) {
    return true;
  } else {
    return false;
  }
}

function setCredentials(username, password) {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
}

$(document).ready(function(){
  var hasCredentials = getCredentials();
  if (hasCredentials && $('.error').length == 0) {
    // Autofill username and password
    $('input#username').val(username);
    $('input#password').val(password);
    $('input.button').click();
  } else {
    // No credentials saved so wait
    $('#loginForm').submit(function() {
      username = $('input#username').val();
      password = $('input#password').val();
      setCredentials(username, password);
      alert('Form submitted!');
    });
  };
});
