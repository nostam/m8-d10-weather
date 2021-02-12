import React, { useCallback } from "react";
import { Accordion, Card, Row } from "react-bootstrap";
import { List } from "../types/openWeatherMap";
import WeatherBox from "./WeatherBox";
import { WeatherIcon } from "weather-react-icons";
import "../styles/forecast.css";
interface Props {
  data: List[];
}
function Next5DaysRow({ data }: Props) {
  const weatherIcon = useCallback(
    () => (id: number) => {
      return (
        <WeatherIcon
          iconId={id}
          name="owm"
          night
          className=""
          style={{ fontSize: "5rem" }}
        />
      );
    },
    []
  );
  return (
    <div>
      {data && (
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              5 Days Forecast
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="forecastRow">
                {data.map((entry, index) => (
                  <WeatherBox
                    data={entry}
                    key={`nex5${index}`}
                    // weatherIcon={weatherIcon}
                  />
                ))}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      )}
    </div>
  );
}

export default Next5DaysRow;
