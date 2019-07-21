// usually have a separate reducer for each type of state in the store.

// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of the current state

// returns

// updated version of the state after actioning

function comments(state = [], action) {
    console.log(state, action);
    return state;
}

export default comments;
