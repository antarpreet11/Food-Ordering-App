import classes from './AvailableFoods.module.css'
import Card from '../UI/Card'
import FoodItem from './FoodItem/FoodItem';

const DUMMY_BF = [
    {
      id: 'm1',
      name: 'Blueberry Pancakes',
      description: 'Fresh picked Blueberries',
      price: 11.99,
    },
    {
      id: 'm2',
      name: 'Breakfast Burritos',
      description: 'Loaded with Bacon, Sausages and Eggs',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'French Toast',
      description: 'Casserole with the creamiest custard filling',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Breakfast Skillet',
      description: 'Cheesy Bacon and Egg Hash',
      price: 18.99,
    },
  ];

const AvailableFoods = () => {
    const foodslist = DUMMY_BF.map(food => 
    <FoodItem 
    key={food.id}
    name={food.name}
    description={food.description}
    price={food.price}
    />
    ); 

    return (
        <section className={classes.meals}>
          <Card>
            <ul>
                {foodslist}
            </ul>
          </Card>  
        </section>
    )
}

export default AvailableFoods