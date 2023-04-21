import { useSelector } from "react-redux";

import { statusFilters } from "redux/constants";
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
    // масив завдань зі стану Redux
    const tasks = useSelector(getTasks);
    // значення фільтра зі стану Redux
    const statusFilter = useSelector(getStatusFilter);
    // масив завдань які потрібно показувати
    const visibleTasks = getVisibleTasks(tasks, statusFilter);

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
