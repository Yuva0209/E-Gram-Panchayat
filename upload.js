document.getElementById("uploadForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const service = document.getElementById("service").value;
  const fileInput = document.getElementById("file");
  const file = fileInput.files[0];
  const msg = document.getElementById("uploadMsg");

  if (!service || !file) {
    msg.textContent = "Please select a service and choose a file!";
    msg.style.color = "red";
    return;
  }

  // Convert file to base64 for localStorage demo
  const reader = new FileReader();
  reader.onload = function () {
    const base64File = reader.result;

    let uploads = JSON.parse(localStorage.getItem("uploads")) || {};
    if (!uploads[service]) uploads[service] = [];

    uploads[service].push({
      filename: file.name,
      data: base64File,
      uploadedAt: new Date().toLocaleString()
    });

    localStorage.setItem("uploads", JSON.stringify(uploads));
    msg.textContent = `Uploaded successfully under "${service}"`;
    msg.style.color = "green";

    fileInput.value = "";
    document.getElementById("service").value = "";
  };
  reader.readAsDataURL(file);
});