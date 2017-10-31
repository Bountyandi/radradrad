import React, { PureComponent } from 'react';
import Main from '../components/Main';

import { Container, Grid, Segment } from 'semantic-ui-react';

export default class App extends PureComponent {
  render() {
    return (
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
  }
}

