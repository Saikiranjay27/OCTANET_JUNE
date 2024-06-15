

document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const addTaskBtn = document.getElementById('add-task-btn');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
   
        const title = document.getElementById('task-title').value.trim();
        const dueDate = document.getElementById('task-due-date').value;
        const priority = document.getElementById('task-priority').value;

       
        if (title === '') {
            alert('Please enter a task title.');
            return;
        }


        const taskItem = document.createElement('div');
        taskItem.className = `task-item ${priority}`; // Add priority class

        const taskDetails = document.createElement('div');
        taskDetails.className = 'task-details';

  
        const taskTitle = document.createElement('p');
        taskTitle.textContent = title;
        taskTitle.className = 'task-title';

        const taskDueDate = document.createElement('p');
        taskDueDate.textContent = `Due: ${dueDate}`;
        taskDueDate.className = 'task-due-date';

        const taskPriority = document.createElement('p');
        taskPriority.textContent = `Priority: ${priority}`;
        taskPriority.className = 'task-priority';

        
        taskDetails.appendChild(taskTitle);
        taskDetails.appendChild(taskDueDate);
        taskDetails.appendChild(taskPriority);


        const taskActions = document.createElement('div');
        taskActions.className = 'task-actions';

  
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.title = 'Mark as complete';
        completeBtn.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.title = 'Delete task';
        deleteBtn.addEventListener('click', () => {
            taskItem.remove();
        });

        taskActions.appendChild(completeBtn);
        taskActions.appendChild(deleteBtn);

        
        taskItem.appendChild(taskDetails);
        taskItem.appendChild(taskActions);

        
        taskList.appendChild(taskItem);

        
        document.getElementById('task-title').value = '';
        document.getElementById('task-due-date').value = '';
        document.getElementById('task-priority').value = 'low';
    }
});

