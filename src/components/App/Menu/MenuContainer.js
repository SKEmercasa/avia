import { connect } from 'react-redux';

import { getFlag, getAllFlag, getEffectFlag } from '../../redux/reducer-click-filter';

import Menu from './Menu';

const MenuContainer = (props) => {
  return <Menu {...props} />;
};

const mapStateToProps = ({ allCheck, zeroCheck, oneCheck, twoCheck, threeCheck }) => {
  return {
    allCheck,
    zeroCheck,
    oneCheck,
    twoCheck,
    threeCheck,
  };
};

export default connect(mapStateToProps, { getFlag, getAllFlag, getEffectFlag })(MenuContainer);
