import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  uploadFile,
  fetchCandidates
} from '../actions/asyncActions';


import { Input, Button, Container } from 'semantic-ui-react';

class LoadForm extends Component {

  static propTypes = {
    uploadFile: PropTypes.func.isRequired,
    fetchCandidates: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  componentWillMount(){
    this.props.fetchCandidates();
  }

  handleFileUpload( event ) {
    event.preventDefault();
    const file = event.target[0].files[0];
    this.props.uploadFile(event.target, file.name);
  }

  render() {

    return (
      <Container>

        <br/>

        <form
          target='_self'
          id='uploadForm'
          action='/api/uploadFile'
          method='post'
          encType='multipart/form-data'
        >
          <input type='file' name='file' />
          <input
            type='submit'
            value='Upload JSON file'
            name='submit' />
        </form>
        <br/>

      </Container>
    )
  }
}


export default connect(null, { uploadFile, fetchCandidates })(LoadForm)
