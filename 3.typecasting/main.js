// const falsyValues = [false, 0, "", null, undefined, NaN];


// falsyValues.forEach(value => {
//     if (!value) {
//         console.log(`[${value}] 은(는) Falsy입니다.`);
//     }
// });



// function checkData(data) {
//     if (data) {
//         console.log("✅ 데이터를 성공적으로 수신했습니다:", data);
//     } else {
//         console.log("❌ 데이터가 없거나 유효하지 않습니다.");
//     }
// }

// checkData("Tom");     // ✅ (문자열은 Truthy)
// checkData("");        // ❌ (빈 문자열은 Falsy)
// checkData(undefined); // ❌ (값이 없음은 Falsy)

const items = [];

if (items) {
    console.log("장바구니가 존재합니다."); // 출력됨!
}

// 💡 팁: 배열이 비었는지 확인하려면 .length를 써서 '0(Falsy)'을 만들어야 합니다.
if (items.length) {
    console.log("장바구니에 물건이 있습니다.");
} else {
    console.log("장바구니가 비었습니다."); // 0은 Falsy이므로 이쪽이 실행됨
}