import React, { useState, useRef } from "react";
import {
  Overlay,
  OverlayTrigger,
  Tooltip,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { CurrentWeather as Weather } from "../types/openWeatherMap";
import { WeatherIcon } from "weather-react-icons";
interface Props {
  data: Weather;
}
function CurrentWeatherRow({ data }: Props) {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const currentWeather = () => {
    return (
      <WeatherIcon
        iconId={data?.weather[0].id!}
        name="owm"
        night
        className="weather-icon-big"
        style={{ fontSize: "5rem" }}
      />
    );
  };
  const emojiTooltip = (temp: number = data.main.feels_like): string => {
    if (temp < 2) return "🥶";
    else if (temp > 29) return "🥵";
    else if (temp > 18) return "😀";
    else return "🙃";
  };
  const windDirection = (deg: number = data.wind.deg): string => {
    switch (true) {
      case deg >= 360 || deg <= 21:
        return "N";
        break;
      case deg >= 22 && deg <= 44:
        return "NNE";
        break;
      case deg >= 45 && deg <= 66:
        return "NE";
        break;
      case deg >= 67 && deg <= 89:
        return "ENE";
        break;
      case deg >= 90 && deg <= 111:
        return "E";
        break;
      case deg >= 112 && deg <= 134:
        return "ESE";
        break;
      case deg >= 135 && deg <= 156:
        return "SE";
        break;
      case deg >= 157 && deg <= 179:
        return "SSE";
        break;
      case deg >= 180 && deg <= 201:
        return "S";
        break;
      case deg >= 202 && deg <= 224:
        return "SSW";
        break;
      case deg >= 225 && deg <= 246:
        return "SW";
        break;
      case deg >= 247 && deg <= 269:
        return "WSW";
        break;
      case deg >= 270 && deg <= 291:
        return "W";
        break;
      case deg >= 292 && deg <= 314:
        return "WNW";
        break;
      case deg >= 315 && deg <= 336:
        return "NW";
        break;
      case deg >= 337 && deg <= 359:
        return "NNW";
        break;
      default:
        return "";
    }
  };
  return (
    <Row className="justify-content-between mx-4">
      {data && (
        <>
          <Col>
            <h1>{data.name} </h1>
            <Row className="justify-content-between py-3">
              <Col md={6}> {data.weather && currentWeather()}</Col>
              <Col md={6}>
                <span className="weather-icon-big d-flex flex-row-reverse">{`${data.main.temp}°C`}</span>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-disabled">
                      Feels like {emojiTooltip()}
                    </Tooltip>
                  }
                >
                  <span className="weather-icon-big d-flex flex-row-reverse">
                    <Button
                      variant="none"
                      disabled
                      style={{
                        pointerEvents: "none",
                        fontSize: "2rem",
                        padding: 0,
                        verticalAlign: "top",
                      }}
                    >
                      {data && `(${data.main.feels_like}°C)`}
                    </Button>
                  </span>
                </OverlayTrigger>
              </Col>
            </Row>
          </Col>
          <Col className="text-right">
            <h5>{`Highest: ${data.main.temp_max}°C`}</h5>
            <h5>{`Lowest: ${data.main.temp_min}°C`}</h5>
            <h5>{`Humidty: ${data.main.humidity}%`}</h5>
            <h5>{`Wind: ${data.wind.speed}m/s ${windDirection()}`}</h5>
          </Col>
        </>
      )}
    </Row>
  );
}

export default CurrentWeatherRow;
