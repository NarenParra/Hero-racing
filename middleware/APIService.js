import axios from "axios";
const API_URL = "https://superheroapi.com/api/";
const API = "2721938898078153";
export class APIService {
  async getHero(name) {
    const url = `${API_URL}${API}/search/${name}`;
    return await axios.get(url).then((response) => response.data);
  }
}
