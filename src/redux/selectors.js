// тут описуються селектори - функція яку приймає хук useSelector {useSelector(state => state.filters.status)}
// вони використовуються часто одинакові і тут описуються всі функції селектори а далі імпортуються де необхідно
export const getTasks = state => state.tasks.items;

export const getIsLoading = state => state.tasks.getIsLoading;

export const getError = state => state.tasks.error;

export const getStatusFilter = state => state.filters.status;
