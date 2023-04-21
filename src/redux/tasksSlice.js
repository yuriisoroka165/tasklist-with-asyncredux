import { createSlice } from "@reduxjs/toolkit";

import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";

const tasksInitialState = {
    items: [],
    isLoading: false,
    error: null,
};

const hadlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState: tasksInitialState,
    extraReducers: {
        [fetchTasks.pending]: hadlePending,
        [fetchTasks.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchTasks.rejected]: handleRejected,
        [addTask.pending]: hadlePending,
        [addTask.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addTask.rejected]: handleRejected,
        [deleteTask.pending]: hadlePending,
        [deleteTask.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                task => task.id === action.payload.id
            );
            state.items.splice(index, 1);
        },
        [deleteTask.rejected]: handleRejected,
        [toggleCompleted.pending]: hadlePending,
        [toggleCompleted.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                task => task.id === action.payload.id
            );
            state.items.splice(index, 1, action.payload);
        },
        [toggleCompleted.rejected]: handleRejected,
    },
});

export const tasksReducer = tasksSlice.reducer;
