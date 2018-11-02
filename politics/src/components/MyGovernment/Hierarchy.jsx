import React, { Component } from 'react';
import { Grid, Col, Row, Panel, Button } from 'react-bootstrap';
import swal from 'sweetalert';
import PoliticsMenu from '../Shared/PoliticsMenu';
import Background from '../../images/background.jpg';
import InfoModal from '../Shared/InfoModal';
import data from '../../data/politics.json'; 
import posiciones from  '../../data/posiciones.json';
import ListaPuestos from '../Commons/ListaPuestos';

class Hierarchy extends Component {

  constructor(){
    super();
    this.adicionarPolitico =  this.adicionarPolitico.bind(this);
    this.abrirExplicacion = this.abrirExplicacion.bind(this);
		this.cerrarExplicacion = this.cerrarExplicacion.bind(this); 
    this.evaluar = this.evaluar.bind(this);
    this.explicacionPolitico = this.explicacionPolitico.bind(this);
    this.initialState = { 
      nombre: '', 
      imagen: '', 
      estado: false, 
      idPolitico: 0
    };
    this.state = {
      explicacionVisible: false,
      tituloExplicacion: '',
      explicacion: '',
      cargos: posiciones,
      cargoActivo: 1,
      politicosEscogidos: [],
      diagrama: null,
    }

	}
  
  adicionarPolitico(id) {
    const index = id - 1;
    let { cargos, cargoActivo,
      politicosEscogidos } = this.state;
    if(politicosEscogidos.indexOf(id) > -1){
      return false;
    }
    if(cargoActivo == -1 || cargos[cargoActivo - 1].estado){
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
    if(cargoActivo === cargos.length){
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
      ...cargos[index],
      ...this.initialState,
      id: id
    }
    politicosEscogidos.splice(indexOf, 1);
    cargoActivo = index + 1;
    this.setState({ cargos, politicosEscogidos, cargoActivo }); 
  }

  abrirExplicacion(id){
    const puesto = this.state.cargos[id-1];
    this.setState({
      explicacionVisible: true,
      tituloExplicacion: puesto.cargo,
      explicacion: puesto.descripcion,
      diagrama: puesto.diagrama,
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
	explicacionPolitico(event, idPolitico){
    event.preventDefault();
    event.stopPropagation();
    let politico = data[idPolitico - 1];
    this.setState({
      explicacionVisible: true,
      tituloExplicacion: politico.nombreCompleto,
      explicacion: politico.descripcion,
      diagrama: null
    });
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
    let dif = 0; 
    this.state.cargos.forEach((element) => {
      if(element.estado){
        let politico = data[element.idPolitico - 1];
        dif += Math.abs(politico.profesion - element.profesion) * 10;
        dif += Math.abs(politico.estudios - element.estudios) * 10;
        dif += Math.abs(politico.experiencia - element.experiencia) * 10;
        dif += Math.abs(politico.politica - element.politica) * 10;
      }
    });
    if(0 <= dif && dif <= 30){
      swal("Haz campaña", "Has elegido un excelente gabinete", "success");
    }else if(31 <= dif && dif <= 65){
      swal("¿Vice?", "Es un buen gabinete pero puedes mejorar", "success");
    }else if(66 <= dif && dif <= 100){
      swal("A estudiar", "Puedes mejorar tu gabinete, apoyate en la información", "warning");
    }else if(101 <= dif && dif <= 130){
      swal("Intentalo de nuevo", "Es mejor que lo intentes de nuevo, tu gabinete no es muy acertado", "warning");
    }else{
      swal("Error", "Ha ocurrido un error, elegiste el peor gabiente y no pensamos que fuera posible", "error");
    }

    console.log(dif);
    return null;
	}
  render() {
    return (
      <Grid fluid style={{ marginTop: 51 }}>
        <InfoModal  
          show={this.state.explicacionVisible}
          onHide={this.cerrarExplicacion}
          titulo={this.state.tituloExplicacion}
          explicacion={this.state.explicacion}
          diagrama={this.state.diagrama}
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
              explicacionPolitico={this.explicacionPolitico}
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