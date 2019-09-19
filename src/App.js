import React from 'react';
import { ReduxApp } from './redux/ReduxApp.js';
import { AddItem } from './AddItem.js'
import './App.css';

function App() {
  const DATA = [
    'Scone',
    'Welsh Cakes',
    'Pastel de Nata',
  ];

  return (
    <div className="App">
      <h1>Bakery List</h1>
      <ReduxApp data={DATA} />
      {/* <ContextApp className="context-app" data = {DATA}/> */}
      <AddItem />
    </div>
  );
}

export default App;
