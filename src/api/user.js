import axios from "axios";
import { config } from "../Config";

export async function login(cred){
return await axios.post(`${config.api}/user/register`,cred)
}