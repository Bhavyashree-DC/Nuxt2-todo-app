<template>
   <div class="container">
    <div class="todo-app">
        <div class="header">
           <h1>{{ header }}</h1>
        </div>
        
        <TodoList></TodoList>
        <AddTask></AddTask>
       
    </div>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  data() {
    return {
      header: 'Todo App',
    };
  },
 
}
</script>
<style scoped>
*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

.container {
  width: 500px;
  min-height: 900px;
  background-color: #324d9e;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin: 20px auto;
}

.todo-app {
  width: 430px;
  max-height: 50px;
  padding: 15px;
  margin: 10px 15px 0px;
}

.todo-app .header {
  text-align: center;
  font-size: 1rem;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
