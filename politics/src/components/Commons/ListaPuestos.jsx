import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Puesto from './Puesto';

class ListaPuestos extends Component {
	renderPuesto(element) {
		return(
			<Col xs={3} style={{ width: '20%'}} key={element.id}>
				<Puesto 
					data={element}
					info={this.props.info}
          delete={this.props.delete}
          active={this.props.active == element.id}
          onClick={this.props.onClick}
				/>
			</Col>
		);	
	}
	render() {
    const { puestos } = this.props;
    console.log(this.props.active);
		return(
			<div>
				<Row style={{display: 'flex', justifyContent: 'center'}}>
					{this.renderPuesto(puestos[0])}
				</Row>
				<Row>
					{puestos.map((element, index) => {
						if(index  > 0){
							return this.renderPuesto(element);
						}
					})}
				</Row>
			</div>
		);
	}
}
export default ListaPuestos;
