// хук useDispatch використовується для відправки екшена у стор коли відбувається зміна в інтерфейсі
// він повертає посилання на функцію надсилання екшенів dispatch з обєкта створеного стора Redux
import { useDispatch } from "react-redux";

import { addTask } from "redux/tasksSlice";
import { Button } from "components/Button/Button";
import css from "./TaskForm.module.css";

export const TaskForm = () => {
    // dispatch - посилання на функцію відправки екшенів
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        // викликається генератор екшену та передається текст з інпута для властивості patload
        // відправка результату створення завдання
        dispatch(addTask(form.elements.text.value));
        form.reset();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input
                className={css.field}
                type="text"
                name="text"
                placeholder="Enter task text..."
            />
            <Button type="submit">Add task</Button>
        </form>
    );
};
