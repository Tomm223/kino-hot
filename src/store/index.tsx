import React from "react";

import { applyMiddleware, compose, legacy_createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//import rootRedux from './rootRedux';
import thunk from 'redux-thunk';
import { toLocalStorage } from "./middleware/toLocalStorage";
import { urlParams } from "./middleware/urlParams";
import { rootReducer } from "./rootReducer";


export const store = legacy_createStore(rootReducer,
   composeWithDevTools(
      applyMiddleware(thunk,

      )
   )
)
