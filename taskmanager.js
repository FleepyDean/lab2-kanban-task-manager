let tasks = [];
let nextTaskId = 1;

const modal = document.getElementById('task-modal');
const titleInput = document.getElementById('task-title-input');
const descInput = document.getElementById('task-desc-input');
const priorityInput = document.getElementById('task-priority-input');
const dateInput = document.getElementById('task-date-input');
const currentColumnId = document.getElementById('current-column-id');
const currentTaskIdInput = document.getElementById('current-task-id');
const taskCounter = document.getElementById('task-counter');

function updateTaskCounter() {
    taskCounter.textContent = tasks.length;
}

function openModal(columnId = '', taskId = '') {
    currentColumnId.value = columnId;
    currentTaskIdInput.value = taskId;
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
    // Clear inputs
    titleInput.value = '';
    descInput.value = '';
    priorityInput.value = 'high';
    dateInput.value = '';
    currentColumnId.value = '';
    currentTaskIdInput.value = '';
}
