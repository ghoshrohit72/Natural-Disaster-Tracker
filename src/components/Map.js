import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import VolacanoLocator from './VolcanoLocator';

const Map = ( {eventData, center, zoom}) => {

    const markers = eventData.map((ev) => 
    {
        if(ev.categories[0].id === "wildfires")
        {
            return <LocationMarker lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]} />
        }
        else if(ev.categories[0].id === "volcanoes")
        {
            return <VolacanoLocator lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]} />
        }
        return null;
    })


    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys= {{ key: 'XXXXX' }}
                defaultCenter={ center}
                defaultZoom={ zoom }
            >
                    {markers}
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
