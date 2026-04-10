# 📋 Vanilla JS Kanban Task Board

A dynamic, frontend-only Kanban task board built entirely with vanilla JavaScript. This project focuses on mastering core DOM manipulation techniques, strictly utilizing the `createElement` API and avoiding `innerHTML` or external frameworks. 

## ✨ Features

* **Complete CRUD Operations:** Create, read, update and delete tasks dynamically within three columns (To Do, In Progress, Done).
* **Strict DOM API Usage:** All UI elements are generated safely using `document.createElement()`, `setAttribute()` and `appendChild()` to prevent HTML injection vulnerabilities.
* **Event Delegation:** Optimized event handling utilizing a single listener per column to handle all dynamically generated action buttons.
* **Inline Editing:** Double-click a task title to instantly swap to an input field and commit changes via the `Enter` key or clicking away.
* **Priority Filtering:** Instantly filter tasks by High, Medium or Low priority without page reloads using conditional CSS class toggling.
* **Smooth Animations:** Features CSS fade-out transitions for deleting tasks and a visually appealing staggered animation effect when clearing the Done column.

## 🛠️ Technologies Used

* **HTML5:** Semantic structure, accessible forms and hidden modal design.
* **CSS3:** Flexbox layout, custom priority badges and CSS transition animations.
* **JavaScript (ES6+):** Pure vanilla JS logic, array-based state management and direct DOM manipulation.
