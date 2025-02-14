import PropTypes from 'prop-types';
import { useState } from 'react';

function TodoList({ todos, setTodos }) {
  const [input, setInput] = useState("");

  // 📝 할 일 추가
  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  // ⌨️ Enter 키 입력 시 추가
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  // ✅ 완료 토글
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 🗑️ 할 일 개별 삭제
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 🧹 전부 삭제
  const clearAllTodos = () => {
    setTodos([]);
  };

  return (
    <div>
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={addTodo}>추가</button>
      </div>

      {/* 전부 삭제 버튼 */}
      {todos.length > 0 && (
        <button className="clear-button" onClick={clearAllTodos}>
          전부 삭제
        </button>
      )}

      {/* 📝 할 일 목록 */}
      <ul className="todo-list">
        {todos.length === 0 ? (
          <p>할 일이 없습니다 😊</p>
        ) : (
          todos.map(todo => (
            <li
              key={todo.id}
              className={`todo-item ${todo.completed ? "completed" : ""}`}
            >
              {/* ✅ 체크박스 추가 */}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              <span>{todo.text}</span>
              <button onClick={() => deleteTodo(todo.id)}>삭제</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default TodoList;
