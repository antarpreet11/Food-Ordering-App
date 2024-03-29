import { useContext, useEffect, useState } from 'react'

import CartIcon from '../Cart/CartIcon'
import classes from './HeaderButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderButton = props => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfItems = items.reduce((num, item) => {
    return num + item.amount;
  }, 0)

 
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.toggleCartHandler}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfItems}</span>
    </button>
  )
}

export default HeaderButton