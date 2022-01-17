import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import markerIcon from 'assets/img/marker.png'


const libraries = ["places"];
const mapContainerStyle = {
  height: "50vh",
  width: "50vw",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function App(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: props.apiKey,
    libraries,
  });
  const [marker, setMarker] = React.useState(
      {
        lat: 33.5795703,
        lng: -7.5874518
      }
  );
  const [selected, setSelected] = React.useState(null);
  const [positionNotFound, setPositionNotFound] = React.useState(false);

  const [center, setCenter] = React.useState({
    lat: 33.5795703,
  lng: -7.5874518,
  })

  const onMapClick = React.useCallback((e) => {
    //   console.log(e.latLng.lat())
    props.setLocation( {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
    })
    setMarker( {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
    });
  }, []);

  React.useEffect(() => {
    setTimeout(() => {

      if(!props.location.lat && !props.location.lng) {
        navigator.geolocation.getCurrentPosition((pos) => {
          var crd = pos.coords;
          // setMarker( {
          //     lat: crd.latitude,
          //     lng: crd.longitude,
          // });
  
          console.log(`More or less ${crd.accuracy} meters.`);
      }, 
      (err) => {
        setPositionNotFound(true)
      console.log(`ERROR(${err.code}): ${err.message}`);
      }, 
      {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
      });
      }
      
    }, 2000);
    
      return () => {
          
      }
  }, [])
  React.useEffect(() => {
    if(props.location){
      if(props.location.lat && props.location.lng){
        setMarker(props.location);
        setCenter(props.location);
      }
      
    }
    
  }, [props.location])
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <h3> Naviguer et séléctionner la position de votre cabinet </h3>
      {
        positionNotFound?
        <p> On a pas pus récupérer votre localisation il s'emble que vous n'avez pas autorisée l'accés à votre position </p>
        : null
      }
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={markerIcon}
            onClick={() => {
              setSelected(marker);
            }}
         
          />

        {/* {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
                La position de votre cabinet
            </div>
          </InfoWindow>
        ) : null} */}
      </GoogleMap>
    </div>
  );
}

const mapStyles = [
    {
      featureType: "all",
      elementType: "geometry.fill",
      stylers: [
        {
          weight: "2.00",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#9c9c9c",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          color: "#f2f2f2",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 45,
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#7b7b7b",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#46bcec",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#c8d7d4",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#070707",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
  ];