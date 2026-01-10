import { createContext,useEffect,useState } from "react";
import axios from "axios"


const AuthContext=createContext()

export const AuthProvider=({children})=>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const api = "http://localhost:5000/api/v1/users";

    useEffect(()=>{
        const token=localStorage.getItem("accessToken");
        if(!token){
            setLoading(false);
            return;
        }

        axios.get(`${api}/me`,{
            headers:{
                Authorization:`Bearer ${token}`
            },
        })
        .then((res)=>{
            setUser(res.data.user);
        })
        .catch(()=>{
            localStorage.removeItem("accessToken");
            setUser(null);
        })
        .finally(()=>setLoading(false));
    },[]);

    const login=(userData,token)=>{
        localStorage.setItem("accessToken",token);
        setUser(userData);
    };

    const logout=()=>{
        localStorage.removeItem("accessToken");
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{user,login,logout,loading}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;