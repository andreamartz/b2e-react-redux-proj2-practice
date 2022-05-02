//actions
// export const LOGIN = 'events/LOGIN'   // name of reducer / name of action
// export const LOGOUT = 'events/LOGOUT'
// export const ADD_EVENT = 'events/ADD_EVENT'
// export const DELETE_EVENT = 'events/DELETE_EVENT'
// export const EDIT_EVENT = 'events/EDIT_EVENT'
// export const APPLY_EDIT_EVENT = 'events/APPLY_EDIT_EVENT'
// export const CANCEL_EVENT = 'events/CANCEL_EVENT'

// we don't export the initial state
const initialState = {
    isLoggedIn: false,
    // events: [],
    // eventToEdit: null
}

function reducer(state = initialState, action) {
    switch (action?.type) {
        // case LOGIN:
        //     return {
        //         ...state,    // spread operator...
        //         isLoggedIn: action.credentials.username === 'madison' &&
        //             action.credentials.password === 'mypass'//
        //     }
        // case LOGOUT:
        //     return {
        //         ...state,
        //         isLoggedIn: false
        //     }
        // case ADD_MEMO:
        //     return {
        //         ...state,
        //         memos: [...state.memos, action.memo]
        //     }
        // case DELETE_MEMO:
        //     return {
        //         ...state,
        //         memos: state.memos.filter(memo => memo.id !== action.id)
        //     }
        // case EDIT_MEMO:
        //     return {
        //         ...state,
        //         memoToEdit: action.memo
        //     }
        // case APPLY_EDIT_MEMO:
        //     return {
        //         ...state,
        //         memos: state.memos.map(memo => memo.id === state.memoToEdit.id ? state.memoToEdit : memo),
        //         memoToEdit: null
        //     }
        // case CANCEL_MEMO:
        //     return {
        //         ...state,
        //         memoToEdit: null
        //     }
        default:
            return state
    }
}

export default reducer;