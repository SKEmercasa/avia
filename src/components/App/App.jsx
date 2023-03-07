import style from '../App/App.module.scss';
import logo from '../../assets/images/avia.svg';
import logoCard from '../../assets/images/logoCard.svg';

import MenuContainer from './Menu/MenuContainer';
import FilterCard from './FilterCard/FilterCard';

const App = () => {
  return (
    <div className={style.app}>
      <header className={style.header}>
        <img src={logo} alt="logo" srcSet={logo}></img>
      </header>
      <div className={style.wrapper}>
        <MenuContainer />
        <main className={style.content}>
          <FilterCard />
          <article className="card">
            <header>
              <span>13 400 P</span>
              <img src={logoCard} alt="logo" srcSet={logoCard} />
            </header>
            <section>
              <div>
                <span>mow – hkt</span>
                <span>10:45 – 08:00</span>
              </div>
              <div>
                <span>в пути</span>
                <span>21ч 15м</span>
              </div>
              <div>
                <span>2 пересадки</span>
                <span>HKG, JNB</span>
              </div>
            </section>
          </article>
          <article className="card">
            <header>
              <span>13 400 P</span>
              <img src={logoCard} alt="logo" srcSet={logoCard} />
            </header>
            <section>
              <div>
                <span>mow – hkt</span>
                <span>10:45 – 08:00</span>
              </div>
              <div>
                <span>в пути</span>
                <span>21ч 15м</span>
              </div>
              <div>
                <span>2 пересадки</span>
                <span>HKG, JNB</span>
              </div>
            </section>
          </article>
          <article className="card">
            <header>
              <span>13 400 P</span>
              <img src={logoCard} alt="logo" srcSet={logoCard} />
            </header>
            <section>
              <div>
                <span>mow – hkt</span>
                <span>10:45 – 08:00</span>
              </div>
              <div>
                <span>в пути</span>
                <span>21ч 15м</span>
              </div>
              <div>
                <span>2 пересадки</span>
                <span>HKG, JNB</span>
              </div>
            </section>
          </article>
          <article className="card">
            <header>
              <span>13 400 P</span>
              <img src={logoCard} alt="logo" srcSet={logoCard} />
            </header>
            <section>
              <div>
                <span>mow – hkt</span>
                <span>10:45 – 08:00</span>
              </div>
              <div>
                <span>в пути</span>
                <span>21ч 15м</span>
              </div>
              <div>
                <span>2 пересадки</span>
                <span>HKG, JNB</span>
              </div>
            </section>
          </article>
          <button className={style.buttonAdd}>показать еще 5 билетов</button>
        </main>
      </div>
      <footer className={style.footer}></footer>
    </div>
  );
};

export default App;
