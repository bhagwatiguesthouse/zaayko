document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".menu-nav button");
  const sections = document.querySelectorAll(".section");

  function showSections(category) {
    sections.forEach((section) => {
      const sectionCategory = section.getAttribute("data-category");
      if (category === "all" || sectionCategory === category) {
        section.classList.add("active");
        section.style.display = "block";
      } else {
        section.classList.remove("active");
        section.style.display = "none";
      }
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-target");
      showSections(category);
    });
  });

  // Show all by default
  showSections("all");
});
