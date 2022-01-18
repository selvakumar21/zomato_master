import axios from "axios";

//Redux type
import { GET_IMAGE } from "./image.type";

export const getImage = (_id) => async (dispatch) => {
    try{
        const image = axios({
            method:"GET",
            url:`htpp://localhost:5000/image/${_id}`,
        });

        return dispatch({type:GET_IMAGE, payload: image.data});
    }catch(error){
        return dispatch({type: "ERROR", payload: error})
    }
}