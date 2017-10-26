import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Table, Input, Button } from 'semantic-ui-react';


export default class EditableItem extends Component {

  constructor(props){
    super(props);

    this.state = {
      _id: props._id,
      candidateName: props.candidateName,
      candidateStatus: props.candidateStatus,
      candidateNeedOffer: props.candidateNeedOffer
    };

    this.updateCandidate = this.updateCandidate.bind(this);

    //this.handleName = this.handleName.bind(this);
    //this.handleStatus = this.handleStatus.bind(this);
    //this.handleNeedOffer = this.handleNeedOffer.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  //handleName(event) {
  //  debugger
  //  this.setState({
  //    candidateName: event.target.value
  //  });
  //}
  //handleName(event) {
  //  debugger
  //  this.setState({
  //    candidateName: event.target.value
  //  });
  //}
  //handleStatus(event) {
  //  this.setState({
  //    candidateStatus: event.target.value
  //  });
  //}
  handleInput(ev) {
    debugger
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  updateCandidate() {
    this.props.updateCandidate({ candidate: this.state });
    this.props.offEditable();
  }

  render() {

    const { _id, candidateName, candidateStatus, candidateNeedOffer } = this.props;
    const candidate = { _id, candidateName, candidateStatus, candidateNeedOffer };

    return (
      <Table.Row>
        <Table.Cell textAlign='center'>
          <Input
            value={this.state.candidateName}
            onChange={this.handleInput}
            name='candidateName'/>
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Input
            value={this.state.candidateStatus}
            onChange={this.handleInput}
            name='candidateStatus'/>
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Input
            value={this.state.candidateNeedOffer}
            onChange={this.handleInput}
            name='candidateNeedOffer'/>
        </Table.Cell>
        <Table.Cell textAlign='center'>

          <Button
            basic
            compact
            icon='edit'
            content='Save'
            color='green'
            onClick={this.updateCandidate}
          />
          <Button
            basic
            compact
            content='Esc'
            onClick={this.props.offEditable}
          />

        </Table.Cell>
      </Table.Row>


/*

          <Button
            basic
            compact
            icon={'close'}
            content={'Delete'}
            floated={'right'}
            color={'red'}
            onClick={this.removeTermino}
          />
*/


    )
  }
}
