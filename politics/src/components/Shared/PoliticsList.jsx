import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import data from '../../data/politics.json';

class PoliticsList extends Component {
  
  render() {
    console.log(data);
    return(
      <ListGroup>
        {data.map((politic) => {
          return(
            <ListGroupItem key={politic.id}> {politic.name} </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  };
};

export default PoliticsList;