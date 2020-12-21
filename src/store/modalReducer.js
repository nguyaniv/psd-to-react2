const initialState = {
  modal: false
};


export default function (state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_MODAL':
      return {
        ...state,
        modal:action.boo
      };

    default:
      return state;
  }
}
