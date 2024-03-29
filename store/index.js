export const state = () => ({
     tasks: [
        {
            id:1,
            todoName: 'Task1',
            isCompleted:true,
            isEditing:false,
        },
        {
            id:2,
            todoName: 'Task2',
            isCompleted:false,
            isEditing:false,
        },
     ]
})

export const mutations = {
    saveTask(state,inputValue){
        state.tasks.push({
            id:state.tasks.length + 1,
            todoName:inputValue,
            isCompleted:false,
            isEditing:false,
        })
       
    },
      toggleStatus(state,id) {
        let task = state.tasks.find(item => item.id === id);
        if(task){
            task.isCompleted = !task.isCompleted;
        }
      },
      deleteTask(state,id){
          const index = state.tasks.findIndex(task => task.id === id);
          if (index !== -1) {
            confirm('Do you want to delete this task?');
            state.tasks.splice(index, 1);
          } else {
              console.log("Task not found for ", index);
          }
      },
      startEditing(state, id) {
          const task = state.tasks.find(task => task.id === id);
          if (task) {
            task.isEditing = true;
            task.editedTaskName = task.todoName;
          }
      },
      finishEditing(state, id) {
          const task = state.tasks.find(task => task.id === id);
          if (task) {
            task.isEditing = false;
            task.todoName = task.editedTaskName;
          }
      },
}

export const getters = {
    getTasks (state){
      return state.tasks;
    },
    completedTask(state) {
        return state.tasks.filter(todo => todo.isCompleted)
    },
    pendingTask(state){
         return state.tasks.filter(task =>!task.isCompleted)
    },
}