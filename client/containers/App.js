import React, { Component } from 'react';
import Main from '../components/Main';

import { Container, Grid, Segment } from 'semantic-ui-react';

const App = () => (
  <Grid columns='equal'>
    <Grid.Column>
    </Grid.Column>
    <Grid.Column width={10}>
      <Segment>
        <Main/>
      </Segment>
    </Grid.Column>
    <Grid.Column>
    </Grid.Column>
  </Grid>
);

export default App
