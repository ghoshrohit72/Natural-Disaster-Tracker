import GoogleMapReact from 'google-map-react';

const Map = ( {center, zoom}) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys= {{ key: 'AIzaSyCAdaUOSx0OHD4PSrCPDRmGwuOkaPTehMs' }}
                defaultCenter={ center}
                defaultZoom={ zoom }
            >

            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
          lat: 42.3265,
          lng: -122

    },
    zoom: 6
}

export default Map;
