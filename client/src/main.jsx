import ReactDOM from 'react-dom/client'

// redux
import { Provider } from 'react-redux'
import { store } from './redux/reducer.js'

//  imports 
import App from './App.jsx'
import './scss/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
