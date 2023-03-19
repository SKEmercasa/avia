import { connect } from 'react-redux';

import { getFlag, getAllFlag, getEffectFlag } from '../../redux/reducerMenuFilter';

import Menu from './Menu';

const MenuContainer = (props) => {
  return <Menu {...props} />;
};

const mapStateToProps = ({ menu }) => {
  return {
    allCheck: menu.allCheck,
    zeroCheck: menu.zeroCheck,
    oneCheck: menu.oneCheck,
    twoCheck: menu.twoCheck,
    threeCheck: menu.threeCheck,
  };
};

export default connect(mapStateToProps, { getFlag, getAllFlag, getEffectFlag })(MenuContainer);
