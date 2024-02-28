
// Get a reference to the input field and the task list
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add an event Listener to the input field and the task list
taskInput.addEventListener('keypress', function(event) {

    // Check if the Enter key is pressed (key code 13)
    if (event.keyCode === 13) {
        // Retrieve the value of the input field
        const taskText = taskInput.value.trim();

        // If the input is not empty
        if (taskText !== ''){

            //create a list item
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            //Append the new list item to the task list
            taskList.appendChild(listItem);

            //Clear the input field for the next task
            taskInput.value = '';
        }
    }
});