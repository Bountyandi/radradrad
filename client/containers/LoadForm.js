import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  uploadFile,
  fetchCandidates,
  getFile
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
    this.loadCandidates = this.loadCandidates.bind(this);
    this.downloadFile = this.downloadFile.bind(this);
  }

  downloadFile(event){
    this.props.getFile(event.target.name);
  }

  loadCandidates() {
    //validation if state is FILE_UPLOADED
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


        <form
          id='uploadForm'
          encType='multipart/form-data'
          action='/uploadFile/'
          method='post'
        >
          <Input type='file' name='file'/>
          <Input
            as='button'
            type='submit'
            value='Upload JSON file'
            name='submit' />
        </form>

        <br/>

        <button
          onClick={this.loadCandidates}> Fetch Candidates</button>


        <br/>
        <br/>

        <button
          name='json'
          onClick={this.downloadFile}>Download JSON file</button>

        <button
          name='csv'
          onClick={this.downloadFile}>Download CSV file</button>


      </Container>
    )
  }
}


export default connect(null, { uploadFile, fetchCandidates, getFile })(LoadForm)
