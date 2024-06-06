import React from "react";
import { images } from "../../../utils/images";
import CardFooter from "./CardFooter";
import { getWeather } from "../../../APIs/weatherAPI";
import { useNavigate } from "react-router";
import MoonLoader from "react-spinners/MoonLoader";
import moment from "moment";
import { useQuery } from "react-query";
import { OPEN_WEATHER_ICONS } from "../../../config/urls";
import { TIME_DATE_FORMAT, TEMPERATURE_UNIT } from "../../../config/constants";
import styled from "styled-components";

const CityCard = ({ color, city }) => {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useQuery(city.CityCode, () =>
    getWeather(city.CityCode, city.ExpireTime, true)
  );

  const handleClick = (cityCode) => {
    navigate(`/weather/${cityCode}`);
  };

  return (
    <Card onClick={() => handleClick(city.CityCode)}>
      <CloseImg src={images.close} alt="Close" />
      {!isLoading && !isError ? (
        <>
          <Header backgroundColor={data.color}>
            <CloudsBackground src={images.cloud_bg} alt="Clouds" />
            <Location>
              <LocationName>{`${data.name}, ${data.sys.country}`}</LocationName>
              <Time>
                {moment
                  .utc()
                  .add(data.timezone, "seconds")
                  .format(TIME_DATE_FORMAT)}
              </Time>
              <WeatherStat>
                <WeatherIcon
                  src={`${OPEN_WEATHER_ICONS}${data.weather[0].icon}@2x.png`}
                  alt={data.weather[0].description}
                />
                <WeatherDescription>{data.weather[0].description}</WeatherDescription>
              </WeatherStat>
            </Location>
            <Temperature>
              <TempValue>
                {data.main.temp}
                {TEMPERATURE_UNIT}
              </TempValue>
              <TemperatureMinMax>
                <TempMinMax>Temp Min: {data.main.temp_min}{TEMPERATURE_UNIT}</TempMinMax>
                <TempMinMax>Temp Max: {data.main.temp_max}{TEMPERATURE_UNIT}</TempMinMax>
              </TemperatureMinMax>
            </Temperature>
          </Header>
          <CardFooter data={data} />
        </>
      ) : isError ? (
        <ErrorContainer>
          <ErrorMessage>{error.message}</ErrorMessage>
        </ErrorContainer>
      ) : (
        <LoadingContainer>
          <MoonLoader color={color} size={50} />
        </LoadingContainer>
      )}
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 0.2s;
  background-color: #fff;
`;

const CloseImg = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Header = styled.div`
  padding: 20px;
  color: #fff;
  text-align: center;
  position: relative;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const CloudsBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Location = styled.div`
  margin-bottom: 20px;
`;

const LocationName = styled.h2`
  margin: 0 0 10px 0;
  font-size: 1.5em;
  font-weight: bold;
`;

const Time = styled.p`
  margin: 0 0 10px 0;
  font-size: 1em;
`;

const WeatherStat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const WeatherIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const WeatherDescription = styled.h4`
  margin: 0;
  font-size: 1.2em;
`;

const Temperature = styled.div`
  margin-top: 20px;
`;

const TempValue = styled.h1`
  margin: 0;
  font-size: 2.5em;
`;

const TemperatureMinMax = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const TempMinMax = styled.h5`
  margin: 0;
  font-size: 1em;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

const ErrorContainer = styled.div`
  padding: 20px;
`;

const ErrorMessage = styled.h2`
  color: #ff0000;
  font-size: 1.5em;
  text-align: center;
`;

export default CityCard;
