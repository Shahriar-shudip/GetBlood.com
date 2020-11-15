import React from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import "./search.css";
import { Card, Button } from "semantic-ui-react";
const SearchResult = (props) => {
  console.log(props.result);

  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2h1ZGlwIiwiYSI6ImNrNjB3YjVqMzBibXAzbW55MTY0cjZxdG4ifQ.AQe8EIqNEjW0HyfDvf0tlQ";

  const geolocation = (longitude, latitude) => {
    let directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/driving",
    });
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      directions.setOrigin([
        position.coords.longitude,
        position.coords.latitude,
      ]);
      directions.setDestination([longitude, latitude]);
    });
  };
  let list = props.result.map(function (d, idx) {
    return (
      <div className="cards">
        <table>
          <tr>
            <td>
              <div className="name">{d.name}</div>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                {" "}
                <Button
                  className="loc-button"
                  color="green"
                  onClick={() => {
                    geolocation(d.longitude, d.latitude);
                  }}
                >
                  Get Location
                </Button>
              </div>
            </td>

            <td>
              <div>
                <Button
                  className="loc-button"
                  color="red"
                  onClick={() => {
                    geolocation(d.longitude, d.latitude);
                  }}
                >
                  Order
                </Button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  });
  return <div>{list}</div>;
};

export default SearchResult;
