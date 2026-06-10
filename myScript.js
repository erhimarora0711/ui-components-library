const headers = document.querySelectorAll(".accordion__header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    // Close all other accordions
    document.querySelectorAll(".accordion__content").forEach((item) => {
      if (item !== content) {
        item.style.maxHeight = null;
      }
    });

    document.querySelectorAll(".accordion__header").forEach((item) => {
      if (item !== header) {
        item.classList.remove("active");
      }
    });

    // Toggle current
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      header.classList.remove("active");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      header.classList.add("active");
    }
  });
});