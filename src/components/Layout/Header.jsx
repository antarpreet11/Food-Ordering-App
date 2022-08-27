import React from 'react'
import bfImg from '../../assets/breakfast.jpg'
import classes from './Header.module.css'
import HeaderButton from './HeaderButton'

const Header = () => {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>Breakfast Menu</h1>
            <HeaderButton />
        </header>
        <div className={classes['main-image']}>
            <img src={bfImg} alt="Breakfast Food on a table"/>
        </div>
    </React.Fragment>
  )
}

export default Header