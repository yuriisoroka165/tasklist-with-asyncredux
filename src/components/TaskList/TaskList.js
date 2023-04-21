import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { statusFilters } from "redux/constants";
import { fetchTasks } from "redux/operations";
import { getTasks, getStatusFilter } from "redux/selectors";
import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";

const getVisibleTasks = (tasks, statusFilter) => {
    switch (statusFilter) {
        case statusFilters.active:
            return tasks.filter(task => !task.completed);
        case statusFilters.completed:
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
};

export const TaskList = () => {
    const dispatch = useDispatch();
    // масив завдань зі стану Redux
    const tasks = useSelector(getTasks);
    // значення фільтра зі стану Redux
    const statusFilter = useSelector(getStatusFilter);
    // масив завдань які потрібно показувати
    const visibleTasks = getVisibleTasks(tasks, statusFilter);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <ul className={css.list}>
            {visibleTasks.map(task => (
                <li className={css.listItem} key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
};
