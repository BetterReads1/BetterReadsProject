import React, { Component } from "react";
import MainContainer from './MainContainer.jsx';
import { Routes, Route } from 'react-router-dom';
import Table from '../../components/Table.jsx'
import Navbar from '../../components/Navbar.jsx'
import ReviewTable from '../../components/ReviewTable.jsx'


const App = () => {{
    return (
      <div id="App">
        <Navbar />
        <div class ="both">
          <div class="left">
            <Table />
          </div>
          <div class="right">
            <ReviewTable />
          </div>
        </div>
      </div>
    );
  }
};

export default App;