// usually have a separate reducer for each type of state in the store.

// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of the current state

// returns

// updated version of the state after actioning

// all reducers run when a action is dispatched, its up to you to write the code to take action or not

function posts(state = [], action) {
    console.log('The post will change');
    console.log(state, action);
    return state;
}

export default posts;
