<template>
  <div>
    <h1>Login</h1>
    아이디 : <input type="text" v-model.trim="userId" />
    <br />
    패스워드 : <input type="password" v-model.trim="userPassword" />
    <br />
    <button @click="login">로그인</button>
    &nbsp;
    <button @click="logOut">로그아웃</button>
    &nbsp;
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const userId = ref('');
const userPassword = ref('');

async function login() {
  try {
    const url = 'http://localhost:3000/users';
    // axios 의 get method 를 활용하여 사용자 목록을 요청하고 해당 결과를 받는 코드
    // 비동기 통신이므로 await 사용 필수!!
    const loginRes = await axios.get(url);

    // 사용자 목록을 userArr 라는 변수에 넣어주기
    const userArr = loginRes.data;

    // 사용자 목록에 input 으로 입력받은 id 와 일치하는 데이터를 찾는 코드
    const findedUser = userArr.find((item, index) => item.id === userId.value);

    // id 와 일치하는 데이터를 못찾으면 find 함수는 undefined 를 반환 하므로
    // 아래의 경우는 해당 id 를 가지는 사용자가 없는 경우, id 가 없다고 alert 을 띄우고
    // 로그인 과정을 종료 처리
    if (findedUser === undefined) {
      return alert('해당 ID를 가지는 사용자가 없습니다!');
    }

    // id 와 일치하는 데이터를 찾은 케이스이므로 사용자 목록의 비밀번호와 input 으로 입력받은 값을 비교하여
    // 비밀번호가 일치하는지 확인하는 구문
    // 입력 받은 비밀번호와 서버의 비밀번호가 다르면 비밀번호가 틀린 경우이므로 경고를 띄우고 로그인 과정 종료
    if (findedUser.password !== userPassword.value) {
      return alert('비밀번호가 일치하지 않습니다!');
    }

    // 비밀번호 까지 일치하면 로그인을 성공 시키면 되므로, router 의 beforeEach 에 의해 수행 되는 코드가
    // localStorage 에서 auth 값을 찾을 수 있도록 localStorage 에 auth 에 값을 저장
    localStorage.setItem('auth', 'true');
    // 로그인 성공 메세지를 띄우고, 로그인 과정 종료
    alert('로그인 성공');
    return router.push({ name: 'todo' });
  } catch (e) {
    // 비동기 통신 혹은 예기치 않은 오류를 try/catch 구문을 사용하여 에러를 핸들링
    alert('로그인 과정에 문제 발생!');
    console.log(e);
  }
}
async function logOut() {
  localStorage.removeItem('auth');
}
</script>
