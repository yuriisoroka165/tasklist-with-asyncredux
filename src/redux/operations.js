import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64422fb133997d3ef90a17ac.mockapi.io";

export const fetchTasks = createAsyncThunk(
    "tasks/fetchAll",
    // Колбек функція, в якій виконується запит, називається payloadCreator
    // Використовуємо символ підкреслення як ім'я першого параметра,
    // тому що в цій операції він нам не потрібен
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/tasks");
            // При успішному запиті повертаємо проміс із даними
            return response.data;
        } catch (error) {
            // При помилці запиту повертаємо проміс
            // який буде відхилений з текстом помилки
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addTask = createAsyncThunk(
    "tasks/addTask",
    async (text, thunkAPI) => {
        try {
            const response = await axios.post("tasks", { text });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteTask = createAsyncThunk(
    "tasks/deleteTask",
    async (taskId, thunkAPI) => {
        try {
            const response = await axios.delete(`tasks/${taskId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const toggleCompleted = createAsyncThunk(
    "tasks/toogleCompleted",
    async (task, thunkAPI) => {
        try {
            const response = await axios.put(`/tasks/${task.id}`, {
                completed: !task.completed,
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
