const todoList = [];

function renderTodoList() {
	let todoListHTML = '';

	todoList.forEach(function(todoObject, index) {
		const { name, duedate, duetime } = todoObject;
		const html = `
			<div class="task">
				<div class="task-info">
					<p><strong>${name}</strong></p>
					<p>Date: ${duedate} ${duetime ? `at ${duetime}` : ''}</p>
				</div>
				<button class="delete-btn" onclick="deleteTodo(${index});">Delete</button>
			</div>
		`;
		todoListHTML += html;
	});

	document.querySelector('.res').innerHTML = todoListHTML;
}

function addTodo() {
	const nameInput = document.querySelector('.js-ip');
	const dateInput = document.querySelector('.js-dp');
	const timeInput = document.querySelector('.js-tp');

	const name = nameInput.value.trim();
	const duedate = dateInput.value;
	const duetime = timeInput.value;

	if (name === '') {
		alert('Please enter a todo name.');
		return;
	}

	todoList.push({ name, duedate, duetime });

	nameInput.value = '';
	dateInput.value = '';
	timeInput.value = '';

	renderTodoList();
}

function deleteTodo(index) {
	todoList.splice(index, 1);
	renderTodoList();
}

renderTodoList();
