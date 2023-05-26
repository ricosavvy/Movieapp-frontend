// reducer.js
const initialState = {
    user: null,
    token: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOGIN':
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  