import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CityCard from "./cityCard/CityCard";
import BeatLoader from "react-spinners/BeatLoader";

const Dashboard = () => {
  const [cityInput, setCityInput] = useState("");
  const [cityList, setCityList] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const cities = require("../../config/cities.json");
  cities.List.sort((a, b) => a.Temp - b.Temp);

  const handleAddCity = () => {
    const CityName = cityInput.trim();
    if (CityName) {
      const cityData = getCityData(CityName);
      if (cityData) {
        setCityList((prevList) => [...prevList, cityData]);
        setCityInput("");
        setError("");
      } else {
        setError("City not found. Please try again.");
      }
    }
  };

  const getCityData = (CityName) => {
    return cities.List.find(
      (city) => city.CityName && city.CityName.toLowerCase() === CityName.toLowerCase()
    );
  };

  const handleLogout = () => {
    // Clear any user-related data if needed
    // Redirect to the login page
    navigate("/");
  };

  return (
    <div style={styles.dashboard}>
      <button style={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    <br/>    <br/>    <br/>    <br/>
      <div style={styles.search}>
        <input
          type="text"
          placeholder="Enter a City"
          style={styles.searchInput}
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <button style={styles.searchButton} onClick={handleAddCity}>
          <p style={styles.searchButtonText}>Add City</p>
        </button>
      </div>
      {error && <div style={styles.error}>{error}</div>}
      <div style={styles.cardGrid}>
        {cityList.map((city, index) => (
          <CityCard city={city} key={index} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  dashboard: {
    position: 'relative', // Added relative positioning
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundImage: 'url("https://myradar.com/static/background-a089d87ba11e1a4c45a8efa960b86092.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#333',
    minHeight: '100vh',
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  profileImg: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    marginBottom: '10px',
  },
  profileName: {
    margin: 0,
  },
  logoutButton: {
    position: 'absolute', // Absolute positioning
    top: '20px',
    right: '20px',
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  searchInput: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginRight: '10px',
    width: '200px',
  },
  searchButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
  },
  searchButtonText: {
    margin: 0,
  },
  error: {
    color: 'red',
    marginBottom: '20px',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    width: '100%',
    maxWidth: '1200px',
  },
};

export default Dashboard;
