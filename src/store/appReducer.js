export const actionTypes = {
    INCREMENT_COUNT: 'INCREMENT_COUNT',
    DECREMENT_COUNT: 'DECREMENT_COUNT',
};

export const initialState = {
    count: 1,
};

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.INCREMENT_COUNT:
            return { ...state, count: state.count+1 };
        case actionTypes.DECREMENT_COUNT:
            return { ...state, count: state.count-1 };
        default:
            return state;
    }
}


export function increment() {
  return { type: actionTypes.INCREMENT_COUNT };
}

export function decrement() {
  return { type: actionTypes.DECREMENT_COUNT };
}


