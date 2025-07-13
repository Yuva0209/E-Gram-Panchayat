document.getElementById("serviceForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("serviceTitle").value.trim();
  const desc = document.getElementById("serviceDesc").value.trim();
  const msg = document.getElementById("statusMsg");

  if (title && desc) {
    // Store to localStorage as dummy DB
    let services = JSON.parse(localStorage.getItem("services")) || [];
    services.push({ title, desc });
    localStorage.setItem("services", JSON.stringify(services));

    msg.textContent = "Service created successfully!";
    msg.style.color = "green";

    // Clear form
    document.getElementById("serviceForm").reset();
  } else {
    msg.textContent = "Please fill all fields.";
    msg.style.color = "red";
  }
});