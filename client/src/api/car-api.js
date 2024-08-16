import * as requester from './requester';

const BASE_URL = 'http://localhost:3030/data/cars';

export const getAll = () =>  requester.get(BASE_URL);

export const getOne = (carId) => requester.get(`${BASE_URL}/${carId}`);

export const create = (carData) => requester.post(BASE_URL, carData);

export const edit = (carId, carData) => requester.put(`${BASE_URL}/${carId}`, carData);

export const remove = (carId) => requester.del(`${BASE_URL}/${carId}`);

export const createMessage = (message) => requester.post(`http://localhost:3030/data/messages`, message);