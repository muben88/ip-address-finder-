import InputField from "./components/InputField";
import InfoDisplayCard from "./components/InfoDisplayCard";
import MapSection from "./components/MapSection";
import { IpGeolocationProvider } from "./components/context/geoLocationContext";

function App() {
  return (
    <IpGeolocationProvider>
      <div className="container">
        <InputField />
        <InfoDisplayCard />
        <MapSection />
      </div>
    </IpGeolocationProvider>
  );
}

export default App;
