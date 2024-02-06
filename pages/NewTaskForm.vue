<template>
    <div class="add-container">
        <div class="add-new-task">
            {{ header }}
            <div class="input-field">
                <input v-model="newTask" placeholder="Enter task here..." />
                <button @click="addTask"  @keyup.enter="addTask">Add</button>
            </div>
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
 .add-container{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
 }

 .add-new-task{
    display: flex;
    flex-direction: column;
    gap:30px;
    width:400px;
    height: 500px;
    font-size: 1.8rem;
    font-weight: 600;
    color: brown;
    background-color: #fc9f9f;
    border-radius: 20px;
    gap: 20px;
    text-align: center;
    padding: 60px 30px;

  
 }
  .input-field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
    margin-top: 40px;

  }
  
  .input-field input {
    width: 300px;
    height: 30px;
    border: none;
    outline: none;
    background-color: #c7cbd6;
    border-radius: 20px;
    font-size: 18px;
    padding: 18px;
    color: black;
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
  