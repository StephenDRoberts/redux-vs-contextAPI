import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

export const ReduxApp = (props) => {
  
  const [items, updateItems] = useState(props.data)

  const renderHeaders = () => {
    return( <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
    </tr>
  </thead>
    )
  }

  const renderData = (items) => {
    const itemsToShow = [];

    items.forEach((item, index) => {
      itemsToShow.push(
        <tr index={index} key={`redux-${index}`} >
          <td>{index}</td>
          <td>{item}</td>
        </tr>
      );
  })
  return itemsToShow;
}

  return (
    <Table striped bordered hover className="redux-app col-4">
      {renderHeaders()}
      <tbody>
        {renderData(items)}
      </tbody>
    </Table>
  );
};
