import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=testuser1234';

export function  getList(){
    const response = axios.get(`${BASE_URL}/todos${API_KEY}`);

        return {
        type:types.GET_LIST_DATA,
        payload: response
    }
}

export function getSingleItem(id){
    const response = axios.get(`${BASE_URL}/todos/${id + API_KEY}`);

    return{
        type: types.GET_SINGLE_ITEM,
        payload: response
    }
}

export function addNewItem(item){
    const response = axios.post(`${BASE_URL}/todos${API_KEY}`, item);

    return{
        type: types.ADD_ITEM,
        payload: response
    }
}

//Delete Item:
//const delete = axios.delete(`${BASE_URL}/todos${API_KEY}`);

//Toggle Complete:
//const complete = axios.put(`${BASE_URL}/todos${API_KEY}`);