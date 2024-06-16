<template>
  <div>
    <main>
      <h1>[todo list]</h1>
      <div>
        <input type="text" v-model.trim="inputodo" />
        <button @click="addTodo">추가</button>
      </div>
      <ol>
        <li v-for="todoitem in states.todolist" :key="todoitem.id">
          <span
            :style="
              todoitem.done
                ? { textDecoration: 'line-through' }
                : { textDecoration: 'none' }
            "
            >{{ todoitem.todo }}{{ todoitem.done ? '완료' : '' }}</span
          >
          <span>
            <button @click.stop="editTodo">수정</button>
            <button @click.stop="deletTodo">삭제</button>
          </span>
        </li>
      </ol>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';

const states = reactive({
  todolist: [],
});

const url = 'http://localhost:3000/todos';
async function fetchTodoList() {
  try {
    const getTodoRes = await axios.get(url);
    states.todolist = getTodoRes.data;
  } catch (e) {
    console.log(e);
    alert('데이터 통신에 err 발생');
  }
}
// todolist 추가 기능 구현
const inputodo = ref('');
async function addTodo() {
  if (inputodo === '') return alert('할일을 입력해주세요.');
  try {
    const addTodoRes = await axios.post(url, {
      todo: todo.value,
      done: false,
    });
    if (addTodoRes.status !== 201) return alert('todo 추가 실패');
    todo.value = '';
    fetchTodoList();
  } catch (e) {
    console.log(e);
    alert('todolist 추가 작업 중 err 발생');
  }
}
</script>

<style lang="scss" scoped></style>
