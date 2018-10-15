import React, { Component } from 'react';
import { Grid, Col, Row, Panel, Button } from 'react-bootstrap';
import PoliticsMenu from '../Shared/PoliticsMenu';
import InfoModal from '../Shared/InfoModal';
import data from '../../data/politics.json';

class Hierarchy extends Component {

  constructor(){
    super();
    this.adicionarPolitico =  this.adicionarPolitico.bind(this);
    this.abrirExplicacion = this.abrirExplicacion.bind(this);
    this.cerrarExplicacion = this.cerrarExplicacion.bind(this); 
    this.initialState = { nombre: '', imagen: '', estado: false, cargo: '', idPolitico: 0 };
  }
  state = {
    explicacionVisible: false,
    tituloExplicacion: '',
    explicacion: '',
    cargos: [
      { nombre: '', imagen: '', estado: false, cargo: '', id: 1, idPolitico: 0},
      { nombre: '', imagen: '', estado: false, cargo: '', id: 2, idPolitico: 0 },
      { nombre: '', imagen: '', estado: false, cargo: '', id: 3, idPolitico: 0 },
      { nombre: '', imagen: '', estado: false, cargo: '', id: 4, idPolitico: 0 },
      { nombre: '', imagen: '', estado: false, cargo: '', id: 5, idPolitico: 0 },
    ],
    cargoActivo: 0,
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
    cargos[cargoActivo] = {
      ...cargos[cargoActivo],
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
      id: id
    }
    politicosEscogidos.splice(indexOf, 1);
    cargoActivo = index;
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
  render() {
    return (
      <Grid fluid style={{ marginTop: 70 }}>
        <InfoModal  
          show={this.state.explicacionVisible}
          onHide={this.cerrarExplicacion}
          titulo={this.state.tituloExplicacion}
          explicacion={this.state.explicacion}
        />
        <Row>
          <Col xs={12} md={8}>
            <Row>
              Menu opciones
            </Row>
            <Row>
              {this.state.cargos.map((element, index) => {
                return (
                  <Panel key={index}>
                    <Panel.Body>
                      {element.nombre}
                      {element.estado &&
                        <div>
                          <Button 
                            onClick={() => this.borrarPolitico(element.idPolitico, element.id)}
                          >
                            Borrar
                          </Button>
                          <Button
                            onClick={() => this.abrirExplicacion(element.idPolitico)}
                          >
                            Info
                          </Button>
                        </div>
                      }
                    </Panel.Body>
                  </Panel>
                );
              })}
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <Row>
              <PoliticsMenu 
                onPress={this.adicionarPolitico} 
                invalidList={this.state.politicosEscogidos}
              />
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default Hierarchy;