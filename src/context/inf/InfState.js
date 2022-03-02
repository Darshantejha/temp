import React, {  useReducer } from "react";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import InfContext from "./infContext";
import infReducer from "./infReducer";
import { POST_INF_DETAILS_SUCCESS,AUTH_ERROR } from "../types";

const InfState = props =>{

    const initialState = {
        companyDetails:null,
        hr:null,
        ahr:null,
        inf:null
    };
    const [state,dispatch] = useReducer(infReducer,initialState);
    // Methods

    // Set Alert
    // const setAlert = (msg)=>{
    //     const id = uuidv4();
    //     dispatch({
    //         type:SET_ALERT,
    //         payload:{msg,id}
    //     });

    //     setTimeout(function(){dispatch({type:REMOVE_ALERT,payload:id})},1000);
    // }


    const inf = async(formData)=>{
        // setting token in the global header ie x-auth-token = token 
        if(localStorage.token){
         setAuthToken(localStorage.token);}
         try {
             const res = await axios.post(`/api/inf/addInf`);
             dispatch({type:POST_INF_DETAILS_SUCCESS,payload:res.data});
         } catch (error) {
             dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
         }
      
     }
    return (
        <InfContext.Provider
        value={{
            ...state,
            inf
        }}>
            {props.children}
        </InfContext.Provider>
    )
}
export default InfState;
