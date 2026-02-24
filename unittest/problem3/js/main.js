document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("keyword");
  const items = document.querySelectorAll(".course-item");
  const noResultMsg = document.getElementById("no-result");

  function filterList() {
    const keyword = input.value.trim().toLowerCase();
    let visibleCount = 0;

    items.forEach(function (item) {
      const text = item.textContent.toLowerCase();

      if (keyword === "" || text.includes(keyword)) {
        item.style.display = "block";
        visibleCount++;
      } else {
        item.style.display = "none";
      }
    });

    if (visibleCount === 0) {
      noResultMsg.style.display = "block";
    } else {
      noResultMsg.style.display = "none";
    }
  }

  input.addEventListener("input", filterList);
});
