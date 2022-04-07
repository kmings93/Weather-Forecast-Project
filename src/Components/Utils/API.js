import axios from "axios";
<<<<<<< HEAD

const API = axios.create({ baseURL: "https://api.data.gov.sg/v1/environment" });

export default API;
=======
const API = axios.create({
  baseURL: "https://api.data.gov.sg/v1/environment/",
});

const APICustom01 = axios.create({
  baseURL: "https://api.sunrise-sunset.org/",
});

export { API, APICustom01 };
>>>>>>> 74c0f061ca761107ba7e978c8a4b352be24d158b
