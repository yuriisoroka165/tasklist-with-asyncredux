import { useSelector, useDispatch } from "react-redux";

import { statusFilters } from "redux/constants";
import { setStatusFilter } from "redux/filtersSlice";
import { getStatusFilter } from "redux/selectors";
import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
    const dispatch = useDispatch();

    // підписка на стор хуком useSelector
    // приймає функцію яка оголошує один параметр state
    // state це весь обєкт стану
    // функція яку приймає хук use Selector називається селектором і має повертати частину стану яка необхідна поточному компоненту
    // тут отримуємо значення фільтру зі стану Redux
    // const filter = useSelector(state => state.filters.status);

    // використовуємо імпортований селектор
    const filter = useSelector(getStatusFilter);

    const handleFilterChange = filter => dispatch(setStatusFilter(filter));

    return (
        <div className={css.wrapper}>
            {/* selected мається наувазі вибрана кнопка і взалежності від фільтра який активний в сторі буде і вибрана кнопка */}
            <Button
                selected={filter === statusFilters.all}
                onClick={() => handleFilterChange(statusFilters.all)}
            >
                All
            </Button>
            <Button
                selected={filter === statusFilters.active}
                onClick={() => handleFilterChange(statusFilters.active)}
            >
                Active
            </Button>
            <Button
                selected={filter === statusFilters.completed}
                onClick={() => handleFilterChange(statusFilters.completed)}
            >
                Completed
            </Button>
        </div>
    );
};
