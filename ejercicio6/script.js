function addTask() {
  var taskList = document.getElementById('taskList');
  var taskInput = document.getElementById('newTask');
  var newTask = taskInput.value;
  
  if (newTask.trim() === '') {
    alert('Por favor, escribe una tarea.');
    return;
  }
  
  var li = document.createElement('li');
  li.innerText = newTask;
  
  var deleteButton = document.createElement('button');
  deleteButton.innerText = 'Eliminar';
  deleteButton.onclick = function() {
    this.parentNode.remove();
  };
  
  li.appendChild(deleteButton);
  
  taskList.appendChild(li);
  
  taskInput.value = ''; // Clear input field after adding task
}

// Optional: You can add a feature to listen for enter key to add task
document.getElementById('newTask').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTask();
    }
});
