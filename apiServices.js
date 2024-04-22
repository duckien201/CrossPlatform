import AsyncStorage from "@react-native-async-storage/async-storage"
import config from "./backend/config/config";
import axios from "axios";
import { IP_PRODUCT ,IP_USERS } from "./backend/config/config";
export const loginUser = async(email,password)=>{
    try{
    const response = await axios.post(`${IP_USERS}/login`,{
        email,
        password
    })
    return response.data;
    }catch(error){
        if (error.response){
            throw new Error(error.response.data.message)
        }else{
            throw new Error(error.message)
        }
    }
}

export const registerUser = async(name , email , password , phone)=>{
    try{
        const response = await axios.post(`${IP_USERS}/register`,{
            name,
            email,
            phone,
            password,
        })
        return response.data;
    }catch(error){
        console.log(error);
        if(error.response){
            throw new Error(error.response.data.message)
        }else{
            throw new Error(error.message)
        }

    }
}


export const resetPassword = async (email, newpassword , confirmpassword) =>{
try{
    const response = await axios.post(`${IP_USERS}/reset_password`,{
        email,
        newpassword,
        confirmpassword
    })
    return response.data
}catch(error){
    console.log(error);
    if(error.response){
        throw new Error(error.response.data.message)
    }else{
        throw new Error(error.message)
    }

}
}


export const getAllProducts = async()=>{
    try{
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get(`${IP_PRODUCT}/getAllProducts`,{
            header:{
                Authorization :`Bearer ${token}`
            }
        });
        return response.data

    }catch(error){
        console.log(error);
        if(error.response){
            throw new Error(error.response.data.message)
        }else{
            throw new Error(error.message)
        }

    }
}