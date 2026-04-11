const STORAGE_KEY = 'todos_v1';
let todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

function addTodo() {
  const text = document.getElementById('todoInput').value.trim();
  if (!text) return;
  todos.push({ id: Date.now(), text, done: false });
  save(); render();
}
function toggleTodo(id) {
  todos = todos.map(t => t.id === id ? {...t, done: !t.done} : t);
  save(); render();
}
function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  save(); render();
}
function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(todos)); }
function render() {
  const list = document.getElementById('todoList');
  list.innerHTML = todos.map(t =>
    `<li class="${t.done ? 'done' : ''}">
      <span onclick="toggleTodo(${t.id})">${t.text}</span>
      <button onclick="deleteTodo(${t.id})">✕</button>
    </li>`
  ).join('');
}
render();
