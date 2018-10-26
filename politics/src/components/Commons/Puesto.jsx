import React, { Component } from 'react';
import unfilled from '../../images/unfilled.png';
import actived from '../../images/current.png';

const tituloStyle = { 
	background: 'linear-gradient(#808080, black)', 
	wordWrap: 'break-word',
	borderRadius: '5px',
	color: 'white',
	fontFamily: 'Arial',
  fontSize: '1.2rem',
}
const imagenStyleActive = {
  width: '52px',
  height: '48px',
  cursor: 'pointer',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center top',
  backgroundSize: 'cover',
  backgroundImage: 'url('+actived+')',
}
const imagenStyleUnfilled = {
  width: '52px',
  height: '48px',
  cursor: 'pointer',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center top',
  backgroundSize: 'cover',
  backgroundImage: 'url('+unfilled+')',
}
const imagenStyleSelected = {
  width: '52px',
  height: '48px',
  cursor: 'pointer',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center top',
  backgroundSize: 'cover',
  backgroundImage: 'url('+unfilled+')',
}
const opcionesStyle = {
	color: 'white',
	fontSize: '20px'
}
const deleteStyle = {
	color: 'red',
	fontSize: '20px'
}
const containerStyle= {
  padding: '5px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

class Puesto extends Component {	
	render() {	
		const { data } = this.props;
		return(
			<div style={containerStyle}>
				<div style={{ position: 'absolute', margin: '0px 3vh 5vw'}}>
					<i 
						style={opcionesStyle}
						className="fas fa-question-circle"
						onClick={() => this.props.info(data.idPolitico)}
					/>
				
				</div>
        <div style={{ position: 'absolute', margin: '0px 15vh 5vw'}}>
          {data.estado && 
						<i 
							style={deleteStyle}
							className="fas fa-ban"
							onClick={() => this.props.delete(data.idPolitico, data.id)}
						/>
					}
        </div>
        <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
        {this.props.active && <div style={imagenStyleActive}></div>}
        {!this.props.active && <div style={imagenStyleUnfilled} onClick={() => this.props.onClick(data.id)}></div>}
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