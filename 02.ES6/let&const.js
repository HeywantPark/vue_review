let msg = 'global';
function outer() {
  let msg = 'outer';
  console.log(msg);
  if (true) {
    let msg = 'black';
    console.log(msg);
  }
}
outer();
// // 변수를 찾을 때 : 현재 실행 scope 에서 먼저 찾고, 없으면 상위 scope에서 찾음
// // 그래서 출력 값 : outer,balck

const p1 = { name: 'john', age: 25 };
p1.age = 22;
console.log(p1);

p1 = { name: 'lee', age: 27 };
console.log(p1);
// age의 속성은 변경할 수 있지만 p1의 메모리 주소 값은 바뀌지 않음
