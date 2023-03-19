import { useSelector, useDispatch } from 'react-redux';

import { add } from '../../../redux/reducerNavSlice';
import style from '../../App.module.scss';

const FilterCard = () => {
  let state = useSelector(({ nav }) => nav),
    dispatch = useDispatch(),
    addD = (e) => dispatch(add(e.target.id));
  return (
    <ul>
      <li>
        <button type="button" id={0} className={state.buttonFlag[0] ? style.pressed : ''} onClick={addD}>
          Самый дешевый
        </button>
      </li>
      <li>
        <button type="button" id={1} className={state.buttonFlag[1] ? style.pressed : ''} onClick={addD}>
          Самый быстрый
        </button>
      </li>
      <li>
        <button type="button" id={2} className={state.buttonFlag[2] ? style.pressed : ''} onClick={addD}>
          Оптимальный
        </button>
      </li>
    </ul>
  );
};

export default FilterCard;
