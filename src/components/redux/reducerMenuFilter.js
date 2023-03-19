const GETFLAG = 'getflag';
const GETALLFLAG = 'getallflag';
const GETEFFECTFLAG = 'geteffectflag';

const initialState = {
  allCheck: true,
  zeroCheck: true,
  oneCheck: true,
  twoCheck: true,
  threeCheck: true,
};

const reducerClickFilter = (state = initialState, action) => {
  let key = action.flagId;
  switch (action.type) {
    case GETFLAG:
      return action.stateCheck ? { ...state, [key]: true } : { ...state, [key]: false };
    case GETALLFLAG:
      return action.check;
    case GETEFFECTFLAG:
      return action.check ? { ...state, allCheck: true } : { ...state, allCheck: false };
    default:
      return state;
  }
};

export const getFlagAC = (flagId, stateCheck) => ({ type: GETFLAG, flagId, stateCheck });
export const getAllFlagAC = (check) => ({ type: GETALLFLAG, check });
export const getEffectFlagAC = (check) => ({ type: GETEFFECTFLAG, check });

export const getFlag = (e) => (dispatch) => {
  dispatch(getFlagAC(e.target.id, e.target.checked));
};
export const getAllFlag = (e) => (dispatch) => {
  dispatch(getAllFlagAC(AllFilter(e.target.checked)));
};
export const getEffectFlag = (check) => (dispatch) => {
  dispatch(getEffectFlagAC(check));
};

const AllFilter = (check) => {
  if (check) {
    return {
      allCheck: true,
      zeroCheck: true,
      oneCheck: true,
      twoCheck: true,
      threeCheck: true,
    };
  } else {
    return {
      allCheck: false,
      zeroCheck: false,
      oneCheck: false,
      twoCheck: false,
      threeCheck: false,
    };
  }
};

export default reducerClickFilter;
