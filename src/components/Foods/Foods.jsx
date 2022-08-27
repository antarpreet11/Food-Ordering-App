import { Fragment } from 'react'
import FoodsText from "./FoodsText"
import AvailableFoods from "./AvailableFoods"

const Foods = () => {
  return (
    <Fragment>
        <FoodsText />
        <AvailableFoods />
    </Fragment>
  )
}

export default Foods