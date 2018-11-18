import React, { Component } from 'react';
import './App.css';
import Sidebar from '../Sidebar/Sidebar';
import AdjustableSidebar from '../AdjustableSidebar/AdjustableSidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Sidebar /> */}
      <AdjustableSidebar />
      </div>
    );
  }
}

export default App;
