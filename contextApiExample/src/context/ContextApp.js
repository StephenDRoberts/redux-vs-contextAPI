import React, { useContext } from 'react';
import DataContext from './ContextContainer.js'
import { Table } from 'react-bootstrap';

function ContextApp({ children }){
    let value = useContext(DataContext)
    console.log(value)

    const renderHeaders = () => {
        return ( 
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                </tr>
            </thead>
        );
    };

    const renderData = (items) => {
        const itemsToShow = [];
    
        items.forEach((item, index) => {
            itemsToShow.push(
                <tr index={index} key={`redux-${index}`} >
                    <td>{index}</td>
                    <td>{item}</td>
                </tr>
            );
        });
    
        return itemsToShow;
    };

    return (
        <Table striped bordered hover className="redux-app col-6">
            {renderHeaders()}
            <tbody>
                {renderData(value)}
            </tbody>
        </Table>
    );
}
export default ContextApp;