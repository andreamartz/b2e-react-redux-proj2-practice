import reducer from './events';
// {ADD_MEMO, DELETE_MEMO, APPLY_EDIT_MEMO, LOGIN, LOGOUT, EDIT_MEMO, CANCEL_MEMO}

// 'should initialize with isLoggedIn false'
it('should initialize with isLoggedIn false', () => {
    const state = reducer();
    expect(state?.isLoggedIn).toBe(false);
})

// do I also need a test of the initial values of events and eventToEdit?

// it('should set isLoggedIn to false when the LOGIN action is performed and username is wrong', () => {
//
// })

// 'should set isLoggedIn to false when the LOGIN action is performed and password is wrong'
// 'should set isLoggedIn to true when the LOGIN action is performed and credentials are correct'
// 'should set isLoggedIn to false when the LOGOUT action is performed'
// 'should add a memo when ADD_MEMO action is performed'
// 'should start with memoToEdit being undefined'

// it('should set memoToEdit when EDIT_MEMO is performed', () => {
//     const memo = 'my memo'
//     const state = reducer(undefined, {type: EDIT_MEMO, memo})
//     expect(state.memoToEdit).toBe(memo)
// })
//
// it('should update all fields of a memo and set memoToEdit to null when APPLY_EDIT_MEMO is performed', () => {
//     const currentState = reducer()
//     currentState.memos = [
//         {id: 0, title: 'memo1'},
//         {id: 1, title: 'memo2'},
//         {id: 2, title: 'memo3'}
//     ]
//     currentState.memoToEdit = {id: 1, title: 'new'}
//     const state = reducer(currentState, {type: APPLY_EDIT_MEMO})
//     expect(state.memos).toStrictEqual([
//         {id: 0, title: 'memo1'},
//         {id: 1, title: 'new'},
//         {id: 2, title: 'memo3'}
//     ])
//     expect(state.memoToEdit).toBe(null)
// })
//
// it('should set memoToEdit to null when CANCEL_MEMO is performed', () => {
//     const currentState = reducer()
//     currentState.memoToEdit = 'some value'
//     const state = reducer(undefined, {type: CANCEL_MEMO})
//     expect(state.memoToEdit).toBe(null)
// })