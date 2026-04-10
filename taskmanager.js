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
    titleInput.value = '';
    descInput.value = '';
    priorityInput.value = 'high';
    dateInput.value = '';
    currentColumnId.value = '';
    currentTaskIdInput.value = '';
}

// Task 2 Starts Here
function createTaskCard(taskObj) {
    const li = document.createElement('li');
    li.classList.add('task-card');
    li.setAttribute('data-id', taskObj.id);
    li.setAttribute('data-priority', taskObj.priority); // Needed for filtering

    // Title & Inline Editing
    const titleSpan = document.createElement('span');
    titleSpan.classList.add('task-title');
    titleSpan.textContent = taskObj.title;

    // Inline Editing Logic
    titleSpan.addEventListener('dblclick', function() {
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = taskObj.title;
        editInput.classList.add('task-title-input');
        
        li.insertBefore(editInput, titleSpan);
        titleSpan.style.display = 'none';
        editInput.focus();

        const commitChange = () => {
            const newTitle = editInput.value.trim() || taskObj.title;
            taskObj.title = newTitle;
            titleSpan.textContent = newTitle;
            
            const taskIndex = tasks.findIndex(t => t.id === taskObj.id);
            if(taskIndex !== -1) tasks[taskIndex].title = newTitle;

            titleSpan.style.display = 'block';
            editInput.remove();
        };

        editInput.addEventListener('blur', commitChange);
        editInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') commitChange();
        });
    });

    // Description
    const descP = document.createElement('p');
    descP.classList.add('task-desc');
    descP.textContent = taskObj.description;

    // Priority & Date Container
    const metaDiv = document.createElement('div');
    metaDiv.classList.add('task-meta');

    const priorityBadge = document.createElement('span');
    priorityBadge.classList.add('priority-badge', `priority-${taskObj.priority}`);
    priorityBadge.textContent = taskObj.priority;

    const dateSpan = document.createElement('span');
    dateSpan.textContent = taskObj.dueDate;

    metaDiv.appendChild(priorityBadge);
    metaDiv.appendChild(dateSpan);

    // Edit & Delete Buttons
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('task-actions');

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.setAttribute('data-action', 'edit');
    editBtn.setAttribute('data-id', taskObj.id);
    editBtn.textContent = 'Edit';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.setAttribute('data-action', 'delete');
    deleteBtn.setAttribute('data-id', taskObj.id);
    deleteBtn.textContent = 'Delete';

    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);

    li.appendChild(titleSpan);
    li.appendChild(descP);
    li.appendChild(metaDiv);
    li.appendChild(actionsDiv);

    return li;
}

function addTask(columnId, taskObj) {
    taskObj.id = nextTaskId++;
    tasks.push(taskObj);

    const columnList = document.getElementById(columnId);
    const card = createTaskCard(taskObj);
    columnList.appendChild(card);
    
    updateTaskCounter();
}

function deleteTask(taskId) {
    const card = document.querySelector(`li[data-id="${taskId}"]`);
    if (!card) return;

    card.classList.add('fade-out');
    card.addEventListener('transitionend', () => {
        card.remove();
        tasks = tasks.filter(t => t.id !== taskId);
        updateTaskCounter();
    });
}
