//defauli paramter 기본 파라미터

function addContact(
  name,
  mobile,
  home = '없음',
  address = '없음',
  email = '없음'
) {
  const str = `name=${name} , mobile:${mobile} ,home:${home},address:${address},email:${email}`;
  console.log(str);
}

addContact('박혜원', '010-3903-6297');
// 함수 호출 시 인수를 생략했을 때 가지는 기본값을 설정할 수 있음

//rest parameter 가변 파라미터

function foodReport(name, age, ...favoriteFood) {
  console.log(`name : ${name} , age : ${age}`);
  console.log(favoriteFood);
}

foodReport('박혜원', 28, '떡볶이', '피자', '초밥');
// 배정 안된 값을 한번에 반환 배열 [] 에 등록
//출력 값 : name : 박혜원 , age : 28
// [ '떡볶이', '피자', '초밥' ]
