import { getAccessToken } from "../utils/authUtils";

async function requester(method, url, data) {
    console.log(method);
    console.log(url);
    console.log(data);
    

    const options = {};

    const accessToken = getAccessToken();
    

    if (accessToken) {
        options.headers = {
            ...options.headers,
            'X-authorization': accessToken,
        }
    }

    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json'
        };
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    
    if (response.status === 204) {
        return;
    };

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');