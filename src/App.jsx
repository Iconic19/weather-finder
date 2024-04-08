import axios from "axios";
import "./App.css";
import "./Components/style/searchbar.css";
import { useState } from "react";
import Weather from "./Components/Weather";

function App() {
  const secretKey = import.meta.env.VITE_SECRET_KEY;
  const [search, setSearch] = useState("");
  const [apiData, setApiData] = useState([]);
  const fetchingData = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&appid=${secretKey}
        `
      )
      .then((res) => setApiData(res))
      .catch((err) => (err ? alert("Enter the city name correctly") : err));
  };

  const handler = (e) => {
    e.preventDefault();
    fetchingData(search);
    setSearch("");
  };

  return (
    <div>
      <form onSubmit={handler}>
        <input
          value={search}
          placeholder="Enter Your City..."
          type="text"
          name="text"
          className="input"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <Weather data={apiData} />
    </div>
  );
}

export default App;
