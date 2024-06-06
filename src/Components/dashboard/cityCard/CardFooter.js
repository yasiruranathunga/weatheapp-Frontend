import React from "react";
import moment from "moment";
import { TIME_FORMAT } from "../../../config/constants";
import styled from "styled-components";

const CardFooter = ({ data }) => {
  return (
    <Footer>
      <Detail>
        <b>Pressure:</b> {data.main.pressure} hPa
      </Detail>
      <Detail>
        <b>Humidity:</b> {data.main.humidity}%
      </Detail>
      <Detail>
        <b>Visibility:</b> {data.visibility / 1000} km
      </Detail>
      <Detail>
        <b>Wind:</b> {data.wind.speed} m/s {data.wind.deg}°
      </Detail>
      <Detail>
        <b>Sunrise:</b>{" "}
        {moment
          .utc(data.sys.sunrise, "X")
          .add(data.timezone, "seconds")
          .format(TIME_FORMAT)}
      </Detail>
      <Detail>
        <b>Sunset:</b>{" "}
        {moment
          .utc(data.sys.sunset, "X")
          .add(data.timezone, "seconds")
          .format(TIME_FORMAT)}
      </Detail>
    </Footer>
  );
};

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Detail = styled.div`
  flex-basis: 100%;
  text-align: left;
  margin-bottom: 10px;
  margin-left:20px;
`;

export default CardFooter;
