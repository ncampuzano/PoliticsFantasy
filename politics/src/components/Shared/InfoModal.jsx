import React, { Component } from  'react';
import { Modal, Button } from 'react-bootstrap';

class InfoModal extends Component{
    
  render() {
    return(
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.explicacion}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default InfoModal;
