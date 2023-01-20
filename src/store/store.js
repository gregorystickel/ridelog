import { createStore } from '@reduxjs/toolkit'



let initialState = {
  rideList: []
}



const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem('state');
    return stateStr ? JSON.parse(stateStr) : initialState;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};



const reducer = (state = persistedStore, action ) => {
   switch(action.type) {
      case 'ADDRIDE':      
      console.log("Action", action)
      return {...state, rideList: [ ...state.rideList, action.payload]}
      default:
        return state
      }
      
  }



const persistedStore = loadFromLocalStorage();

const store = createStore(reducer);  

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
 



export default store;