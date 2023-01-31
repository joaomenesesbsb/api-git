import axios from "axios";

export function FindUser(name : any)  {
    return axios.get(`https://api.github.com/users/${name}`);
}