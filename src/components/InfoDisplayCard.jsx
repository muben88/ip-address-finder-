import { useContext } from "react";
import IpGeolocationContext from "./context/geoLocationContext";

function InfoDisplayCard() {
  const { info } = useContext(IpGeolocationContext);

  return (
    <div className="info-card">
      <div>
        <p className="info-card-title">IP ADDRESS</p>
        <p className="info-card-text">{info.query}</p>
      </div>
      <div>
        <p className="info-card-title">LOCATION</p>
        <p className="info-card-text">
          {info.city}, {info.region} <br />
          {info.zip}
        </p>
      </div>
      <div>
        <p className="info-card-title">TIMEZONE</p>
        <p className="info-card-text">{info.timezone}</p>
      </div>
      <div>
        <p className="info-card-title">ISP</p>
        <p className="info-card-text">{info.isp}</p>
      </div>
    </div>
  );
}
export default InfoDisplayCard;
