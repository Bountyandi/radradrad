import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditableItem from './EditableItem';

import { Table, Button, Label } from 'semantic-ui-react';


export default class CandidateItem extends Component {

  static propTypes = {
    _id: PropTypes.string.isRequired,
    candidateName: PropTypes.string.isRequired,
    candidateStatus: PropTypes.string.isRequired,
    candidateNeedOffer: PropTypes.number.isRequired,
    updateCandidate: PropTypes.func.isRequired,
    removeCandidate: PropTypes.func.isRequired,
  };

  constructor(props){
    super(props);

    this.state = {
      editing: false
    };

    this.removeCandidate = this.removeCandidate.bind(this);
    this.onEditable = this.onEditable.bind(this);
    this.offEditable = this.offEditable.bind(this);
  }

  removeCandidate(event) {
    this.props.removeCandidate({_id: this.props._id});
  }

  offEditable() {
    this.setState({editing: false})
  }
  onEditable() {
    this.setState({editing: true})
  }

  render() {
    const { _id,
      candidateName,
      candidateStatus,
      candidateNeedOffer,
      updateCandidate } = this.props;
    const candidate = { _id, candidateName, candidateStatus, candidateNeedOffer };
    let row;

    this.state.editing ?
      row = <EditableItem key='editableItem'
        _id={_id}
        candidateName={candidateName}
        candidateStatus={candidateStatus}
        candidateNeedOffer={candidateNeedOffer}
        updateCandidate={updateCandidate}
        offEditable={this.offEditable}
      />
      :
      row = <Table.Row
        key='notEeditableItem'
        onDoubleClick={this.onEditable}>
        <Table.Cell textAlign='center'>
          {candidateName}
        </Table.Cell>
        <Table.Cell textAlign='center'>
          {candidateStatus}
        </Table.Cell>
        <Table.Cell textAlign='center'>
          {candidateNeedOffer}
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Button basic compact
            icon={'edit'}
            content={'Edit'}
            color={'teal'}
            onClick={this.onEditable}
          />
          <Button basic compact
            icon={'close'}
            content={'Delete'}
            color={'red'}
            onClick={this.removeCandidate}
          />

        </Table.Cell>
      </Table.Row>;

    return [
      row
    ]
  }
}
