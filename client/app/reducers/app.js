const defaultState = {
  items: []
};

const AppReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SOME_ACTION':
      return state;
    default:
      return state;
  }
};

export default AppReducer;
