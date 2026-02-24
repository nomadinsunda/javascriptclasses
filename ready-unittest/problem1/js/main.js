// 탭 인터랙션 구현

// DOMContentLoaded:
// HTML 문서가 모두 파싱되어 DOM 트리가 완성되었을 때 실행된다.
document.addEventListener("DOMContentLoaded", function () {

  // 모든 탭 버튼과 콘텐츠를 가져온다
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  // 각 탭 버튼에 클릭 이벤트 등록
  tabButtons.forEach(function (btn) {

    btn.addEventListener("click", function () {

      // data-target 속성 값 가져오기
      // 예: data-target="tab-apple" -> "tab-apple"가 targetId 변수의 값으로 대입
      // 현재 id 속성을 가진 element는  
      // div id 들임
      const targetId = btn.getAttribute("data-target");

      // 1. 모든 탭 버튼 비활성화
      tabButtons.forEach(function (b) {
        b.classList.remove("active");  // 즉 class 속성값 xxx-yyy.actvie를 xxx-yyy로 변경함
      });

      // 2. 모든 콘텐츠 비활성화
      tabContents.forEach(function (c) {
        c.classList.remove("active");
      });

      // 3. 클릭한 탭 버튼 활성화
      btn.classList.add("active");

      // 4. 해당 콘텐츠 활성화
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
});
