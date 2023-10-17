export const base_url = "http://localhost:4000/api/";

const getTokenFromLocalStorage = localStorage.getItem("token");
  

export const config = {
    headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage}`,
        Accept: "application/json"
        }
    }