import React from "react";
import CardFooter from "../dashboard/cityCard/CardFooter";
import { images } from "../../utils/images";
import { useParams } from "react-router";
import { getWeather } from "../../APIs/weatherAPI";
import { useNavigate } from "react-router";
import MoonLoader from "react-spinners/MoonLoader";
import { OPEN_WEATHER_ICONS } from "../../config/urls";
import { useQuery } from "react-query";
import { TIME_DATE_FORMAT } from "../../config/constants";
import moment from "moment";

const WeatherViewCard = () => {
  const navigate = useNavigate();
  const { city } = useParams();
  const { data, isLoading, isError, error } = useQuery(city, () =>
    getWeather(city, false)
  );

  return (
    <div
      className="card-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        className="card card-weather-view"
        style={{
          position: "relative",
          width: "400px",
          height: "500px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        <img
          className="back-img"
          src={images.back}
          alt=""
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/dashboard")}
        />
        {!isLoading && !isError ? (
          <>
            <div
              className="header"
              style={{
                padding: "20px",
                backgroundColor: "#388ee7",
                color: "#fff",
                borderRadius: "10px 10px 0 0",
              }}
            >
              <div className="location" style={{ marginBottom: "10px" }}>
                <h2>{`${data.name}, ${data.sys.country}`}</h2>
                <p>
                  {moment
                    .utc()
                    .add(data.timezone, "seconds")
                    .format(TIME_DATE_FORMAT)}
                </p>
              </div>
              <div
                className="weather-details"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <div className="weather-stat" style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={`${OPEN_WEATHER_ICONS}${data.weather[0].icon}@2x.png`}
                    alt=""
                    style={{ width: "50px", marginRight: "10px" }}
                  />
                  <h4>{data.weather[0].description}</h4>
                </div>
                <hr className="divider" style={{ border: "0", borderTop: "1px solid #ddd" }} />
                <div className="temperature" style={{ textAlign: "center" }}>
                  <h1 style={{ margin: "0", fontSize: "48px" }}>{data.main.temp}°c</h1>
                  <div className="temperature-minmax" style={{ marginTop: "10px" }}>
                    <h5>Temp Min: {data.main.temp_min}°c</h5>
                    <h5>Temp Max: {data.main.temp_max}°c</h5>
                  </div>
                </div>
              </div>
            </div>
            <CardFooter data={data} />
          </>
        ) : isError ? (
          <div className="header" style={{ textAlign: "center" }}>
            <h1>{error.message}</h1>
          </div>
        ) : (
          <div
            className="loading-container"
            style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}
          >
            <MoonLoader color={"#388ee7"} size={50} />
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherViewCard;
