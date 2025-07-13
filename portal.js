// 🔍 Search + View Services
const serviceList = document.getElementById("serviceList");
const searchInput = document.getElementById("searchInput");
const services = JSON.parse(localStorage.getItem("services")) || [];

function displayServices(query = "") {
  serviceList.innerHTML = "";
  services
    .filter(s => s.title.toLowerCase().includes(query.toLowerCase()))
    .forEach(s => {
      const li = document.createElement("li");
      li.textContent = `${s.title} - ${s.desc}`;
      serviceList.appendChild(li);
    });
}
searchInput.addEventListener("input", () => displayServices(searchInput.value));
displayServices();

// 📝 Update Application Status
document.getElementById("statusForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const id = document.getElementById("appId").value.trim();
  const status = document.getElementById("statusValue").value;
  const msg = document.getElementById("statusMsg");

  let apps = JSON.parse(localStorage.getItem("applications")) || [];
  const index = apps.findIndex(app => app.id === id);

  if (index !== -1) {
    apps[index].status = status;
    localStorage.setItem("applications", JSON.stringify(apps));
    msg.textContent = "Status updated!";
    msg.style.color = "green";
  } else {
    msg.textContent = "Application not found!";
    msg.style.color = "red";
  }
});

// 📤 Upload Files
document.getElementById("uploadForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const service = document.getElementById("uploadService").value;
  const file = document.getElementById("uploadFile").files[0];
  const msg = document.getElementById("uploadMsg");

  if (!service || !file) {
    msg.textContent = "Select service and choose a file.";
    msg.style.color = "red";
    return;
  }

  const reader = new FileReader();
  reader.onload = function () {
    let uploads = JSON.parse(localStorage.getItem("uploads")) || {};
    if (!uploads[service]) uploads[service] = [];

    uploads[service].push({
      filename: file.name,
      data: reader.result,
      uploadedAt: new Date().toLocaleString()
    });

    localStorage.setItem("uploads", JSON.stringify(uploads));
    msg.textContent = "File uploaded successfully!";
    msg.style.color = "green";
    document.getElementById("uploadForm").reset();
  };
  reader.readAsDataURL(file);
});

// 📁 View Uploads
document.getElementById("viewService").addEventListener("change", function () {
  const service = this.value;
  const container = document.getElementById("uploadsContainer");
  container.innerHTML = "";

  const uploads = JSON.parse(localStorage.getItem("uploads")) || {};
  if (uploads[service] && uploads[service].length > 0) {
    uploads[service].forEach((file, i) => {
      const div = document.createElement("div");
      div.className = "file-box";

      const link = document.createElement("a");
      link.href = file.data;
      link.download = file.filename;
      link.textContent = `${i + 1}. ${file.filename}`;

      const date = document.createElement("p");
      date.textContent = `Uploaded at: ${file.uploadedAt}`;

      div.appendChild(link);
      div.appendChild(date);
      container.appendChild(div);
    });
  } else {
    container.textContent = "No files uploaded for this service.";
  }
});