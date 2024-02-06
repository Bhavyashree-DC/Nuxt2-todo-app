<template>
    <div class="add-task">
      <NuxtLink to = 'NewTaskForm'>
        <i class="ri-add-fill"></i>
      </NuxtLink>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddTask',
  };
  </script>
  
  <style scoped>

  @import 'remixicon/fonts/remixicon.css';
  .add-task {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    cursor: pointer;
    margin-top: auto; 
  }
  i{
    width: 30px;
    height: 30px;
    font-size: 2.6rem;
    background-color: coral;
    border-radius: 100%;
    padding:14px;
  }
  </style>
  
