const searchBox = document.getElementById("searchBox");
const results = document.getElementById("results");

const services = JSON.parse(localStorage.getItem("services")) || [];

searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();
  results.innerHTML = "";

  const filtered = services.filter(service =>
    service.title.toLowerCase().includes(query)
  );

  filtered.forEach(service => {
    const li = document.createElement("li");
    li.textContent = `${service.title}: ${service.desc}`;
    results.appendChild(li);
  });
});