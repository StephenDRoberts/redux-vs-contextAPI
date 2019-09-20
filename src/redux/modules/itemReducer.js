// ACTION CONSTANTS FOR ADDING DATA TO REDUX
const ADD = 'ADD';

// ACTION CREATORS
const addItem = (item) => {
    return {
        type: ADD,
        item: item
    };
};

export function handleAddItem(item) {
    return dispatch => dispatch(addItem(item));
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

        default:
            return state;
    }
};