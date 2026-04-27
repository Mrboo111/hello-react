// src/utils.js

// TODOを完了・未完了でカウントする関数
export const countTodos = (todos) => {
  const completed = todos.filter(t => t.completed).length;
  const active = todos.length - completed;
  return { completed, active };
};

// 完了したTODOをすべて削除した後のリストを返す関数
export const clearCompleted = (todos) => {
  return todos.filter(t => !t.completed);
};

export const toggleCompleted = (todos, id) => {
  return todos.map(todo => 
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
};