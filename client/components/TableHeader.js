import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';


export default class Termino extends PureComponent {

  static propTypes = {
    candidate: PropTypes.object.isRequired
  };

  render() {
    const { candidate } = this.props;

    return (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign='center'>
            candidateName
          </Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>
            candidateStatus
          </Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>
            candidateNeedOffer
          </Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>
            actions
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    )
  }
}
