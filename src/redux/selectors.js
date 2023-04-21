import { createSelector } from "@reduxjs/toolkit";

import { statusFilters } from "./constants";

// тут описуються селектори - функція яку приймає хук useSelector {useSelector(state => state.filters.status)}
// вони використовуються часто одинакові і тут описуються всі функції селектори а далі імпортуються де необхідно
export const selectTasks = state => state.tasks.items;

export const selectIsLoading = state => state.tasks.getIsLoading;

export const selectError = state => state.tasks.error;

export const selectStatusFilter = state => state.filters.status;

export const selectVisibleTasks = createSelector(
    [selectTasks, selectStatusFilter],
    (tasks, statusFilter) => {
        console.log("Calculating visible tasks. Now memoized!");

        switch (statusFilter) {
            case statusFilters.active:
                return tasks.filter(task => !task.completed);
            case statusFilters.completed:
                return tasks.filter(task => task.completed);
            default:
                return tasks;
        }
    }
);

// Використовуємо createSelector та напишемо мемоізований селектор підрахунку кількості завдань selectTaskCount. Він залежить лише від масиву завдань, тому використовуємо один вхідний селектор selectTasks.
// Відкрийте вкладку Console в інструментах розробника, змінюйте значення фільтра та подивіться результат - повідомлення про обчислення кількості завдань немає. Тепер обчислення виконуються лише якщо зміниться масив завдань.
export const selectTaskCount = createSelector([selectTasks], tasks => {
    console.log("Calculating task count. Now memoized!");
    return tasks.reduce(
        (count, task) => {
            if (task.completed) {
                count.completed += 1;
            } else {
                count.active += 1;
            }
            return count;
        },
        { active: 0, completed: 0 }
    );
});
