import * as requester from './requester';


const BASE_URL = 'http://localhost:3030/users';

export const login = async (values) => {    
    const authData = await requester.post (`${BASE_URL}/login`, values);

    return authData;
}

export const register = async (values) => {
    const authData = await requester.post (`${BASE_URL}/register`, values);

    return authData;
}

export const logout = async () => await requester.get(`${BASE_URL}/logout`)