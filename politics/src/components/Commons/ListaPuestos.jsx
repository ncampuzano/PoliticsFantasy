import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import CongresoImagen from '../../images/Congreso.jpg';
import Puesto from './Puesto';

class ListaPuestos extends Component {
	renderPuesto(element) {
		return(
			<Col xs={3} style={{ width: '20%', padding: '1.5%' }} key={element.id}>
				<Puesto 
					data={element}
					info={this.props.info}
					delete={this.props.delete}
				/>
			</Col>
		);	
	}
	render() {
		const { puestos } = this.props;
		return(
			<div 
				style={{
					backgroundImage: 'url(' + CongresoImagen + ')',
					padding: '3%',
					backgroundSize: 'cover'
				}}
			>
				<Row style={{display: 'flex', justifyContent: 'center'}}>
					{this.renderPuesto(puestos[0])}
					{this.renderPuesto(puestos[1])}
				</Row>
				<Row>
					{puestos.map((element, index) => {
						if(index  > 1){
							return this.renderPuesto(element);
						}
					})}
				</Row>
			</div>
		);
	}
}
export default ListaPuestos;
