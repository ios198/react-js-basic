import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Weather = () => {
  const [title, setTitle] = useState("Start");

  useEffect(() => {
    console.log(">>> run useEffect");
    //let response = await axios("https://jsonplaceholder.typicode.com/todos/1");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        setTitle(response.data.title);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  console.log(">>> run render");
  return <div> inside weather component: title = {title}</div>;
};

/*
class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  async componentDidMount() {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    //let response = await axios({
    //  method: "post",
    //  url: "http://localhost:8080/get-data-by-url",
    //  data: { url: "http://localhost:8080/static/weather/${fetchState}.svg" },
    //});

    this.setState = {
      title: response.data.title,
    };
    //console.log(">>> checkdata", response.data);
  }

  render() {
    return <div> inside weather component: title = {this.state.title}</div>;
  }
}
*/
export default Weather;
