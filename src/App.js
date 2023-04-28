import { useState } from 'react';

import Header from './components/Layout/Header.jsx'
import Foods from './components/Foods/Foods'
import Cart from './components/Cart/Cart'


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const toggleCartHandler = () => {
    setCartIsShown(!cartIsShown);
  }

  return (
    <>
      {
        cartIsShown && <Cart toggleCartHandler={toggleCartHandler}/> 
      }
      <Header toggleCartHandler={toggleCartHandler}/>
      <main>
        <Foods/>
      </main>
    </>
  );
}

export default App;
