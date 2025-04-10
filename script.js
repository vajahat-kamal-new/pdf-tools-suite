document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkToggle");
  const body = document.body;
  const darkMode = localStorage.getItem("pdfDarkMode");

  if (darkMode === "true") body.classList.add("dark");

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("pdfDarkMode", body.classList.contains("dark"));
  });
});
