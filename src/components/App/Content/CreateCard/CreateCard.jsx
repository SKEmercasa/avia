import { dateFly, dateFormat, dateInterval } from '../../../../assets/api/date';

const CreateCard = ({ state }) => {
  let arrival = dateFly(state.segments[0].date, state.segments[0].duration);
  let arrivalRew = dateFly(state.segments[1].date, state.segments[1].duration);

  return (
    <article className="card">
      <header>
        <span>{`${state.price}P`}</span>
        <img
          src={`https://pics.avs.io/99/36/${state.carrier}.png`}
          alt={state.carrier}
          srcSet={`https://pics.avs.io/99/36/${state.carrier}.png`}
        />
      </header>
      <section>
        <div>
          <span>{`${state.segments[0].origin} - ${state.segments[0].destination}`}</span>
          <span>{`${dateFormat(state.segments[0].date)} - ${dateFormat(arrival)}`}</span>
        </div>
        <div>
          <span>в пути</span>
          <span>{dateInterval(state.segments[0].duration)}</span>
        </div>
        <div>
          <span>{state.segments[0].stops.length} пересадки</span>
          <span>{state.segments[0].stops.join(', ')}</span>
        </div>
      </section>
      <section>
        <div>
          <span>{`${state.segments[1].origin} - ${state.segments[1].destination}`}</span>
          <span>{`${dateFormat(state.segments[1].date)} - ${dateFormat(arrivalRew)}`}</span>
        </div>
        <div>
          <span>в пути</span>
          <span>{dateInterval(state.segments[1].duration)}</span>
        </div>
        <div>
          <span>{state.segments[1].stops.length} пересадки</span>
          <span>{state.segments[1].stops.join(', ')}</span>
        </div>
      </section>
    </article>
  );
};

export default CreateCard;
