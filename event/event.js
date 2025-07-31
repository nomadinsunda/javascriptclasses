window.addEventListener("DOMContentLoaded", () => {
  const log = document.getElementById("log");

  function logEvent(eventName, detail = '') {
    const time = new Date().toLocaleTimeString();
    log.textContent += `[${time}] ${eventName} ${detail}\n`;
    log.scrollTop = log.scrollHeight;
  }

  // 📌 클릭 이벤트
  document.getElementById("clickBtn").addEventListener("click", () => {
    logEvent("click", "버튼 클릭됨");
  });

  // 📌 키보드 이벤트
  document.addEventListener("keydown", (e) => {
    logEvent("keydown", `Key: ${e.key}`);
  });
  document.addEventListener("keyup", (e) => {
    logEvent("keyup", `Key: ${e.key}`);
  });

  // 📌 입력 필드 이벤트
  document.getElementById("textInput").addEventListener("input", (e) => {
    logEvent("input", `값: ${e.target.value}`);
  });

  document.getElementById("textArea").addEventListener("change", (e) => {
    logEvent("change", `텍스트 영역 변경됨`);
  });

  // 📌 선택 이벤트
  document.getElementById("dropdown").addEventListener("change", (e) => {
    logEvent("change", `선택: ${e.target.value}`);
  });

  // 📌 폼 제출 이벤트
  document.getElementById("testForm").addEventListener("submit", (e) => {
    e.preventDefault();
    logEvent("submit", "폼 제출됨");
  });

  // 📌 마우스 오버/아웃
  document.getElementById("hoverArea").addEventListener("mouseover", () => {
    logEvent("mouseover", "마우스 들어옴");
  });
  document.getElementById("hoverArea").addEventListener("mouseout", () => {
    logEvent("mouseout", "마우스 나감");
  });

  // 📌 포커스 / 블러 이벤트
  const textInput = document.getElementById("textInput");
  textInput.addEventListener("focus", () => {
    logEvent("focus", "input에 포커스");
  });
  textInput.addEventListener("blur", () => {
    logEvent("blur", "input 포커스 해제");
  });

  // 📌 윈도우 로딩 이벤트
  logEvent("load", "페이지 로드 완료");

  // 📌 리사이즈 이벤트
  window.addEventListener("resize", () => {
    logEvent("resize", `창 크기: ${window.innerWidth}x${window.innerHeight}`);
  });
});
