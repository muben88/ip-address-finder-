import { useContext } from "react";
import IpGeolocationContext from "./context/geoLocationContext";

function InfoDisplayCard() {
  const { info } = useContext(IpGeolocationContext);

  return (
    <div className="info-card">
      <div>
        <p className="info-card-title">IP ADDRESS</p>
        <p className="info-card-text">{info.ip}</p>
      </div>
      <div>
        <p className="info-card-title">LOCATION</p>
        <p className="info-card-text">
          {info.city}, {info.state_prov} <br />
          {info.zipcode}
        </p>
      </div>
      <div>
        <p className="info-card-title">TIMEZONE</p>
        <p className="info-card-text">
          {Object.entries(info)
            .filter((item) => item[0] === "time_zone")
            .map((key) => key[1].name)}
        </p>
      </div>
      <div>
        <p className="info-card-title">ISP</p>
        <p className="info-card-text">{info.isp}</p>
      </div>
    </div>
  );
}
export default InfoDisplayCard;
