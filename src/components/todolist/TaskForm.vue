<script setup>
  import { userList } from '../../constant/todolist';

  const taskForm = defineModel({
    required: true,
    type: Object,
  });

  defineProps({
    handleShowForm: Function,
    handleSubmit: Function
  });
</script>

<template>
  <form @submit.prevent="handleSubmit" v-if="taskForm">
    <h1>Create Task</h1>
    <input type="text" placeholder="Enter your task" v-model="taskForm.title" required />
    <select id="type" v-model="taskForm.type" required>
      <option value="">Select Type</option>
      <option value="todo">To do</option>
      <option value="doing">In Progress</option>
      <option value="done">Done</option>
    </select>
    <select id="asignee" v-model="taskForm.asignee" required>
      <option value="">Select Asignee</option>
      <option v-for="user in userList" :key="user.id" :value="user.name">{{ user.name }}</option>
    </select>
    <div class="button-wrapper">
      <button type="button" class="cancel-button" @click="handleShowForm">Cancel</button>
      <button type="submit" class="save-button">Create</button>
    </div>
  </form>
</template>

<style scoped>
/*   h1 {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  } */
  
  input {
    padding: 10px;
    border: 1px solid #999;
    border-radius: 12px;
  }

  select {
    padding: 10px;
    border: 1px solid #999;
    border-radius: 12px;
  }

  .button-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 10px;
  }

  .cancel-button {
    width: max-content;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px #999;
  }

  .save-button {
    width: max-content;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 12px;
    background: cyan;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px #999;
  }

  button:active {
    box-shadow: 0 1px #999;
    transform: translateY(4px);
  }
</style>