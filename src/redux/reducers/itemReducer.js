// ACTION CONSTANTS FOR ADDING DATA TO REDUX

const ADD = 'ADD'
// const EDIT = 'EDIT'
// const DELETE = 'DELETE'
// const FINISHED = 'FINISHED'

// ACTION CREATORS
const addTicket = (ticket, projNumber) => {
  return {
    type: ADD,
    ticket: ticket,
    projNumber: projNumber
  }
}

export function handleAddItem(data, projNumber) {
  return dispatch => dispatch(addItem(data, projNumber))
}

//REDUCER  
const initialState = {
  data: [],
  loading: false,
  error: null
};

export const dataReducer = (state = initialState, action) => {


  switch (action.type) {
    case ADD:
      let addState = [...state.data]
      addState[0].projects[action.projNumber].tasks.push(action.ticket)
      return { data: addState }

    case EDIT:
      let editState = [...state.data]
      editState[0].projects[action.projNumber].tasks[action.ticketNum] = action.ticket
      return { data: editState }

    case DELETE:
      let deleteState = [...state.data]
      deleteState[0].projects[action.projNumber].tasks.splice(action.ticketNum, 1)
      return { data: deleteState }

    default:
      return state;
  }
}