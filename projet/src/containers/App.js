import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';
import Footer from '../components/Footer';

const App = () => (
  <Router>
    <div>
      <Main />
      <Footer />
    </div>
  </Router>
)

export default App;
