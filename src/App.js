import { useState } from 'react';

import Header from './components/Layout/Header.jsx'
import Foods from './components/Foods/Foods'
import Cart from './components/Cart/Cart'

import CartProvider from './store/CartProvider'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const toggleCartHandler = () => {
    setCartIsShown(!cartIsShown);
  }

  return (
    <CartProvider>
      {
        cartIsShown && <Cart toggleCartHandler={toggleCartHandler}/> 
      }
      <Header toggleCartHandler={toggleCartHandler}/>
      <main>
        <Foods/>
      </main>
    </CartProvider>
  );
}

export default App;
