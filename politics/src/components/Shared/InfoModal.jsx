import React, { Component } from  'react';
import Modal from 'react-responsive-modal';

class InfoModal extends Component{
    
  render() {
    return(
      <Modal open={this.props.show} onClose={this.props.onHide} center>
        <h2>{this.props.titulo}</h2>
        <p> {this.props.explicacion} </p>
      </Modal>
    );
  }
}

export default InfoModal;
