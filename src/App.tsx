import React from 'react';

import './scss/app.scss'

import {Header} from './components/Header'
import { Home } from './components/pages/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
