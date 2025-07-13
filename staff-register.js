// document.getElementById("staffRegisterForm").addEventListener("submit", function(e) {
//   e.preventDefault();

//   const name = document.getElementById("name").value.trim();
//   const staffId = document.getElementById("staffId").value.trim();
//   const password = document.getElementById("password").value;
//   const msg = document.getElementById("StaffMsg");

//   function goToPortal() {
//     window.location.href = "home-portal.html";
//   }

//   let staffList = JSON.parse(localStorage.getItem("staffList")) || [];

//   const exists = staffList.some(staff => staff.staffId === staffId);
//   if (exists) {
//     document.getElementById("registerMsg").textContent = "Staff ID already exists!";
//     document.getElementById("registerMsg").style.color = "red";
//     return;
//   }

//   staffList.push({ name, staffId, password });
//   localStorage.setItem("staffList", JSON.stringify(staffList));

//   document.getElementById("registerMsg").textContent = "Registration successful!";
//   document.getElementById("registerMsg").style.color = "green";
//   document.getElementById("staffRegisterForm").reset();

// // Dummy login check
// if (username === "staff" && password === "staff123") {
//     msg.textContent = "Login successful!";
//     msg.style.color = "green";

//     function goToPortal() {
//   localStorage.removeItem("staffLoggedIn");
//   window.location.href = "home-portal.html";
// }
//     // Redirect to admin dashboard after login
//     setTimeout(() => {
//       window.location.href = "home-portal.html";
//     }, 1500);
// } else {
//     msg.textContent = "Invalid credentials!";
//     msg.style.color = "red";
//   }
// });

document.getElementById("staffRegisterForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("staffMsg");

  // Dummy login check
  if (username === "staff" && password === "staff123") {
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