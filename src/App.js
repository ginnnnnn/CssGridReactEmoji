import React, { Component } from 'react';
import Emojis from './components/Emojis/Emojis';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
            <span role="img" className="zone green" aria-label="fox">🦊</span>
            <span role="img" className="zone red"  aria-label="fox">🐰</span>
            <span role="img" className="zone blue" aria-label="fox">🐸</span>
            <span role="img" className="zone yellow" aria-label="fox">🦁</span>
            <span role="img" className="zone purple" aria-label="fox">🐯</span>
            <span role="img" className="zone brown" aria-label="fox">🐭</span>
            <span role="img" className="zone green" aria-label="fox">🦄</span>
            <span role="img" className="zone red"  aria-label="fox">🐲</span>
            <span role="img" className="zone blue" aria-label="fox">🐷</span>
            <span role="img" className="zone yellow" aria-label="fox">🐺</span>
            <span role="img" className="zone purple" aria-label="fox">🐼</span>
            <span role="img" className="zone brown" aria-label="fox"> 🐻</span>
            <Emojis symbol="🐑" label="sheep"/>
      </div>
    );
  }
}

export default App;
