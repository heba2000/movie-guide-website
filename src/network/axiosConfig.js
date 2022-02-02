import axios from "axios";
export const axiosInstance = axios.create({
    baseURL : "https://api.themoviedb.org"
})

axiosInstance.interceptors.request.use(
    function(config){
    config.params = {
        ...config.params,
        "api_key": "2bb85c65cde242afe2707a76ba2a0cde",
    };
    return config    
    },
    function (error) {
        return Promise.reject(error)
    }
)
axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
