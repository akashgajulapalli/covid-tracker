import axios from "axios";

export const getData = async () => {
    let url = "https:api.covid19api.com/summary";
    return axios.get(url).then((response) => {
        return response?.data
    })

}