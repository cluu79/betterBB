import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import { Switch, Route } from 'react-router-dom'

const LaptopPage = () => (
  <div>
    <h1>Laptop Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/Laptops" component={LaptopPage} />
      </Switch>
    </div>
  );
}

export default App;
