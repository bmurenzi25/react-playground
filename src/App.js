import React from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import './App.css';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';

const App = () => {
  return (
    <div className='App'>
      <div className='ui raised very padded text container segment'>
          <AuthContextProvider>
                <ThemeContextProvider>
                    <Navbar />
                    <TodoList />
                </ThemeContextProvider>
          </AuthContextProvider>
      </div>
    </div>
  );
};

export default App;
