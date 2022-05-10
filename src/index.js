import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, compose, createStore } from "redux";
import { Provider} from "react-redux";
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";

import "bootstrap/dist/css/bootstrap.css";
import AppShopLists from './AppShopLists';
import allReducers from './Reducers/allReducers';

const saveState = (shoppingListShufersal, shoppingListOrgani) => {
  try {
    localStorage.setItem('shoppingListShufersal', JSON.stringify(shoppingListShufersal));
    localStorage.setItem('shoppingListOrgani', JSON.stringify(shoppingListOrgani));
  } catch(err) {
    console.log(err);
  }
};

const logger = createLogger({
});

const store = createStore(
  allReducers,
  compose(
    applyMiddleware(logger, thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  saveState(store.getState().shufersalReducer.shoppingList,
            store.getState().organiReducer.shoppingList);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <AppShopLists />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
