// Get references to the input field, list, and buttons
const inputField = document.querySelector('input');
const taskList = document.querySelector('ol');
const addButton = document.getElementById('addTask');

// Event listener for adding tasks
addButton.addEventListener('click', () => {
    const taskText = inputField.value.trim();
    if (taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        inputField.value = ''; // Clear the input field
    }
});
