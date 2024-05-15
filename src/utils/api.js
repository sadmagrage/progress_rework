import Axios from "axios";
import { getAuthToken } from "./auth";

const API_URL = import.meta.env.VITE_API_URL;

const axiosProgress = Axios.create({ baseURL: `${ API_URL }/progress` });
const axiosUser = Axios.create({ baseURL: `${ API_URL }/auth` });

export const findAll = async () => {
    return new Promise(async (resolve, reject) => {
        const response = await axiosProgress.get("");
        
        resolve(response.data);
    });
};

export const findLast = async () => {
    return new Promise( async (resolve, reject) => {
        const response = await axiosProgress.get("/last");

        resolve(response.data);
    });
}

export const findOne = async (progressId) => {
    return new Promise(async (resolve, reject) => {
        const response = await axiosProgress.get(`/search?id=${ progressId }`);

        if (response.status !== 200) throw Error();

        resolve(response.data);
    });
}

export const save = async (progress) => {
    return new Promise( async (resolve, reject) => {
        const headers = { "Authorization": getAuthToken() }

        try {
            const response = await axiosProgress.post("", progress, { headers });

            if (response.status !== 201) throw Error();
            
            resolve();   
        } catch (error) {
            reject();
        }
    });
}

export const updateProgress = async (progressId, progress) => {
    return new Promise( async (resolve, reject) => {
        const headers = { "Authorization": getAuthToken() }

        try {
            const response = await axiosProgress.put(`/${ progressId }`, progress, { headers });
            
            if (response.status !== 200) throw Error();

            resolve();   
        } catch (error) {
            reject();
        }
    });
}

export const deleteProgress = async (progressId) => {
    return new Promise( async (resolve, reject) => {
        const headers = { "Authorization": getAuthToken() }

        try {
            const response = await axiosProgress.delete(`/${ progressId }`, { headers });

            if (response.status !== 200) throw Error();

            resolve();   
        } catch (error) {
            reject();
        }
    });
}

export const fazerLogin = async (user) => {
    return new Promise( async (resolve, reject) => {
        try {
            const response = await axiosUser.post("/login", user);

            if (response.status !== 200) throw Error();
            
            resolve(response.data.token);
        } catch (error) {
            reject();
        }
    })
}
