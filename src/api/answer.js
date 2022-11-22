import axios from "axios";
import { config } from "../Config";

export function Createanswer(rId,ans){
    return axios.post(`${config.api}/answer/${rId}`,ans,{
        headers:{
           Authorization : localStorage.getItem(`${config.storage_key}`)
        }
    })
}


export function fetchanswer(rId){
    return axios.get(`${config.api}/answer/${rId}`,{
        headers:{
           Authorization : localStorage.getItem(`${config.storage_key}`)
        }
    })
}