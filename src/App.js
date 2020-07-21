import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import AddUser from './containers/AddUser'
import Header from './components/Header'
import List from './containers/ProductList'




const App = () =>
  (
    <div className="App">
      <div><Header/></div>
      <AddUser/>
      <div>
      <List/>
      </div>

    </div>
  );

export default App;
