import { createContext, useContext, useState, useEffect} from "react"
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";

const AppContext = createContext()

export const AppProvider = ({children}) =>{
    const navigate = useNavigate()

    const [token, setToken]= useState(null)
    const [blogs, setBlogs]= useState([])
    const [input, setInput]= useState("")

    const fetchBlogs = async () =>{
        try{
           const {data} = await axios.get('/api/blog/all')
           data.success? setBlogs(data.blogs) : toast.error(data.message)
        }catch (error){
            toast.error(error.message)
        }
    }  

    useEffect(() =>{
      fetchBlogs();
      const token = localStorage.getItem('token')
      if(token){
        setToken(token);
        axios.defaults.headers.common['Authorization'] = `${token}`;
      }
    },[])

    const logout = () => {
        localStorage.removeItem("token");   // 1. Clears the token from persistent storage
        setToken(null);                     // 2. Updates the application state to be null
        delete axios.defaults.headers.common["Authorization"]; // 3. Removes the auth header from future axios requests
        navigate("/");                      // 4. Navigates the user to the homepage
    };

    const value ={
        axios, navigate, token ,setToken, blogs, setBlogs, input, setInput, logout
    }

    return(

        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
     )
}

export const useAppContext = () =>{
    return useContext(AppContext)
};