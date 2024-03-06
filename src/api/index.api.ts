import axios from "axios";
import AuthAPI from "../app/auth/auth.api";
import UsersAPI from "../app/auth/auth.api";
export const coreClient = axios.create({
  baseURL: "https://port-0-time-attack-fullstack-server-dc9c2nltdo836k.sel5.cloudtype.app",
});

export default class API {
  static auth = new AuthAPI(coreClient);
  static users = new UsersAPI(coreClient);

  static setAccessToken(accessToken: string) {
    coreClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }

  static removeAccessToken() {
    coreClient.defaults.headers.common.Authorization = "";
  }
}


