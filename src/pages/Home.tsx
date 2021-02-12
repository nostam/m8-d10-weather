import React, { useState, useEffect } from "react";
import { Row, Col, Form, FormControl } from "react-bootstrap";
import axios from "axios";
import { openWeatherMap, upsplash } from "../lib/api";
import { CurrentWeather } from "../types/openWeatherMap";
import { Upsplash } from "../types/upsplash";
import CurrentWeatherRow from "../components/CurrentWeather";
import "../styles/Home.css";
import { url } from "inspector";

function Home() {
  const [input, setInput] = useState<string>("");
  const [
    currentWeatherData,
    setCurrentWeatherData,
  ] = useState<CurrentWeather>();
  const [bg, setBg] = useState<string>("");
  async function fetchCurrentWeather(city = input) {
    try {
      const res = await axios.get<CurrentWeather>(
        openWeatherMap.currentWeatherUrl + city
      );
      setCurrentWeatherData(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchCityBackground(city = input) {
    try {
      const res = await axios.get<Upsplash>(upsplash.url + city);
      const img =
        res.data.results[Math.floor(Math.random() * res.data.results.length)]
          .urls.regular;
      setBg(img);
    } catch (error) {
      console.log(error);
    }
  }
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    fetchCurrentWeather();
    fetchCityBackground();
  }
  useEffect(() => {
    fetchCurrentWeather("Amsterdam");
    fetchCityBackground("Amsterdam");
  }, []);
  return (
    <div
      className="city-background"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.75)), url(${
          bg.length > 0 ? bg : "https://picsum.photos/1000"
        })`,
      }}
    >
      <Row className="py-5">
        <Col className="home-main" md={{ span: 8, offset: 2 }}>
          <div className="content">
            <Form className="city-search-box my-3" onSubmit={handleSubmit}>
              <FormControl
                placeholder="Enter a city name"
                aria-label="City Name"
                aria-describedby="city-addon1"
                value={input}
                onChange={handleInput}
              />
            </Form>
            {currentWeatherData && (
              <CurrentWeatherRow data={currentWeatherData} />
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
