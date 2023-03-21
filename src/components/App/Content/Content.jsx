import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import style from '../App.module.scss';
import { filterCard } from '../../../assets/filter/filter';

import FilterCard from './FilterCard/FilterCard';
import CreateCard from './CreateCard/CreateCard';

const Content = () => {
  const [count, setCount] = useState(5);
  const tickets = useSelector(({ getData }) => getData);
  const menu = useSelector(({ menu }) => menu);
  const nav = useSelector(({ nav }) => nav);
  const [card, setCard] = useState([]);

  const render = (card) => {
    return card.slice(0, count).map((el, i) => {
      return <CreateCard key={i} state={el} />;
    });
  };

  useEffect(() => {
    setCard(filterCard(tickets.data, menu, nav.buttonFlag));
  }, [tickets.data, menu, count, nav]);

  return (
    <main className={style.content}>
      <FilterCard />
      {!tickets.stop && <h1>Loading...</h1>}
      {Object.values(menu).some((el) => el) ? (
        render(card)
      ) : (
        <h2>Рейсов, подходящих под заданные фильтры, не найдено</h2>
      )}
      <button className={style.buttonAdd} onClick={() => setCount(count + 5)}>
        показать еще 5 билетов
      </button>
    </main>
  );
};

export default Content;
