import React from 'react';

import style from './App.module.scss';
import logo from './assets/arts/avia.svg';
import logoCard from './assets/arts/logoCard.svg';

const App = () => {
  return (
    <div className={style.app}>
      <header className={style.header}>
        <img src={logo} alt="logo" srcSet={logo}></img>
      </header>
      <div className={style.wrapper}>
        <menu className={style.sider}>
          <fieldset>
            <legend>Количество пересадок</legend>
            <div>
              <input type="checkbox" id="allCheck" name="scales" />
              <label htmlFor="allCheck">Все</label>
            </div>
            <div>
              <input type="checkbox" id="zeroCheck" name="scales" />
              <label htmlFor="zeroCheck">Без пересадок</label>
            </div>
            <div>
              <input type="checkbox" id="oneCheck" name="scales" />
              <label htmlFor="oneCheck">1 пересадка</label>
            </div>
            <div>
              <input type="checkbox" id="twoCheck" name="scales" />
              <label htmlFor="twoCheck">2 пересадки</label>
            </div>
            <div>
              <input type="checkbox" id="threeCheck" name="scales" />
              <label htmlFor="threeCheck">3 пересадки</label>
            </div>
          </fieldset>
        </menu>
        <main className={style.content}>
          <ul>
            <li>
              <button type="button">Самый дешевый</button>
            </li>
            <li>
              <button type="button">Самый быстрый</button>
            </li>
            <li>
              <button type="button">Оптимальный</button>
            </li>
          </ul>
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
