import axios, {AxiosRequestHeaders} from "axios"

export type AxiosRequestType = {
    headers: AxiosRequestHeaders
}

let token = ""

const options: AxiosRequestType = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
    },
}

const instance = axios.create(options)

export default instance
