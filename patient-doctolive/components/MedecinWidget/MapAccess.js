import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

// import markerIcon from 'assets/img/marker.png'
const libraries = ["places"];

const mapContainerStyle = {
  height: "50vh",
  width: "100%",
};


const mapStyles = [
  {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  }
];
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  scrollwheel: false,
};


export default function App(props) {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: props.apiKey,
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);

  const [center, setCenter] = React.useState({
    lat: 33.5795703,
  lng: -7.5874518,
  })
  const handleClickMarker = () => {

  }
 
  React.useEffect(() => {
      if(props.locations){
        if(props.locations.length > 0){
          if(props.locations[0]){
            setMarkers(props.locations);

            setCenter({lat: props.locations[0]["latitude"], lng: props.locations[0]["longitude"]  })

          }
        }
      }
    
    
  }, [props.locations])
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {
          markers.map((marker, index) => {
            if(!marker) {
              return null
            }
            return(
              <Marker
              key={index}
              position={{ lat: marker.latitude, lng: marker.longitude }}
              animation={window.google.maps.Animation.DROP}
              icon={"/image/marker.png"}
              onClick={() => {
                handleClickMarker(marker);
              }}
         
            />
            )
          
          })
        }
      </GoogleMap>
    </div>
  );
}
