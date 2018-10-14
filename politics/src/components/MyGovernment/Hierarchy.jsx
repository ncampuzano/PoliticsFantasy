import React, { Component } from 'react';
import { Grid, Col, Row, Panel, Button } from 'react-bootstrap';
import PoliticsMenu from '../Shared/PoliticsMenu';
import data from '../../data/politics.json';

class Hierarchy extends Component {

  constructor(){
    super();
    this.jugadorEscogido =  this.jugadorEscogido.bind(this);
  }
  
  state = {
    cargos: [
      { nombre: 'HOLA' },{ nombre: '' },{ nombre: '' },
      { nombre: '' },{ nombre: '' }
    ],
    cargoActivo: 0,
  }

  jugadorEscogido(index) {
    const { cargos, cargoActivo } = this.state;
    cargos[cargoActivo].nombre = data[index-1].nombre;
    this.setState({ 
      cargos: cargos, 
      cargoActivo: cargoActivo + 1 % 5
    });
  }

  render() {
    return (
      <Grid fluid style={{ marginTop: 70 }}>
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
                      <Button>Button {index+1}</Button>
                    </Panel.Body>
                  </Panel>
                );
              })}
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <Row>
              <PoliticsMenu 
                onPress={this.jugadorEscogido} 
              />
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default Hierarchy;