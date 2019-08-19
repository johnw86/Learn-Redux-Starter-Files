// usually have a separate reducer for each type of state in the store.

// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of the current state

// returns

// updated version of the state after actioning

// all reducers run when a action is dispatched, its up to you to write the code to take action or not

function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            const i = action.index;
            return [
                ...state.slice(0, i),
                {
                    ...state[i],
                    likes: state[i].likes + 1
                },
                ...state.slice(i + 1)
            ];
        // code
        default:
            return state;
    }

    var newState = { ...state };
    state.likes++;
    return newState;
}

export default posts;
