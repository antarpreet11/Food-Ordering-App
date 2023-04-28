import React from 'react'
import bfImg from '../../assets/breakfast.jpg'
import classes from './Header.module.css'
import HeaderButton from './HeaderButton'

const Header = (props) => {
  return (
    <>
        <header className={classes.header}>
            <h1>Breakfast Club</h1>
            <HeaderButton toggleCartHandler={props.toggleCartHandler}/>
        </header>
        <div className={classes['main-image']}>
            <img src={bfImg} alt="Breakfast Food on a table"/>
        </div>
    </>
  )
}

export default Header