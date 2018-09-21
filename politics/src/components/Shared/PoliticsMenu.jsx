import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import PoliticsList from './PoliticsList';

class PoliticsMenu extends Component {
  render() {
    return(
      <div>
        <Panel bsStyle="primary">
          <Panel.Body>
            Acá irán los filtros bien kawais
          </Panel.Body>
        </Panel>
        <Panel bsStyle="primary">
          <Panel.Body>
            <PoliticsList />
          </Panel.Body>
        </Panel>
      </div>
    )
  }
};

export default PoliticsMenu;