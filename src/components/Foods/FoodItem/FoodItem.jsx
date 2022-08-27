import classes from './FoodItem.module.css'
import ItemForm from './ItemForm'

const FoodItem = props => {
    const price = `$${props.price.toFixed(2)}`

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <ItemForm />
            </div>
        </li>
    )
}

export default FoodItem