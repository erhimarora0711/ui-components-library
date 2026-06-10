document.querySelectorAll(".accordion__header").forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    // Close others (AEM style behavior)
    document.querySelectorAll(".accordion__content").forEach((item) => {
      if (item !== content) {
        item.style.maxHeight = null;
      }
    });

    // Toggle current
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

