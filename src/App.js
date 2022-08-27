import { Fragment } from 'react'
import Header from './components/Layout/Header.jsx'
import Foods from './components/Foods/Foods'


function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Foods />
      </main>
    </Fragment>
  );
}

export default App;
