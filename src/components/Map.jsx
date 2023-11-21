import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const position = [31.2156, 29.9553]; // Alexandria, Egypt coordinates

  return (
    <MapContainer center={position} zoom={15} style={{zIndex:"1", height: '400px', width: '600px',  borderRadius:"1%"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Alexandria, Egypt</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
