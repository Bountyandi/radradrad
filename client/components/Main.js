import React, { Component } from 'react';
import LoadForm from '../containers/LoadForm';
import CandidatesTable from '../containers/CandidatesTable';
import DownloadButtons from '../containers/DownloadButtons';

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
    <DownloadButtons/>
    <CandidatesTable/>
  </div>
);

export default Main;
