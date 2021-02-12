import React from "react";
import { Col } from "react-bootstrap";
import { WeatherIcon } from "weather-react-icons";
import { List } from "../types/openWeatherMap";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
interface Props {
  data: List;
  //   weatherIcon: () => void;
}
// function WeatherBox({ data }: Props) {
//   return <div>{data && <div>{weatherIcon(data.weather[0].id)}</div>}</div>;
// }
dayjs.extend(isoWeek);
function WeatherBox({ data }: Props) {
  const weatherIcon = (id: number) => {
    return (
      <WeatherIcon
        iconId={id}
        name="owm"
        night
        className=""
        style={{ fontSize: "3rem" }}
      />
    );
  };
  const shortTemp = (temp: number): string => {
    return Number.parseFloat(temp.toString()).toFixed(1);
  };
  return (
    <div>
      {data && (
        <Col className="text-center mx-1 px-0 justify-content-between">
          <h5>{shortTemp(data.main.temp)}°C</h5>
          {weatherIcon(data.weather[0].id)}
          <p>{dayjs(data.dt_txt).format("ddd hhA")}</p>
        </Col>
      )}
    </div>
  );
}

export default WeatherBox;
