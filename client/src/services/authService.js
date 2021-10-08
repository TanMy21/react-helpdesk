import httpService from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth";

export async function login(email, password) {
  const { data } = await httpService.post(apiEndpoint, { email, password });
  console.log(data);
  localStorage.setItem("token", data);
}

export function logout() {
  localStorage.removeItem("token");
}

export function isLoggedIn() {
  const isLoggedIn = localStorage.getItem("token");
  if(isLoggedIn){
    return true;
  }
}

export default {
  login,
  logout,
  isLoggedIn
};
