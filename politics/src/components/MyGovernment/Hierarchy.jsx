import React, { Component } from 'react';
import { Grid, Col, Row, Panel, Button } from 'react-bootstrap';
import swal from 'sweetalert';
import PoliticsMenu from '../Shared/PoliticsMenu';
import Background from '../../images/background.jpg';
import InfoModal from '../Shared/InfoModal';
import data from '../../data/politics.json';
import ListaPuestos from '../Commons/ListaPuestos';

class Hierarchy extends Component {

  constructor(){
    super();
    this.adicionarPolitico =  this.adicionarPolitico.bind(this);
    this.abrirExplicacion = this.abrirExplicacion.bind(this);
		this.cerrarExplicacion = this.cerrarExplicacion.bind(this); 
		this.evaluar = this.evaluar.bind(this);
    this.initialState = { nombre: '', imagen: '', estado: false, cargo: '', idPolitico: 0 };
	}
  state = {
    explicacionVisible: false,
    tituloExplicacion: '',
    explicacion: '',
    cargos: [
      { nombre: '', imagen: '', estado: false, cargo: 'Presidencia', id: 1, idPolitico: 0},
      { nombre: '', imagen: '', estado: false, cargo: 'Min. Trabajo', id: 2, idPolitico: 0 },
      { nombre: '', imagen: '', estado: false, cargo: 'Min. Trabajo', id: 3, idPolitico: 0 },
      { nombre: '', imagen: '', estado: false, cargo: 'Min. Cultura', id: 4, idPolitico: 0 },
			{ nombre: '', imagen: '', estado: false, cargo: 'Min. Transporte', id: 5, idPolitico: 0 },
			{ nombre: '', imagen: '', estado: false, cargo: 'Min. Transporte', id: 6, idPolitico: 0 },
			{ nombre: '', imagen: '', estado: false, cargo: 'Min. Trabajo', id: 7, idPolitico: 0 },
      { nombre: '', imagen: '', estado: false, cargo: 'Min. Cultura', id: 8, idPolitico: 0 },
			{ nombre: '', imagen: '', estado: false, cargo: 'Min. Transporte', id: 9, idPolitico: 0 },
			{ nombre: '', imagen: '', estado: false, cargo: 'Min. Transporte', id: 10, idPolitico: 0 },
			{ nombre: '', imagen: '', estado: false, cargo: 'Min. Trabajo', id: 11, idPolitico: 0 },
      { nombre: '', imagen: '', estado: false, cargo: 'Min. Cultura', id: 12, idPolitico: 0 },
			{ nombre: '', imagen: '', estado: false, cargo: 'Min. Transporte', id: 13, idPolitico: 0 },
			{ nombre: '', imagen: '', estado: false, cargo: 'Min. Transporte', id: 14, idPolitico: 0 },
			{ nombre: '', imagen: '', estado: false, cargo: 'Min. Trabajo', id: 15, idPolitico: 0 },
      { nombre: '', imagen: '', estado: false, cargo: 'Min. Cultura', id: 16, idPolitico: 0 },
    ],
    cargoActivo: 1,
    politicosEscogidos: [],
  }
  adicionarPolitico(id) {
    const index = id - 1;
    let { cargos, cargoActivo,
      politicosEscogidos } = this.state;
    if(politicosEscogidos.indexOf(id) > -1){
      return false;
    }
    /* Actualizar cargos */
    cargos[cargoActivo - 1] = {
      ...cargos[cargoActivo - 1],
      nombre: data[index].nombre,
      imagen: data[index].imagen,
      estado: true,
      idPolitico: data[index].id
    }
    /* Invalidar el político */
    politicosEscogidos.push(id);

		/* Activar el ID correcto */
    if(cargoActivo === (cargos.length-1) ){
      cargoActivo = -1;
    } else {
      cargoActivo += 1;
    }
    this.setState({ cargos, politicosEscogidos, cargoActivo });
  }

  borrarPolitico(idPolitico, id){
    const index = id -1;
    let politicosEscogidos = [...this.state.politicosEscogidos];
    let { cargos, cargoActivo } = this.state;
    const indexOf = politicosEscogidos.indexOf(idPolitico);
    if(indexOf === -1){
      return false;
    }
    cargos[index] = {
			...this.initialState,
			cargo: cargos[index].cargo,
      id: id
    }
    politicosEscogidos.splice(indexOf, 1);
    cargoActivo = index + 1;
    this.setState({ cargos, politicosEscogidos, cargoActivo }); 
  }

  abrirExplicacion(id){
    this.setState({
      explicacionVisible: true,
      tituloExplicacion: 'Titulo ' + id,
      explicacion: 'explicacion' + id,
    });
  }
  cerrarExplicacion(){
    this.setState({
      explicacionVisible: false,
    });
  }
  seleccionarPuesto(id){
    this.setState({ cargoActivo: id });
	}
	
	evaluar(){
		let validate = true;
		this.state.cargos.forEach((element) => {
			if(!element.estado){
				validate = false;
				return false;
			}
		});
		if(!validate){
			swal("Aún te falta", "Tienes que elegir todo tu gabinete", "error");
			return null;
		}
		
		
	}
  render() {
    return (
      <Grid fluid style={{ marginTop: 51 }}>
        <InfoModal  
          show={this.state.explicacionVisible}
          onHide={this.cerrarExplicacion}
          titulo={this.state.tituloExplicacion}
          explicacion={this.state.explicacion}
        />
        <Row 
          style={{
            backgroundImage: 'url(' + Background + ')',
            padding: '3%',
            backgroundSize: 'cover',
            backgroundPositionX: '50%',
            backgroundPositionY: '-34px'
          }}
        >
					<Col xs={12} md={12}> 
						<Col xs={12} mdOffset={4} md={8}>
							<div 
								style={{
									flex: 1,
									flexDirection: 'row',
									justifyContent: 'center'
								}}
							>
								<Button onClick={this.evaluar} bsStyle="primary" bsSize="large">
									EVALUAR
								</Button>
							</div>
						</Col>
					</Col>
          <Col xs={12} md={4}>
            <PoliticsMenu 
              onPress={this.adicionarPolitico} 
              invalidList={this.state.politicosEscogidos}
            />
          </Col>
          <Col xs={12} md={8}
          >
            <ListaPuestos 
							puestos={this.state.cargos}
							info={this.abrirExplicacion}
              delete={this.borrarPolitico.bind(this)}
              active={this.state.cargoActivo}
              onClick={this.seleccionarPuesto.bind(this)}
						/>
          </Col>
          
        </Row>
      </Grid>
    );
  }
};

export default Hierarchy;