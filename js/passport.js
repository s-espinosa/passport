let relativeURL = window.location.pathname

if(relativeURL === '/login.html') {
  document
    .querySelector("#login-submit")
    .addEventListener(
      "click",
      function(event) {
        logIn();
        event.preventDefault();
      },
      false
    );
}

if(relativeURL !== "/login.html") {
  check = localStorage.getItem('loggedIn')
  if(check !== 'true') {
    window.location.replace("/login.html");
  }
}

document
  .querySelector("#logout-submit")
  .addEventListener(
    "click",
    function(event) {
      logOut();
      event.preventDefault();
    },
    false
  );

function logIn() {
  let login = document.getElementById("login").value.trim();
  let password = document.getElementById("password").value.trim();
  if(checkLogin(login) && checkPassword(password)) {
    localStorage.setItem('loggedIn', 'true');
    window.location.replace("/");
  } else {
    alert("Sorry! Try again.")
  }
}

function checkLogin(login) {
  return login === "KwK"
}

function checkPassword(password) {
  return password === "GirlBoss"
}

function logOut() {
  localStorage.setItem('loggedIn', 'false');
  window.location.replace("/login.html");
}
