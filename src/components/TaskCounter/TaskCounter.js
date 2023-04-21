import { useSelector } from "react-redux";

import { getTasks } from "redux/selectors";
import css from "./TaskCounter.module.css";

export const TaskCounter = () => {
    // масив завдань зі стану redux
    const tasks = useSelector(getTasks);

    const count = tasks.reduce(
        (accumulator, task) => {
            if (task.completed) {
                accumulator.completed += 1;
            } else {
                accumulator.active += 1;
            }
            return accumulator;
        },
        { active: 0, completed: 0 }
    );

    return (
        <div>
            <p className={css.text}>Active: {count.active}</p>
            <p className={css.text}>Completed: {count.completed}</p>
        </div>
    );
};
