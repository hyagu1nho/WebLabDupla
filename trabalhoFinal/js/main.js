
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const accessibilityButton = document.getElementById("accessibility");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });

  accessibilityButton.addEventListener("click", () => {
    document.body.classList.toggle("accessible");
  });
});
