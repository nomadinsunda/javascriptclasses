async function loadProducts() {
  const statusEl = document.getElementById("status");
  const listEl = document.getElementById("product-list");

  // 초기 상태
  statusEl.textContent = "상품 데이터를 불러오는 중입니다...";
  statusEl.classList.remove("error");
  listEl.innerHTML = "";

  try {
    // http://localhost:5501/products.json
    // : 현재 html 파일이 있는 같은 디렉터리에 있는 JSON 파일
    const res = await fetch("products.json"); // 같은 폴더의 products.json

    if (!res.ok) {
      throw new Error("네트워크 오류");
    }

    const products = await res.json();

    // 데이터 검증
    if (!Array.isArray(products) || products.length === 0) {
      statusEl.textContent = "상품 데이터가 없습니다.";
      return;
    }

    // DOM 렌더링
    products.forEach(function (product) {
      const card = document.createElement("article");
      card.className = "product-card";

      // 특정 DOM 요소의 “자식 노드 전체를 HTML 문자열로 읽거나 쓰는 프로퍼티
      // 다음 코드는 쓰기 동작
      card.innerHTML = `
        <h3>${product.name}</h3>
        <p>가격: ${product.price}원</p>
      `;

      listEl.appendChild(card);
    });

    // textContent : DOM 요소가 가지고 있는 “텍스트 전용 프로퍼티”
    // 해당 요소 안에 들어 있는 모든 텍스트를
    // HTML 해석 없이, 순수 문자열로 읽고/쓰기 위한 인터페이스
    statusEl.textContent = products.length + "개의 상품을 불러왔습니다.";
  } catch (error) {
    console.error(error);
    statusEl.textContent = "상품 데이터를 불러오는 중 오류가 발생했습니다.";
    statusEl.classList.add("error");
    listEl.innerHTML = "";
  }
}

// 브라우저(정확히는 JS 엔진 + 이벤트 루프)가 자동으로 실행
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("load-btn");
  btn.addEventListener("click", loadProducts);
});
