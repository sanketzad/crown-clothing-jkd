import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./cart-icon.styles.css";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors.js";

const CartIcon = ({ toggleCartHidden, totalItem }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-cart" />
    <span className="item-count">{totalItem}</span>
  </div>
);
const mapStateToProps = createStructuredSelector({
  totalItem: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
