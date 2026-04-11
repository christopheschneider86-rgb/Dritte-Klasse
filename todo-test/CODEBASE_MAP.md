# Codebase Map – Todo-App

**Last updated:** 2026-04-11  
**Purpose:** A simple, lightweight Todo application that lets users create, mark as done, and delete tasks with localStorage persistence.

---

## File Structure

```
todo-test/
├── index.html          # Main HTML entry point with form and list container
├── app.js              # Core app logic: todo state management, DOM rendering
├── style.css           # Minimal styling for layout and visual feedback
└── CODEBASE_MAP.md     # This file
```

---

## Modules & Key Functions

### index.html
**Purpose:** HTML entry point that provides the UI structure (input field, button, list container).  
**Lines:** 9 | **Complexity:** low

- No functions; static HTML structure
- Imports `app.js` and `style.css`
- Contains input with id `todoInput` and list with id `todoList` that app.js targets

### app.js
**Purpose:** Manages todo state, localStorage persistence, and dynamic DOM rendering.  
**Lines:** 28 | **Complexity:** low

Key functions:
- `addTodo()` — reads input field, creates todo object with id and done flag, saves and re-renders
- `toggleTodo(id)` — flips done status of a todo and updates display
- `deleteTodo(id)` — removes a todo from the list
- `save()` — serializes todos array to localStorage
- `render()` — generates HTML list items from todos array and updates the DOM

### style.css
**Purpose:** Minimal styling for layout and visual effects (strikethrough for completed items).  
**Lines:** 3 | **Complexity:** low

- Body: font family, max-width container, centered margin
- `.done span`: strikethrough text and gray color for completed todos
- Button: cursor pointer

---

## Shared State & Storage

| Key/Variable | Where set | Where read | What it holds |
|---|---|---|---|
| `STORAGE_KEY` (constant) | app.js line 1 | app.js (save/load) | String `'todos_v1'` — key for localStorage |
| `todos` (array) | app.js line 2 (initial load from localStorage) | addTodo, toggleTodo, deleteTodo, render | Array of todo objects: `{id, text, done}` |
| localStorage entry at `'todos_v1'` | save() function | app.js line 2 (on page load) | JSON stringified todos array |

---

## Known Issues & Fixes

| Problem | File | Status | Notes |
|---|---|---|---|
| No input validation beyond trim() | app.js | ⚠️ Open | addTodo() does not prevent duplicate entries or very long text; consider adding length/uniqueness checks |
| No edit functionality | — | ⚠️ Open | Users can only add, mark done, or delete; no way to update existing todo text |
| Inline onclick handlers | index.html, app.js | ⚠️ Open | Uses onclick attributes; modern best practice is event listeners for separation of concerns |
| No error handling | app.js | ⚠️ Open | If localStorage is full or disabled, save() will fail silently |

---

## How to Use This Map (for Claude)

- **To add a feature** (e.g., edit todos, filter by done/pending): start in `app.js`, add a new function above `render()`, then add corresponding buttons/logic in the HTML or as onclick handlers
- **To fix persistence bugs**: check `save()` and the initial load at line 2 in `app.js`
- **To change styling**: edit `style.css` — it's minimal and all rules are visible
- **To understand the flow**: load → `todos` array from localStorage → user clicks button → calls `addTodo/toggleTodo/deleteTodo` → calls `save()` then `render()`
- **To debug the UI**: search `index.html` for element IDs (`todoInput`, `todoList`) and cross-reference them in `app.js`

---

## Changelog

| Date | Change | Files affected |
|---|---|---|
| 2026-04-11 | Initial codebase map creation | CODEBASE_MAP.md |

---

## Quick Facts

- **Total lines:** 40 (9 HTML + 28 JS + 3 CSS)
- **No dependencies:** pure vanilla JavaScript, no frameworks or libraries
- **Storage:** localStorage only (no database)
- **Browser API used:** localStorage, DOM manipulation, Date.now() for todo IDs
