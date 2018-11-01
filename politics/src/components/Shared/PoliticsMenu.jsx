import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';
import { Panel } from 'react-bootstrap';
import PoliticsList from './PoliticsList';


class PoliticsMenu extends Component {

  render() {
    return(
      <ScrollArea
      >
        <div 
          style={{
            maxWidth: '305px',
            position: 'relative', 
            overflowY: 'scroll', 
            width: '305px', 
            height: '504px',

          }}
        >
          <div 
            style={{
              background: '#0389FA',
              color: '#fff',
              fontSize: '11px',
              fontFamily: 'Roboto Regular,Helvetica,Arial,sans-serif,sans-serif',
              fontWeight: '400',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '-6px',
              padding: '9px 35px 9px 15px',
              textTransform: 'capitalize',
              zIndex: '1',
            }}
          >
            <span>JUGADORES</span>
          </div>
          <PoliticsList 
            onPress={this.props.onPress} 
            invalidList={this.props.invalidList} 
            explicacionPolitico={this.props.explicacionPolitico}
          />
        </div>
      </ScrollArea>
    )
  }
};

export default PoliticsMenu;