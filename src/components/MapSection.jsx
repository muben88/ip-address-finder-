import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useContext } from "react";
import IpGeolocationContext from "./context/geoLocationContext";
import Spinner from "./spinner";

function MapSection() {
  const { info, loading } = useContext(IpGeolocationContext);

  const position = [info.lat, info.lon];

  if (!loading) {
    return (
      <div className="map">
        <MapContainer center={position} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              {info.city}, {info.regionName} <br />
              {info.zip}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  } else {
    return <Spinner />;
  }
}
export default MapSection;
