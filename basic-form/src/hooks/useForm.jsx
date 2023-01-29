import { useState } from 'react';

// Object(external_react_["useState"])
    

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);
    
    
    const reset = () => setValues(initialState);
    
    
    //create a function to handle the input change


    
    return [values, handleInputChange, reset];
    };
