import React from 'react';
import { connect } from 'react-redux';
import {Button, Table} from 'react-bootstrap';
import {handleDeleteItem} from "./modules/itemReducer";

const ReduxApp = (props) => {

    const deleteEntry =(itemIndex) => {
        props.dispatch(handleDeleteItem(itemIndex));
    }

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
                    <td><Button onClick={()=>deleteEntry(index)}>
                        <i className="fas fa-trash"></i>
                    </Button></td>
                </tr>
            );
        });
    
        return itemsToShow;
    };

    return (
        <Table striped bordered hover className="redux-app col-6">
            {renderHeaders()}
            <tbody>
                {renderData(props.data)}
            </tbody>
        </Table>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.itemReducer.data
    };
};
export default connect(mapStateToProps)(ReduxApp);

