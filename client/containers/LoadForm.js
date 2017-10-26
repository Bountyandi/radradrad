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
    this.loadCandidates = this.loadCandidates.bind(this);
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




{/*

        <form
          onSubmit={this.handleFileUpload}
          id="uploadForm"
          encType="multipart/form-data"
              //action="/uploadFile"
              //method="post"
        >
          <input type="file" name="file"/>
          <input type="submit" value="Upload Image" name="submit" />
        </form>

*/}

        <form
          id="uploadForm"
          encType="multipart/form-data"
          action="/uploadFile/"
          method="post"
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


      </Container>
    )
  }
}


export default connect(null, { uploadFile, fetchCandidates })(LoadForm)
