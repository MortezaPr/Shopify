import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple, LeafletMouseEvent } from "leaflet";
import { Icon } from "leaflet";

const tehranCoordinates: LatLngTuple = [35.6892, 51.389];

const CustomIcon = new Icon({
  iconUrl: `data:image/svg+xml;base64,${btoa(`
    <svg width="800px" height="800px" viewBox="-4 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>map-marker</title>
      <desc>Created with Sketch.</desc>
      <g id="Vivid.JS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Vivid-Icons" transform="translate(-125.000000, -643.000000)">
          <g id="Icons" transform="translate(37.000000, 169.000000)">
            <g id="map-marker" transform="translate(78.000000, 468.000000)">
              <g transform="translate(10.000000, 6.000000)">
                <path d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z" id="Shape" fill="#FF6E6E"></path>
                <circle id="Oval" fill="#0C0058" fill-rule="nonzero" cx="14" cy="14" r="7"></circle>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  `)}`, // Base64-encoded SVG
  iconSize: [48, 48], // Adjust size as needed
  iconAnchor: [24, 48], // Adjust anchor to center the icon properly
});

const LocationMarker = ({
  setAddress,
  setPosition,
}: {
  setAddress: (address: string) => void;
  setPosition: (position: [number, number]) => void;
}) => {
  useMapEvents({
    click: async (e: LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=fa`
      );
      const data = await response.json();
      setAddress(data.display_name);
      setPosition([lat, lng]);
    },
  });

  return null;
};

const MapUpdater = ({ position }: { position: [number, number] | null }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 13);
    }
  }, [position, map]);

  return null;
};

const Map = ({
  position,
  setAddress,
  setPosition,
}: {
  position: [number, number] | null;
  setAddress: (address: string) => void;
  setPosition: (position: [number, number]) => void;
}) => {
  return (
    <MapContainer
      center={tehranCoordinates}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker setAddress={setAddress} setPosition={setPosition} />
      {position && <Marker position={position} icon={CustomIcon} />}
      <MapUpdater position={position} />
    </MapContainer>
  );
};

export default Map;
