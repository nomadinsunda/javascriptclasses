const loadBtn = document.getElementById("loadBtn");
const resultEl = document.getElementById("result");

loadBtn.addEventListener("click", () => {
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      // response.data === 서버에서 내려준 실제 데이터
      renderUsers(response.data);
    })
    .catch(error => {
      console.error("에러 발생:", error);
      resultEl.innerHTML = "<li>데이터를 불러오는데 실패했습니다.</li>";
    });
});

function renderUsers(users) {
  resultEl.innerHTML = "";

  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.name} (${user.email})`;
    resultEl.appendChild(li);
  });
}
