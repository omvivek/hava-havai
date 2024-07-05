import React, { Component } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import AirportsTable from '../AirportsTable';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Sidebar />
          <div className="content">
            
            <AirportsTable />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
