import * as requester from './requester';

const BASE_URL = 'http://localhost:3030/data/cars';

export const getAll = () => requester.get(BASE_URL);