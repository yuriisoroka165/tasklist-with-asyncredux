import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasks } from "redux/operations";
import { selectVisibleTasks } from "redux/selectors";
import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";

export const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectVisibleTasks);
    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <ul className={css.list}>
            {tasks.map(task => (
                <li className={css.listItem} key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
};
