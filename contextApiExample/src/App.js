import React, { createContext, useState } from 'react';
import { ContextApp } from './context/ContextApp.js';
import { AddItem } from './AddItem.js';
import './App.css';

function App() {

    const DATA = [
        'Scone',
        'Welsh Cakes',
        'Pastel de Nata'
    ]
    const [data, updateData] = useState(DATA)
    const DataContext = createContext()
    
    return (
        <DataContext.Provider value={data} updateData={updateData} >
            <div className="App">
                <h1>Context API Bakery List</h1>
                <ContextApp />
                <AddItem />
            </div>
        </DataContext.Provider>
    );
}

export default App;
