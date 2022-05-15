import React from "react";

import { applyMiddleware, compose, legacy_createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//import rootRedux from './rootRedux';
import thunk from 'redux-thunk';
import { putStorages } from "./middleware/toStorage";
import { rootReducer } from "./rootReducer";
//sagas
import createSagaMiddleware from 'redux-saga'


export const store = legacy_createStore(rootReducer,
   composeWithDevTools(
      applyMiddleware(thunk,
         putStorages
      )
   )
)
