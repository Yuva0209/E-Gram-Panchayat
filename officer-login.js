document.getElementById("officerLoginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("loginMsg");

  // Dummy login check
  if (username === "admin" && password === "admin123") {
    msg.textContent = "Login successful!";
    msg.style.color = "green";

    function goToPortal() {
  localStorage.removeItem("officerLoggedIn");
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