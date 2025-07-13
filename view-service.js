const serviceList = document.getElementById("serviceList");
const services = JSON.parse(localStorage.getItem("services")) || [];

services.forEach((service, index) => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${service.title}</strong><br>${service.desc}`;
  serviceList.appendChild(li);
});