import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import data from '../../data/politics.json';

class PoliticsList extends Component {

  render() {
    return(
      <ListGroup>
        {data.map((politico) => {
          return(
            <ListGroupItem 
              key={politico.id} 
              onClick={() => this.props.onPress(politico.id)}
              disabled={this.props.invalidList.indexOf(politico.id) > -1}
            > 
              {politico.nombre} 
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  };
};

export default PoliticsList;