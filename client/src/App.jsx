import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// components
import Container from './components/container';

// action
import { get_db } from './controller/action.js'

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_db());
  }, [])

  return (
    <>
      <Container />
    </>
  )
}

export default App;
