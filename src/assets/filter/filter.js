function outFilter(i, card) {
  return card.filter((el) => el.segments[0].stops.length == i);
}

function inFilter(menu) {
  return Object.values(menu).filter((el, i) => i >= 1);
}

function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

function reFilter(card, flag) {
  let point = Object.values(flag);
  switch (true) {
    case point[0]:
      return card.sort(byField('price'));
    case point[1]:
      return card.sort((a, b) => (a.segments[0].duration > b.segments[0].duration ? 1 : -1));
    case point[2]:
      return card.sort(byField('price')).sort((a, b) => (a.segments[0].duration > b.segments[0].duration ? 1 : -1));
    default:
      return card;
  }
}

export const filterCard = (card, menu, nav) => {
  let list = inFilter(menu);
  if (menu.allCheck) {
    return reFilter(card, nav);
  } else {
    let temp = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i]) {
        temp.push(...outFilter(i, card));
      }
    }
    return reFilter(temp, nav);
  }
};
