import React, { Component } from 'react';
import LoadForm from '../containers/LoadForm';
import CandidatesTable from '../containers/CandidatesTable';

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
    <CandidatesTable/>
  </div>
);

export default Main;
