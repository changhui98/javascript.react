let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

let area3 = getArea(120, 200);
console.log(area3);

// 함수
function getArea(width, height) {
  function another() {
    console.log("another");
  }

  another();
  let area = width * height;

  return area;
}

// 호이스팅
// -> 끌어올리다 라는 뜻
