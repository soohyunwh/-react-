import PropTypes from 'prop-types';

function TodoItem({ todo, setTodos }) {
  const toggleComplete = () => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = () => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span onClick={toggleComplete} style={{ cursor: 'pointer' }}>
        {todo.text}
      </span>
      <button onClick={deleteTodo}>삭제</button>
    </li>
  );
}

// 🚨 prop-types 추가 (여기서 todo와 setTodos 타입을 명시!)
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default TodoItem;

  