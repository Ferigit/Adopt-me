import Axios from "axios";
// import config from './config';

const defaultOptions = {
    headers: {},
    tokenType: 'Bearer ',
    baseUrl: "https://docs.thecatapi.com/"
};

class Api {
    static _token: String;
    static instance: any;
    axiosInstance;
    
    constructor() {
        this.axiosInstance = Axios.create({
            baseURL: defaultOptions.baseUrl,
            headers: defaultOptions.headers
        });
        this.axiosInstance.interceptors.response.use(this.handleSuccess, this.handleError)

    }
    handleSuccess = (response: any) => {
        console.log('success', response);
        return response;
    }

    handleError = (error: any) => {
        console.log('error is: ', error)
        if (error.message === 'Network Error') {
            // The user doesn't have internet
            return Promise.reject(error);
        }
        switch (error.response.status) {
            case 400:
                break;
            case 401:
                break;
            case 403:
                break;
            case 404:
                // Show 404 page
                break;
            case 500:
                // Serveur Error redirect to 500
                break;
            default:
                // Unknow Error
                break;
        }
        return Promise.reject(error);
    }
    static getInstance = () => {
        if (!Api.instance && !(Api.instance instanceof Api)) {
            Api.instance = new Api();
        }
        return Api.instance;
    };

    buildHeaders = (headersOption: any) => {

        const headers = {
            Authorization: `${defaultOptions.tokenType} ${localStorage.getItem("token")}`,
            ...headersOption
        };
        return headers;
    };

  
    axios = (method: any, url: any, data: any, options: any) => {
        const { headers = {}, ...others } = options;
        const otherOptions = method === 'GET' ? { params: data, ...others } : { data, ...others };
        return this.axiosInstance({
            method,
            url,
            headers: this.buildHeaders(headers),
            ...otherOptions,
        });
    };

    get = async (
        path: any,
        params: any,
        options = defaultOptions
    ) => {
        return await this.axios("GET", path, params, options);
    };
    post = async (
        path: any,
        body: any,
        options = defaultOptions
    ) => {
        return await this.axios("POST", path, body, options);
    };
    put = async (
        path: any,
        body: any,
        options = defaultOptions
    ) => {
        return await this.axios("PUT", path, body, options);
    };
    delete = async (
        path: any,
        options = defaultOptions
    ) => {
        return await this.axios("DELETE", path, undefined, options);
    };
}

export default Api.getInstance();
