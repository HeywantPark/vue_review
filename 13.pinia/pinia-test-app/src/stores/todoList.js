import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';

export const useTodoListStore = defineStore('todoList', () => {
  const state = reactive({
    todolist: [
      { id: 1, todo: 'ES6학습', done: false },
      { id: 2, todo: 'React학습', done: false },
      { id: 3, todo: 'ContextAPI 학습', done: false },
      { id: 4, todo: '야구경기 관람', done: false },
    ],
  });
  const addTodo = (todo) => {
    state.todolist.push({ id: new Date().getTime(), todo, done: false });
  };
  const deleteTodo = (id) => {
    const index = state.todolist.findIndex((todo) => todo.id === id);
    state.todolist.splice(index, 1);
  };
  const toggleTodo = (id) => {
    const index = state.todolist.findIndex((todo) => todo.id === id);
    state.todolist[index].done = !state.todolist[index].done;
  };
  const doneCount = computed(() => {
    return state.todolist.filter((todoItem) => todoItem.done === true).length;
  });
  const todoList = computed(() => state.todolist);

  return { todoList, doneCount, addTodo, deleteTodo, toggleTodo };
});
