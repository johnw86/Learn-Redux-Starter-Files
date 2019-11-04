// usually have a separate reducer for each type of state in the store.

// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of the current state

// returns

// updated version of the state after actioning

function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            // return existing state plus new comment
            return [
                ...state,
                {
                    text: action.comment,
                    user: action.author
                }
            ];
        case 'REMOVE_COMMENT':
            return [
                // from the start to the one we want to delete
                ...state.slice(0, action.i),
                // after the one we delete to end
                ...state.slice(action.i + 1)
            ];
    }
    return state;
}

function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            // take the current state
            ...state,
            // overrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        };
    }
    return state;
}

export default comments;
