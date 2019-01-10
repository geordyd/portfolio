import React, { Component } from 'react';
//import { Route } from 'react-router';
import { Layout } from './components/Layout';


export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        {/* <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} /> */}
      </Layout>
    );
  }
}
