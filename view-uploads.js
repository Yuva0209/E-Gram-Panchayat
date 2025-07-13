document.getElementById("serviceSelect").addEventListener("change", function () {
  const selectedService = this.value;
  const fileList = document.getElementById("fileList");
  fileList.innerHTML = "";

  const uploads = JSON.parse(localStorage.getItem("uploads")) || {};

  if (uploads[selectedService] && uploads[selectedService].length > 0) {
    uploads[selectedService].forEach((fileObj, index) => {
      const div = document.createElement("div");
      div.classList.add("file-item");

      const downloadLink = document.createElement("a");
      downloadLink.href = fileObj.data;
      downloadLink.download = fileObj.filename;
      downloadLink.textContent = `${index + 1}. ${fileObj.filename}`;

      const uploadedInfo = document.createElement("p");
      uploadedInfo.textContent = `Uploaded on: ${fileObj.uploadedAt}`;

      div.appendChild(downloadLink);
      div.appendChild(uploadedInfo);

      fileList.appendChild(div);
    });
  } else {
    fileList.innerHTML = `<p>No files uploaded under "${selectedService}"</p>`;
  }
});