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
    this.downloadFile = this.downloadFile.bind(this);
  }

  componentWillMount(){
    this.props.fetchCandidates();
  }

  downloadFile(event){
    this.props.getFile(event.target.name);
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

{/* comp */}
{/*

        <Button
          basic
          color='teal'
          onClick={this.loadCandidates}>Fetch Candidates</Button>
*/}

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

        {/* /comp */}
      </Container>
    )
  }
}


export default connect(null, { uploadFile, fetchCandidates, getFile })(LoadForm)
