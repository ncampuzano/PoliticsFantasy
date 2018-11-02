import React, { Component } from  'react';
import Modal from 'react-responsive-modal';
import ReactHtmlParser from 'react-html-parser';


class InfoModal extends Component{
    
  render() {
    return(
      <Modal open={this.props.show} onClose={this.props.onHide} center>
        <h2 style={{ color: 'red'}}>{this.props.titulo}</h2>
        <p> {ReactHtmlParser(this.props.explicacion)} </p>
        {this.props.diagrama != null && 
          <center>
            <img 
              style={{ 
                maxHeight: '280px',
              }} 
              src={require('../../images/diagramas/'+this.props.diagrama)}
            />
          </center>
        }
      </Modal>
    );
  }
}

export default InfoModal;
