document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("search-room");
  const rooms = document.querySelectorAll(".room-item");
  const emptyMessage = document.getElementById("empty-message");

  function filterRooms() {
    const keyword = input.value.trim().toLowerCase();
    let visible = 0;

    rooms.forEach(function (room) {
      const name = room.textContent.toLowerCase();

      if (keyword === "" || name.includes(keyword)) {
        room.style.display = "block";
        visible++;
      } else {
        room.style.display = "none";
      }
    });

    emptyMessage.style.display =
      visible === 0 ? "block" : "none";
  }

  input.addEventListener("input", filterRooms);
});
