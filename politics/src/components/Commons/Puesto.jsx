import React, { Component } from 'react';
import chair from '../../images/chair.svg';

const tituloStyle = { 
	background: 'linear-gradient(#808080, black)', 
	wordWrap: 'break-word',
	borderRadius: '5px',
	color: 'white',
	fontFamily: 'Arial',
	fontSize: '1.2rem'
}
const imagenStyle = {
	padding: '5%'
}
const opcionesStyle = {
	color: 'yellow',
	fontSize: '20px'
}
const deleteStyle = {
	color: 'red',
	fontSize: '20px'
}
const containerStyle= {
	padding: ''
}

class Puesto extends Component {	
	render() {	
		const { data } = this.props;
		return(
			<div style={containerStyle}>
				<div >
					<i 
						style={opcionesStyle}
						className="fas fa-question-circle"
						onClick={() => this.props.info(data.idPolitico)}
					/>
					{data.estado && 
						<i 
							style={deleteStyle}
							className="fas fa-ban"
							onClick={() => this.props.delete(data.idPolitico, data.id)}
						/>
					}
				</div>
				<div style={imagenStyle}>
					<img src={chair} />
				</div>
				<div style={tituloStyle}>
					{data.cargo} 
					<br />
					{data.nombre}
				</div>
			</div>
		);
	}
}
export default Puesto;