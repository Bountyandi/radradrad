import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uploadFile } from '../actions/asyncActions';

import { Input } from 'semantic-ui-react';

class LoadForm extends Component {

  constructor(props) {
    super(props);

    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  handleFileUpload2( event ) {

    debugger
    event.preventDefault();

    const file = event.target.files[0];


    debugger

    this.props.uploadFile(file, file.name)
  }


  handleFileUpload( event ) {

    event.preventDefault();

    const file = event.target[0].files[0]


    this.props.uploadFile(event.target, file.name)
  }

  render() {

    return (
      <div>





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


        <form
          id="uploadForm"
          encType="multipart/form-data"
          action="/uploadFile/"
          method="post"
        >
          <input type="file" name="file"/>
          <input type="submit" value="Upload Image" name="submit" />
        </form>





        {/*

        <form onChange={this.handleFileUpload}
              encType="multipart/form-data">

          <input
            type='file'
            name='userPhoto'
            ref={(input) => {this.fileInput = input}}/>

          <input type="submit" value="Upload File" name="submit" />

        </form>

*/}

        {/*<button>Submit</button>*/}

      </div>
    )
  }
}


export default connect(null, { uploadFile })(LoadForm)
