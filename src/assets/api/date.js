import add from 'date-fns/add';
import format from 'date-fns/format';
import minutesToHours from 'date-fns/minutesToHours';

export const dateFly = (date, time) => {
  return add(new Date(date), { minutes: time });
};

export const dateFormat = (time) => {
  let hour = format(new Date(time), 'HH');
  let min = format(new Date(time), 'mm');
  return `${hour}:${min}`;
};

export const dateInterval = (minute) => {
  let hour = minutesToHours(minute);
  let min = minute % 60;
  return `${hour.toString().padStart(2, '0')}ч ${min.toString().padStart(2, '0')}м`;
};
