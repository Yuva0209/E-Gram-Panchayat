document.getElementById("statusForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const appId = document.getElementById("appId").value.trim();
  const newStatus = document.getElementById("newStatus").value;
  const msg = document.getElementById("statusMsg");

  let applications = JSON.parse(localStorage.getItem("applications")) || [];

  const index = applications.findIndex(app => app.id === appId);

  if (index !== -1) {
    applications[index].status = newStatus;
    localStorage.setItem("applications", JSON.stringify(applications));
    msg.textContent = "Status updated successfully!";
    msg.style.color = "green";
  } else {
    msg.textContent = "Application not found!";
    msg.style.color = "red";
  }
});