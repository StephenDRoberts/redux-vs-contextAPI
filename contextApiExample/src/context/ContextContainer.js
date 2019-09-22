import React, { createContext } from 'react';

const DATA = [
    'Scone',
    'Welsh Cakes',
    'Pastel de Nata'
]
const DataContext = createContext([[], ()=>{}])
export default DataContext;
