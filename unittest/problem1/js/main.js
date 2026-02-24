// 탭 인터랙션 구현

// document.addEventListener: 브라우저에서 발생하는 다양한 이벤트(클릭, 입력, 로딩 등)를 감지하고 그때 실행할 콜백 함수를 등록하는 메서드입니다.
// DOMContentLoaded 이벤트: HTML이 모두 파싱되어 DOM 트리가 완성되었을 때 발생합니다.
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn"); //  CSS 클래스 셀렉터(.tab-btn)가 적용된 모든 element들을 가지고 옴
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      // data-target="tab-html" 이면 getAttribute는 targetId 값을 tab-html으로
      // <div id="tab-html" class="tab-content active">
      const targetId = btn.getAttribute("data-target");

      // 현재 디폴트로 id=tab-html만 class에 active(현재 화면에 보이는 상태) 설정됨.

      // 모든 탭/콘텐츠 비활성화
      tabButtons.forEach(function (b) {
        b.classList.remove("active");
      });
      tabContents.forEach(function (c) {
        c.classList.remove("active");
      });

      // 현재 탭/콘텐츠 활성화
      btn.classList.add("active"); 
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
});
