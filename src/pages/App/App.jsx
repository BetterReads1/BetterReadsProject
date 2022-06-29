import React, { Component } from "react";
import MainContainer from './MainContainer.jsx';
import { Routes, Route } from 'react-router-dom';
import Table from '../../components/Table.jsx'
import Navbar from '../../components/Navbar.jsx'
import ReviewTable from '../../components/ReviewTable.jsx'

class App extends Component {

  render() {
    return (
      <div id="App">
        <Navbar />
        <div>
          <Table />
        </div>
        <div>
          <ReviewTable />
        </div>
      </div>
    );
  }
};

export default App;