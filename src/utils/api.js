import Axios from "axios";

const axiosProgress = Axios.create({ baseURL: "http://localhost:3000/progress" });
const axiosUser = Axios.create({ baseURL: "http://localhost:3000/user" });

export const findAll = async () => {
    return new Promise(async (resolve, reject) => {
        const response = await axiosProgress.get("/");
        
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
        const response = await axiosProgress.get(`/search?progress_id=${ progressId }`);

        if (response.status !== 200) throw Error();

        resolve(response.data);
    });
}

export const save = async (progress) => {
    return new Promise( async (resolve, reject) => {
        //const headers = { "Authorization": getAuthToken }

        try {
            const response = await axiosProgress.post("/", progress/* , { headers } */);

            if (response.status !== 201) throw Error();
            
            resolve();   
        } catch (error) {
            reject();
        }
    });
}

export const updateProgress = async (progress) => {
    return new Promise( async (resolve, reject) => {
        //const headers = { "Authorization": getAuthToken }

        try {
            const response = await axiosProgress.put("/", progress/* , { headers } */);
            
            if (response.status !== 200) throw Error();

            resolve();   
        } catch (error) {
            reject();
        }
    });
}

export const deleteProgress = async (progressId) => {
    return new Promise( async (resolve, reject) => {
        //const headers = { "Authorization": getAuthToken }

        try {
            const response = await axiosProgress.delete(`/${ progressId }`, /* , { headers } */);

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
            const response = await axiosUser.post("/", user);

            if (response.status !== 200) throw Error();
            
            resolve(response.data);
        } catch (error) {
            reject();
        }
    })
}