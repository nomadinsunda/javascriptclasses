async function loadUsers() {
  const statusEl = document.getElementById("status");
  const listEl = document.getElementById("user-list");

  statusEl.textContent = "데이터를 불러오는 중입니다...";
  statusEl.classList.remove("error");
  listEl.innerHTML = "";

  try {
    const res = await fetch("users.json"); // 같은 폴더의 users.json

    if (!res.ok) {
      throw new Error("네트워크 응답 오류");
    }

    const users = await res.json();

    // 데이터가 배열이 아니거나 빈 배열일 경우
    if (!Array.isArray(users) || users.length === 0) {
      statusEl.textContent = "데이터가 없습니다.";
      return;
    }

    // 반복문(forEach)을 사용하여 DOM에 렌더링
    users.forEach(function (user) {
      const card = document.createElement("article");
      card.className = "user-card";

      card.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
      `;

      listEl.appendChild(card);
    });

    statusEl.textContent = users.length + "명의 회원 정보를 불러왔습니다.";
  } catch (error) {
    console.error(error);
    statusEl.textContent = "오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
    statusEl.classList.add("error");
    listEl.innerHTML = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("load-btn");
  btn.addEventListener("click", loadUsers);
});
