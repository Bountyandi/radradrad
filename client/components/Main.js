import React, { Component } from 'react';
import LoadForm from '../containers/LoadForm';
import List from '../containers/List';

import { Header } from 'semantic-ui-react';

const Main = () => (
  <div>
    <Header
      textAlign='center'
      color='grey'
      size='huge'>
      JSON PARSER + EDITOR + GENERATOR
    </Header>
    <LoadForm/>
    <List/>
  </div>
);

export default Main;
