import axios from "axios";
import { server } from "../../config";

const instance = axios.create({
  baseURL: `${server}`,
});

export default instance;
