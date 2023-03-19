import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSearchId, getCard } from '../redux/reducerGetData';
import style from '../App/App.module.scss';
import logo from '../../assets/images/avia.svg';

import MenuContainer from './Menu/MenuContainer';
import Content from './Content/Content';

const App = () => {
  const state = useSelector(({ getData }) => getData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchId());
  }, []);

  useEffect(() => {
    if (!state.stop && state.searchId) {
      dispatch(getCard(state.searchId));
    }
  }, [state.status]);

  return (
    <div className={style.app}>
      <header className={style.header}>
        <img src={logo} alt="logo" srcSet={logo}></img>
      </header>
      <div className={style.wrapper}>
        <MenuContainer />
        <Content />
      </div>
      <footer className={style.footer}></footer>
    </div>
  );
};

export default App;
