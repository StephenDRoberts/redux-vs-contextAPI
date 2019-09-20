import React from 'react';
import ReduxApp from './redux/ReduxApp.js';
import AddItem from './AddItem.js'
import './App.css';

function App() {
  

  return (
    <div className="App">
      <h1>Redux Bakery List</h1>
      <ReduxApp />
      <AddItem />
    </div>
  );
}

export default App;
