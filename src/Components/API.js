import axios from "axios";

const API = axios.create({ baseURL: "https://api.data.gov.sg/v1/environment" });

const APICustom01 = axios.create({
  baseURL: "https://api.sunrise-sunset.org/",
});

export { API, APICustom01 };
