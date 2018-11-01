import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import data from '../../data/politics.json';
import user from '../../images/user.png';

class PoliticsList extends Component {

  render() {
    return(
      <div
        style={{
          padding: '0',
          borderImageSource: 'linear-gradient(153deg, #039dfd,  #045ef4)',
          backgroundImage: 'linear-gradient(27deg,#039dfd,#045ef4)',
          outline: 'transparent solid 1px',
        }}
      >
        {data.map((politico) => {
          return(
            <div 
              key={politico.id} 
              onClick={() => this.props.onPress(politico.id)}
              disabled={this.props.invalidList.indexOf(politico.id) > -1}
              style={
								this.props.invalidList.indexOf(politico.id) > -1 ? 
								{
									height: '61px',
									padding: '10px 8px 10px 8px',
									borderBottom: '1px solid rgba(255,255,255,.2)',
									cursor: 'pointer',
									color: 'white',
									fontFamily: 'Roboto Regular,Helvetica,Arial,sans-serif,sans-serif',
									display: 'flex',
									justifyContent: 'space-between',
									backgroundColor: 'gray'
								}
								:
								{
									height: '61px',
									padding: '10px 8px 10px 8px',
									borderBottom: '1px solid rgba(255,255,255,.2)',
									cursor: 'pointer',
									color: 'white',
									fontFamily: 'Roboto Regular,Helvetica,Arial,sans-serif,sans-serif',
									display: 'flex',
									justifyContent: 'space-between'
								}
							}
            > 
              <div 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  alignItems: 'center'
                }}
              >
                <img  
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%'
                  }}
                  src={user}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection:'column'
                }}
              >
                <span 
                  style={{
                    fontWeight: '700',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    width: '120px'
                  }}
                >
                  {politico.nombre}
                </span>
                <span>{politico.partido}</span>
              </div>
              
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems:'center',
                  justifyContent: 'center'
                }}
              >
              
              </div>
              
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems:'center',
                  justifyContent: 'center'
                }}
              >
                <i 
                  style={{
                    color: 'white',
	                  fontSize: '20px'
                  }}
                  className="fas fa-question-circle"
                  onClick={event => this.props.explicacionPolitico(event, politico.id)}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  };
};

export default PoliticsList;