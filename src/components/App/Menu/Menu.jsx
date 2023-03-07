import { useEffect } from 'react';

import style from '../App.module.scss';

const Menu = ({ allCheck, zeroCheck, oneCheck, twoCheck, threeCheck, getFlag, getAllFlag, getEffectFlag }) => {
  useEffect(() => {
    if (zeroCheck && oneCheck && twoCheck && threeCheck) {
      getEffectFlag(true);
    } else {
      getEffectFlag(false);
    }
  }, [zeroCheck, oneCheck, twoCheck, threeCheck]);
  return (
    <section className={style.sider}>
      <fieldset>
        <legend>Количество пересадок</legend>
        <div>
          <input type="checkbox" id="allCheck" name="scales" onChange={getAllFlag} checked={allCheck} />
          <label htmlFor="allCheck">Все</label>
        </div>
        <div>
          <input type="checkbox" id="zeroCheck" name="scales" onChange={getFlag} checked={zeroCheck} />
          <label htmlFor="zeroCheck">Без пересадок</label>
        </div>
        <div>
          <input type="checkbox" id="oneCheck" name="scales" onChange={getFlag} checked={oneCheck} />
          <label htmlFor="oneCheck">1 пересадка</label>
        </div>
        <div>
          <input type="checkbox" id="twoCheck" name="scales" onChange={getFlag} checked={twoCheck} />
          <label htmlFor="twoCheck">2 пересадки</label>
        </div>
        <div>
          <input type="checkbox" id="threeCheck" name="scales" onChange={getFlag} checked={threeCheck} />
          <label htmlFor="threeCheck">3 пересадки</label>
        </div>
      </fieldset>
    </section>
  );
};

export default Menu;
