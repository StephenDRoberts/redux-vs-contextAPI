import React, { useContext, useState } from 'react';
import ContextApp from './context/ContextApp.js';
import AddItem from './AddItem.js';
import './App.css';
import DataContext from './context/ContextContainer.js'

const DATA = [
    'Scone',
    'Welsh Cakes',
    'Pastel de Nata'
]
// const DataContext = createContext(42)

function App() {
    const [data, updateData] = useState(DATA)
    // let dataContext = useContext(DataContext)
    
    console.log(`App State ${data}`)
    // console.log(dataContext)
    return (
        <DataContext.Provider value={data} updateData={()=>updateData()}>
            <div className="App">
                <h1>Context API Bakery List</h1>
                <ContextApp />
                <AddItem />
            </div>
        </DataContext.Provider>
    );
}

export default App;

