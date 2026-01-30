const axios = require("axios");
const MY_TOKEN = "8230541504:AAE8qlgpYOsXeuPTJ2WOCYOKuNeQAaDL0gk"

const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`

function getAxiosInstance(){
    return{
        get(method, params){
            const req = axios.get(`/${method}`, {
                baseURL: BASE_URL,
                params,
            });
            return req.catch(err => {
                const info = err && err.response ? { status: err.response.status, data: err.response.data } : { message: err.message };
                console.error('TELEGRAM ERROR GET', method, info);
                throw err;
            });
        },
        post(method, data){
            const req = axios({
                method: "post",
                baseURL: BASE_URL,
                url: `/${method}`,
                data,
            });
            return req.catch(err => {
                const info = err && err.response ? { status: err.response.status, data: err.response.data } : { message: err.message };
                console.error('TELEGRAM ERROR POST', method, info);
                throw err;
            });
        },
    };
}

module.exports = { axiosInstance: getAxiosInstance()}