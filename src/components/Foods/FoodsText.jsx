import classes from './FoodsText.module.css'

const FoodsText = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Breakfast, Delivered every morning</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious breakfast at home.
      </p>
      <p>
        All our meals are cooked with high-quality fresh ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  )
}

export default FoodsText