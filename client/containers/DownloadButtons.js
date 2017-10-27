import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getFile
} from '../actions/asyncActions';


import { Input, Button, Container } from 'semantic-ui-react';

class DownloadButtons extends Component {

  static propTypes = {
    getFile: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.downloadFile = this.downloadFile.bind(this);
  }

  downloadFile(event){
    this.props.getFile(event.target.name);
  }

  render() {

    return (
      <Container>
        <br/>
        <Button
          basic
          color='yellow'
          name='json'
          onClick={this.downloadFile}>Download JSON file</Button>
        <Button
          basic
          color='green'
          name='csv'
          onClick={this.downloadFile}>Download CSV file</Button>
        <br/>
        <br/>
      </Container>
    )
  }
}

export default connect(null, { getFile })(DownloadButtons)
