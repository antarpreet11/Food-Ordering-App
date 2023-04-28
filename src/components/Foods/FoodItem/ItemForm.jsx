import { useRef, useState } from 'react'

import classes from './ItemForm.module.css'
import Input from '../../UI/Input'

const ItemForm = props => {

  const amountInputRef = useRef();
  const [isValid, setIsValid] = useState(true);

  const submitHandler = e => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input label="Amount" 
          ref={amountInputRef} 
          input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}/>
        <button>+ Add</button>
        { !isValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  )
}

export default ItemForm