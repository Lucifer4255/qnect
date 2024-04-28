
// import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';

import {configureStore, combineReducers} from '@reduxjs/toolkit';
import answerSlice from '../slices/Answers'
import questionSlice from '../slices/Answers'

// Combine reducers
const rootReducer = combineReducers({
    // users: userReducer,
    question: questionSlice,
    answer: answerSlice,
});

// Apply Redux Thunk middleware
// const middleware = applyMiddleware(thunk);

// Initial state
// const initialState = {};

// Create store with reducers, initial state, and middleware

//export const store = createStore(answerReducer, middleware);


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk,
      serializableCheck: false,
    }),
});


