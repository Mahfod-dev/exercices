import { ChangeEvent, useState, } from "react";





export const useForm = (initialState) => {
    
    const [formData, setFormData] = useState(initialState);
    
    const reset = () => {
        setFormData(initialState);
    };
    
    const onChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };
    

    }