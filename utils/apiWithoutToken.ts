
import axios, { AxiosRequestConfig } from 'axios'
import { REACT_APP_API_URL as REACT_APP_API_URL_BACK} from '../constants'

export type ErrorsTypes = {
    [field: string]: Array<string> | Array<{ [index: number]: Array<string> }>
}

export type ResponseType = {
    code: number
    success: boolean
    data?: any
    errors?: ErrorsTypes
}

const config: AxiosRequestConfig = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}

if (process.env.REACT_APP_API_URL) {
    config.baseURL = process.env.REACT_APP_API_URL
}
config.baseURL = REACT_APP_API_URL_BACK

const instance = axios.create(config)

export default instance
