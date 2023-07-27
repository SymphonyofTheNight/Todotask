import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/index.scss'

// redux imports 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

//  redux reducer export default combine reducers
import redux from './redux';

const store = createStore(redux, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
