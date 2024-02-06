<template>
    <div class="add-new-task">
        <div class="input-field">
            <input v-model="newTask" placeholder="Enter task here..." />
            <button @click="addTask"  @keyup.enter="addTask">Add</button>
        </div>
    </div>
  </template>
  
  <script>
  export default {
  name: 'NewTaskForm',
  data() {
    return {
      header:'Add New Task',
      newTask: '',
    };
  },
  methods: {
    addTask() {
      if (!this.newTask) {
        alert('Please enter the input!');
        return;
      }
  
      const existingTask = this.$store.getters.getTasks.find(
        (task) => task.todoName.toLowerCase() === this.newTask.toLowerCase()
      );
  
      if (existingTask) {
        alert('Task with the same name already exists!');
        return;
      }
  
      this.$store.commit('saveTask', this.newTask);
      this.newTask = '';
      this.$router.push('/'); 
    },
  },
  };
  </script>
  
  <style scoped>
 
  .input-field {
  display: flex;
  /* align-items: center; */
  justify-content: center;
  background-color: #fc9f9f;
  border-radius: 20px;
  width: 400px;
  height: 500px;
  gap: 20px;
  margin-top: 10px;
  padding: 100px 20px 20px;
  }
  
  .add-new-task input {
  width: 300px;
  height: 30px;
  border: none;
  outline: none;
  background-color: #c7cbd6;
  border-radius: 20px;
  font-size: 18px;
  padding: 18px;
  color: #fff;
  }
  
  .add-new-task button {
  width: 80px;
  height: 60px;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  background-color: #FFCF96;
  color: #fff;
  border: none;
  }
  
  .add-new-task button:hover {
  background-color: coral;
  }
  </style>
  