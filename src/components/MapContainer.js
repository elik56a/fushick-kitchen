import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '55vh'

};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };
    render() {
        return (
            <div className='map'>
                <Map google={this.props.google} zoom={13}
                    style={mapStyles}
                    initialCenter={{
                        lat: 32.073580,
                        lng: 34.788050
                    }}>
                    <Marker onClick={this.onMarkerClick}
                        name={'Fushick Kitchen!'}
                        defaultAnimation={this.props.google.maps.Animation.BOUNCE}
                    />

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <h1>Fushick Kitchen!</h1>
                    </InfoWindow>
                    <div className='after-map'>
                        <div className="footer">Fushick Kitchen &copy; Inc. All rights reserved.</div>
                    </div>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCx2QwtEJcyGyEeeoVClqa1s4s2Ae4g_Hk')
})(MapContainer)


