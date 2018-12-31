import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google}
        style={{ width: '100%', height: '100%', position: 'relative' }}
        initialCenter={{ lat: -23.297763, lng: -45.9680011 }}
        zoom={16}>
        <Marker
          name={'ETEC Cônego José Bento'}
          position={{
            lat: -23.297763,
            lng: -45.9680011
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAgoWnGDD09cw1n9jTpy_3t-oERU1XjV_A'),
  language: 'pt-br'
})(MapContainer);
