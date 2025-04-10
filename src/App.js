import logo from './logo.svg';
import './App.css';
import React, { useState, useContext } from 'react';

// Create a context
const ThemeContext = React.createContext();

function ThemeToggle() {
  const theme = useContext(ThemeContext);
  return <div>The current theme is {theme}</div>;
}

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeToggle />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
