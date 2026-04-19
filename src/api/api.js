import axios from "axios";
import { config } from "@/config/config";

export const getCountries = async () => {
    try {
        const response = await axios.get(`${config.apiCountries}/independent?status=true&fields=name,capital,currencies`)
        return response.data
    } catch (e) {console.log(e)}
}