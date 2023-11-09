import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './slice'

const store = configureStore({
    reducer: {
        notes: notesReducer,
    },
});

export default store;
