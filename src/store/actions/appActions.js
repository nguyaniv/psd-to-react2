export function toggleModal(boo) {
  return async dispatch => {
   
    try {
      dispatch({ type: 'SET_MODAL',boo });

    } catch (err) {
      console.log('ops', err);
    }
  };
}