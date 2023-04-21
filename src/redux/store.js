// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";

// import { rootReducer } from "./reducer";

// // змінна для інструментів розробника
// const enhencer = devToolsEnhancer();

// // створення стору (перший аргумент функція редюсер з логікою зміни стану redux)
// // другий аргумент че початковий стан і він не обовязковий
// // третій аргумент це функція розширення можливостей стору не обовязкова, може бути другим аргументом якщоо не вкащаний початковий стан тут це розширення для браузера
// export const store = createStore(rootReducer, enhencer);

import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filters: filtersReducer,
    },
});
