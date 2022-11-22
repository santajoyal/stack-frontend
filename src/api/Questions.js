import axios from "axios";
import { config } from "../Config";

export function createQuestion(qesData){
    return axios.post(`${config.api}/question-create`,qesData,{
        headers:{
           Authorization : localStorage.getItem(`${config.storage_key}`)
        }
    })
}

export function listQuestion(qesData){
    return axios.get(`${config.api}/list-question`,qesData,{
        headers:{
           Authorization : localStorage.getItem(`${config.storage_key}`)
        }
    })
}