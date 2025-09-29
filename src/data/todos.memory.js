let TODOS = [
  { id: 1, title: "Learn Express", done: false },
  { id: 2, title: "Ship to Render", done: false },
]

const nextId = () => (TODOS.length ? Math.max(...TODOS.map(t => t.id)) + 1 : 1);

module.exports = {
    list: () => TODOS,
    get: (id) => TODOS.find(t => t.id === id),
    create: (title) => {
        const todo = {id: nextId(), title, done: false};
        TODOS.push(todo);
        return todo;
    }, 
    update: (id, patch) => {
        const i = TODOS.findIndex(t => t.id === id);
        if (i === -1) return null;
        TODOS[i] = {...TODOS[i], ...patch}
        return TODOS[i];
    }, 
    remove: (id) => {
        const i = TODOS.findIndex(t => t.id === id);
        if (i === -1) return false;
        TODOS.splice(i, 1);
        return true;
    }
};