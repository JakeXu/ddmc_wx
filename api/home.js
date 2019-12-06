import {request} from "./util"
import { BASE_URL } from "./config"
export const getHomeData = () => request('GET',BASE_URL + 'homeApi');