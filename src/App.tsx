import Todo from './pages/Todo/Todo';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
}

export default App;
