import React from "react";
import { Col } from "react-bootstrap";
import { WeatherIcon } from "weather-react-icons";
import { List } from "../types/openWeatherMap";
// import fromUnixTime from "date-fns/fromUnixTime";
interface Props {
  data: List;
  //   weatherIcon: () => void;
}
// function WeatherBox({ data }: Props) {
//   return <div>{data && <div>{weatherIcon(data.weather[0].id)}</div>}</div>;
// }

function WeatherBox({ data }: Props) {
  const weatherIcon = (id: number) => {
    return (
      <WeatherIcon
        iconId={id}
        name="owm"
        night
        className=""
        style={{ fontSize: "2rem" }}
      />
    );
  };
  const now = new Date();
  const getTime = (time: number): number => {
    const date = new Date(time * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    return now.getHours() - hours;
  };
  const shortTemp = (temp: number): string => {
    return Number.parseFloat(temp.toString()).toFixed(1);
  };
  return (
    <div>
      {data && (
        <Col className="text-center mx-1 px-0 justify-content between">
          <h5>{shortTemp(data.main.temp)}°C</h5>
          {weatherIcon(data.weather[0].id)}
          {/* {getTime(data.dt)} */}
          <p>{getTime(data.dt)} hr</p>
        </Col>
      )}
    </div>
  );
}

export default WeatherBox;
