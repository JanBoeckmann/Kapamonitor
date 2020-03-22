import React, { useState } from "react";
import { Map, TileLayer } from "react-leaflet";
import MarkerCluster from "./MarkerCluster";

const position = [52.520, 13.404];
const mapStyle = { height: "90vh" };

var myCustomArray = [
    {
      position: { lng: 13.380171, lat: 52.516101 },
      text: "Hotel Adlon",
      workload: 60
    },
    {
      position: { lng: 13.388807, lat: 52.519568 },
      text: "Hotel NH Collection",
      workload: 80
    },
    {
      position: { lng: 13.389649, lat: 52.520456 },
      text: "Hotel Euro Star",
      workload: 40
    },
    {
      position: { lng: 13.394174, lat: 52.515826 },
      text: "Hotel de Rome",
      workload: 20
    }
  ];

const Leaflet = () => {
  const [markers, setMarkers] = useState(myCustomArray);

  return (
    <>
      <Map center={position} zoom={10} style={mapStyle} maxZoom={20}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerCluster markers={markers} />
      </Map>
    </>
  );
};

export default Leaflet;
