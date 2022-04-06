import axios from "axios";

const API = axios.create({ baseURL: "https://api.data.gov.sg/v1/environment" });

export default API;
