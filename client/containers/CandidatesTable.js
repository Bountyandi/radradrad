import React, { PureComponent  } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Immutable from 'immutable'
import {
  updateCandidate,
  removeCandidate
} from '../actions/asyncActions';
import CandidateItem from '../components/CandidateItem';
import TableHeader from '../components/TableHeader';

import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react';


class CandidatesTable extends PureComponent  {

  static propTypes = {
    candidates: PropTypes.instanceOf(Immutable.List),
    updateCandidate: PropTypes.func.isRequired,
    removeCandidate: PropTypes.func.isRequired
  };

  constructor(props){
    super(props);

  }


  render() {
    const { candidates } = this.props;
    var tableHeader;

    if (candidates.length > 0) {
      tableHeader = <TableHeader candidate={candidates[0]}/>;
    }

    const listItems = candidates.map(item =>
      <CandidateItem
        key={item._id}
        _id={item._id}
        candidateName={item.candidateName}
        candidateStatus={item.candidateStatus}
        candidateNeedOffer={item.candidateNeedOffer}
        updateCandidate={this.props.updateCandidate}
        removeCandidate={this.props.removeCandidate}
      />
    );


    return (
      <Table fixed celled>
        {tableHeader}

        <Table.Body>
          {listItems}
        </Table.Body>
      </Table>
  )
  }
}

function mapStateToProps(state) {
  return {
    candidates: state.candidates
  }
}

export default connect(mapStateToProps, { updateCandidate, removeCandidate })(CandidatesTable)
