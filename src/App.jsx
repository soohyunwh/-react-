import { useState } from 'react';
import DateDisplay from './components/DateDisplay';
import Clock from './components/Clock';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const [todos, setTodos] = useState([]);

  return (
    <div className='app'>
      <div className='title-box'>
        <h1>{currentYear}년 {currentMonth}월</h1>
      </div>

    <div className='content-box'>
      <DateDisplay currentDate={new Date()}/>
      <Clock/>
    </div>

    <div className='todo-box'>
      <h2>📝오늘의 할 일📝</h2>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
    </div>
  );
}

export default App;
