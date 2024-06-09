<template>
  <div>
    <h1>TodoList 테스트</h1>
    <hr />
    <div>
      할일 추가 :
      <input type="text" v-model.trim="todo" />
      <button>추가</button>
    </div>
    <hr />
    <ul>
      <li v-for="todoItem in todoList">
        <span style="cursor: pointer" @click="toggleDone(todoItem.id)">
          {{ todoItem.todo }}{{ todoItem.done ? '완료' : '' }}
        </span>
      </li>
    </ul>
    <div>완료된 할일 수 : {{ doneCount }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useTodoListStore } from '@/stores/todoList';

const todo = ref('');
const todoListStore = useTodoListStore();
const { todoList, addTodo, deleteTodo, toggleTodo } = todoListStore;

const doneCount = computed(() => todoListStore.doneCount);

const addTodoHandler = () => {
  addTodo(todo.value);
  todo.value = '';
};
</script>
