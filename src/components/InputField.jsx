import { useContext, useState, useEffect } from "react";
import IpGeolocationContext from "./context/geoLocationContext";
import arrowIcon from "./assets/images/arrow-icon.svg";
import Alert from "./alert";

function InputField() {
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(false);

  const { getIpInfo, initialIp, getInitialIp } =
    useContext(IpGeolocationContext);

  useEffect(() => {
    getInitialIp();
    setText(initialIp);
    getIpInfo(initialIp);
  }, []);

  const handleChange = (e) => setText(e.target.value);

  const handleClick = () => {
    const ipPattern =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (!text.match(ipPattern)) {
      setAlert(true);
    } else {
      setAlert(false);
      getIpInfo(text);
      setText("");
    }
  };

  return (
    <div className="input-container">
      <h1>IP Address Tracker</h1>
      {alert && <Alert />}
      <div>
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          value={text}
          onChange={handleChange}
        />
        <button onClick={handleClick}>
          <img src={arrowIcon} alt="arrow icon" />
        </button>
      </div>
    </div>
  );
}
export default InputField;
