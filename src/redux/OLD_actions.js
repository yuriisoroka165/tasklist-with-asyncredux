// екшени - це обєкти які передають дані з компоненту у стор
// вони показують яка подія відбулася в інтерфейсі
// вони являються єдиним джерелом інформації для стору
// екшени це статичні обєкти значення властивості payload в них задати динамічно неможливо.
// генератори екшенів це функції які можуть приймати аргументи після чого створюють та повертають екшнз однаковим значенням властивості type але різним payload

// import { nanoid } from "nanoid";

// export const addTask = text => {
//     return {
//         type: "tasks/addTask",
//         payload: {
//             id: nanoid(),
//             completed: false,
//             text,
//         },
//     };
// };

// export const deleteTask = taskId => {
//     return {
//         type: "tasks/deleteTask",
//         payload: taskId,
//     };
// };

// export const toggleCompleted = taskId => {
//     return {
//         type: "tasks/toggleCompleted",
//         payload: taskId,
//     };
// };

// export const setStatusFilter = value => {
//     return {
//         type: "filters/setStatusFilter",
//         payload: value,
//     };
// };

import { createAction, nanoid } from "@reduxjs/toolkit";

export const addTask = createAction("tasks/addTask", text => {
    return {
        payload: {
            text,
            id: nanoid(),
            completed: false,
        },
    };
});

export const deleteTask = createAction("tasks/deleteTask");

export const toggleCompleted = createAction("tasls/toggleCompleted");

export const setStatusFilter = createAction("tasks/setStatusFilter");
