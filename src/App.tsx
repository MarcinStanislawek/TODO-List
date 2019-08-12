import React from 'react';
import './App.css';
import Form from './components/form';
import DisplayTasks from './components/displayTasks';
import Logo from './components/logo';



const App: React.FC = () => {
  return (
    <div className="App">
      <Logo />
      <Form />
      <DisplayTasks />
      
    </div>
  );
}

export default App;
