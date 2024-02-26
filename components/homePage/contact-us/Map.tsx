'use client'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
function Map() {

  return (
    <>
      <section className="container text-center">
        <h1 className="spaceBg py-4 mt-3">آدرس ما</h1>
        
        <MapContainer className="MapContainer shadow-lg rounded mt-3" center={[32.640578, 51.668837]} zoom={14} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[32.640578, 51.668837]}>
            <Popup>
              Hi
            </Popup>
          </Marker>

        </MapContainer>
      </section>
    </>

  );
}


export default Map;
