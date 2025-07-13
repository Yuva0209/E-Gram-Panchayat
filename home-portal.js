const content = document.getElementById("content");

// 📋 View Services
function viewServices() {
  const services = JSON.parse(localStorage.getItem("services")) || [];
  content.innerHTML = "<h2>📋 Available Services:</h2>";

  if (services.length === 0) {
    content.innerHTML += "<p>No services available yet.</p>";
    return;
  }

  const ul = document.createElement("ul");
  services.forEach(service => {
    const li = document.createElement("li");
    li.textContent = `${service.title} - ${service.desc}`;
    ul.appendChild(li);
  });
  content.appendChild(ul);
}
//  go to portal 
function goToPortal() {
    window.location.href = "portal.html";
}

// 📁 View Uploads
function viewUploads() {
  const uploads = JSON.parse(localStorage.getItem("uploads")) || {};
  content.innerHTML = "<h2>📁 Uploaded Documents:</h2>";

  if (Object.keys(uploads).length === 0) {
    content.innerHTML += "<p>No uploads found.</p>";
    return;
  }

  for (const service in uploads) {
    const section = document.createElement("div");
    section.innerHTML = `<h3>${service}</h3>`;

    uploads[service].forEach((file, i) => {
      const link = document.createElement("a");
      link.href = file.data;
      link.download = file.filename;
      link.textContent = `${i + 1}. ${file.filename}`;
      section.appendChild(link);
      section.appendChild(document.createElement("br"));
    });

    content.appendChild(section);
  }
}

// 📝 Update Status
function updateStatus() {
  content.innerHTML = `
    <h2>📝 Update Application Status</h2>
    <form id="statusForm">
      <input type="text" id="appId" placeholder="Application ID" required>
      <select id="statusValue" required>
        <option value="">Select Status</option>
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
        <option value="Rejected">Rejected</option>
      </select>
      <br><br>
      <button type="submit">Update</button>
    </form>
    <p id="statusMsg"></p>
  `;

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
}

// create services
function createService() {
  content.innerHTML = `
    <h2>➕ Create New Service</h2>
    <form id="createServiceForm">
      <input type="text" id="serviceTitle" placeholder="Service Title" required>
      <textarea id="serviceDesc" placeholder="Service Description" required></textarea>
      <br><br>
      <button type="submit">Create Service</button>
    </form>
    <p id="createMsg"></p>
  `;

  document.getElementById("createServiceForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("serviceTitle").value.trim();
    const desc = document.getElementById("serviceDesc").value.trim();
    const msg = document.getElementById("createMsg");

    if (!title || !desc) {
      msg.textContent = "Please fill in both fields.";
      msg.style.color = "red";
      return;
    }

    let services = JSON.parse(localStorage.getItem("services")) || [];

    // Optional: Prevent duplicate titles
    const exists = services.some(s => s.title.toLowerCase() === title.toLowerCase());
    if (exists) {
      msg.textContent = "Service already exists!";
      msg.style.color = "red";
      return;
    }

    services.push({ title, desc });
    localStorage.setItem("services", JSON.stringify(services));

    msg.textContent = "✅ Service created successfully!";
    msg.style.color = "green";
    document.getElementById("createServiceForm").reset();
  });
}

// 🔙 Back Button
function goBack() {
  window.location.href = "index.html";
}