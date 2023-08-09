import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { get_data } from './redux/cartSlice.js'

import Container from './components/Container.jsx'

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_data());
  }, [])

  return (
    <>
      <Container />
    </>
  )
}

export default App;
