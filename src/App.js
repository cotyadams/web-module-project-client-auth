import React from 'react';
import './App.css';
import { Route, Link, Routes} from 'react-router-dom';
import Login from './components/login';
import Home from './components/Home';
import LogOut from './components/LogOut';
import FriendsList from './components/FriendsList';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import reducers from './state/reducers';
import { createStore, applyMiddleware, compose } from 'redux'
import PrivateRoute from './components/PrivateRoute'

let store
export const resetStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
}
resetStore();
function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <nav className='navigation'>
          <Link
            to='/login'
            className='link'
          >Log In</Link>
          <Link
            to='/LogOut'
            className='link'
          >Log Out</Link>
          <Link
            to='/FriendsList'
            className='link'
          >Friends List</Link>
          <Link
            to='/Logout'
            className='link'
          >Add Friend</Link>
        </nav>
          <Routes>
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/LogOut'
            element={<LogOut />}
          />
          <Route
            path='/FriendsList'
            element={
              <PrivateRoute>
                <FriendsList />
              </PrivateRoute>
            }
          />
          
          </Routes>
      </div>
    </Provider>
    
  );
}

export default App;
