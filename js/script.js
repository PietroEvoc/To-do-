
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
            let listItem = document.createElement('li');

            let textSpan = document.createElement('span');
            textSpan.textContent = taskText;

            let doneButton = document.createElement('button');
            doneButton.textContent = 'Done!';
            doneButton.classList.add('doneButton');

            let dateInput = document.createElement('input');
            dateInput.setAttribute('type', 'date');
            dateInput.classList.add('dateInput');

            let timeInput = document.createElement('input');
            timeInput.setAttribute('type', 'time');
            timeInput.classList.add('timeInput');

            let optionsButton = document.createElement('button');
            optionsButton.textContent = "...";
            optionsButton.classList.add('optionsButton');

            listItem.appendChild(textSpan);
           // listItem.appendChild(dateInput);
           // listItem.appendChild(timeInput);
            listItem.appendChild(optionsButton);
            listItem.appendChild(doneButton);


            //Append the new list item to the task list
            taskList.appendChild(listItem);

            //Clear the input field for the next task
            taskInput.value = '';
        }
    }

    
});

taskList.addEventListener('click', function(event) {

    let clickedElement = event.target;

    if (clickedElement.classList.contains('doneButton')) {
        clickedElement.parentNode.remove();
    }

});

taskList.addEventListener('click', function(event) {

    let clickedElement = event.target;

    if (clickedElement.classList.contains('optionsButton')) {
        
// Open a new window when options button is clicked
let newWindow = window.open('', 'Options Window', 'width=300,height=200');
        
// Construct the content of the new window
let windowContent = `

    <style>
    .dateInput {
        margin: 5px;
        border: 2px solid blue; /* Add border */
        border-radius: 4px; /* Add border radius */
        outline: none; /* Remove outline */
        transition: border-color 0.3s ease; /* Add transition for border color */
        font-size: 16px;
        height: 22px;
        background-color: yellow;
        
    }
    .dateInput:focus {
        border-color: dodgerblue; /* Change border color on focus */
    }
    
    .timeInput {
        margin: 5px;
        border: 2px solid blue; /* Add border */
        border-radius: 4px; /* Add border radius */
        outline: none; /* Remove outline */
        transition: border-color 0.3s ease; /* Add transition for border color */
        font-size: 16px;
        height: 22px;
        background-color: yellow;
    }

    #saveButton {
            color: blue;
            border: solid 2px;
            border-radius: 50%;
            border-color: blue;
            background-color: yellow;
            cursor: pointer;
            margin: 5px;
            width: 100px;
            height: 50px;
            font-size: 18px;
            font-weight: bold;
        
        }
        
    #saveButton:hover {
            color: yellow;
            background-color: blue;
        }

    body {
        background-color: yellow;
        text-align: center;
    }
    
    .dl {
        color: blue;
        font-weight: bold;
    }

    .tl {
        color: blue;
        font-weight: bold;
    }

    

    </style>

    <label for="dateInput" class="dl">Date:</label>
    <input type="date" id="dateInput" class="dateInput"><br><br>
    <label for="timeInput" class="tl">Time:</label>
    <input type="time" id="timeInput" class="timeInput"><br><br>
    <button id="saveButton">Save</button>
`;

// Set the content of the new window
newWindow.document.body.innerHTML = windowContent;

// Add event listener for the save button in the new window
    let saveButton = newWindow.document.getElementById('saveButton');

    saveButton.addEventListener('click', function() {
    // Retrieve values from date and time inputs in the new window
    const dateValue = newWindow.document.getElementById('dateInput').value;
    const timeValue = newWindow.document.getElementById('timeInput').value;
    

    // Append the date and time spans to the original list item
    let originalListItem = clickedElement.closest('li');
    
    if (dateValue !== '') {
        // Create span element for date
        let dateSpan = document.createElement('span');
        dateSpan.textContent = 'Date: ' + dateValue;
        dateSpan.classList.add('dateSpan');
    
        // Append the date span to the original list item
        originalListItem.appendChild(dateSpan);
    }
    
    if (timeValue !== '') {
        // Create span element for time
        let timeSpan = document.createElement('span');
        timeSpan.textContent = 'Time: ' + timeValue;
        timeSpan.classList.add('timeSpan');

    
        // Append the time span to the original list item
        originalListItem.appendChild(timeSpan);
    }
    
    // Close the new window
    newWindow.close();
});
}
});
