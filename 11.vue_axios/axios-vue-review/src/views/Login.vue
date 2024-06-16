<template>
  <div>
    <main>
      <h1>login</h1>
      아이디 : <input type="text" v-model.trim="userId" />
      <br />
      비밀번호 :
      <input type="password" v-model.number="userPassword" />
      <br />
      <button @click="login">로그인</button>
      &nbsp;
      <button>로그아웃</button>
    </main>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const userId = ref('');
const userPassword = ref('');

async function login() {
  try {
    const url = 'http://localhost:3000/users';
    const loginRes = await axios.get(url);

    const userArr = loginRes.data;
    const findUser = userArr.find((item, index) => {
      return item.id === userId.value;
    });
    if (findUser === undefined)
      return alert('해당 id를 가지는 사용자가 존재하지 않습니다.');

    if (findUser.password !== userPassword.value)
      return alert('비밀번호가 일치하지 않습니다.');

    alert('로그인 성공');
    return router.push({ name: 'todo' });
  } catch (e) {
    console.log(e);
    alert('로그인 통신에 error 발생');
  }
}
</script>
