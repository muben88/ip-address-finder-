import { createContext, useState } from "react";

const IpGeolocationContext = createContext();

const baseUrl = "http://ip-api.com/json/";

export const IpGeolocationProvider = ({ children }) => {
  const [info, setInfo] = useState({});
  const [initialIp, setInitialIp] = useState("");
  const [loading, setLoading] = useState(true);

  const getIpInfo = async (text) => {
    setLoading(true);
    const res = await fetch(baseUrl + text);
    const data = await res.json();
    if (data.status === "success") {
      setInfo(data);
      setLoading(false);
    } else {
      setInfo(null);
      setLoading(true);
    }
  };

  const getInitialIp = async () => {
    const res = await fetch("https://api.ipify.org/?format=json");
    const { ip } = await res.json();
    setInitialIp(ip);
    setLoading(false);
  };
  return (
    <IpGeolocationContext.Provider
      value={{
        info,
        getIpInfo,
        initialIp,
        getInitialIp,
        loading,
      }}
    >
      {children}
    </IpGeolocationContext.Provider>
  );
};

export default IpGeolocationContext;
