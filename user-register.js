// document.getElementById("userLoginForm").addEventListener("submit", function(e) {
//   e.preventDefault();

//   const email = document.getElementById("email").value.trim();
//   const password = document.getElementById("password").value.trim();

//   let users = JSON.parse(localStorage.getItem("users")) || [];

//   const user = users.find(u => u.email === email && u.password === password);

//   if (user) {
//     localStorage.setItem("loggedInUser", JSON.stringify(user));
//     window.location.href = "user-dashboard.html";
//   } else {
//     document.getElementById("loginMsg").textContent = "Invalid credentials!";
//   }
// });

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("registerMsg");

  // Dummy login check
  if (username === "user@gmail.com" && password === "user123") {
    msg.textContent = "Login successful!";
    msg.style.color = "green";

    function goToPortal() {
  localStorage.removeItem("staffLoggedIn");
  window.location.href = "index.html";
}
    // Redirect to admin dashboard after login
    setTimeout(() => {
      window.location.href = "home-portal.html";
    }, 1500);
  } else {
    msg.textContent = "Invalid credentials!";
    msg.style.color = "red";
  }
});