// ACTION CONSTANTS FOR ADDING DATA TO REDUX
const ADD = 'ADD';
const DELETE = 'DELETE';

// ACTION CREATORS
const addItem = (item) => {
    return {
        type: ADD,
        item: item
    };
};

const deleteItem = (itemIndex) => {
    return {
        type: DELETE,
        itemIndex: itemIndex
    };
};

export function handleAddItem(item) {
    return dispatch => dispatch(addItem(item));
}

export function handleDeleteItem(itemIndex) {
    return dispatch => dispatch(deleteItem(itemIndex));
}

const DATA = [
    'Scone',
    'Welsh Cakes',
    'Pastel de Nata'
];

// REDUCER  
const initialState = {
    data: DATA
};

export const itemReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD:
            let addState = [...state.data];
            addState.push(action.item.name);
            return { data: addState };

        case DELETE:
            console.log(action)
            let deleteState = [...state.data];
            deleteState.splice(action.itemIndex,1);
            return { data: deleteState };

        default:
            return state;
    }
};