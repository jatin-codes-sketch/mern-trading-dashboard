import {useContext,useState} from 'react'
import {useNavigate} from "react-router-dom"
import api from "../../api/axios";
import AuthContext from "./AuthContext"

const Login = () => {
    const {login}=useContext(AuthContext);
    const navigate=useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit=async(e)=>{
        e.preventDefault();
        setError("");
    

    try {
        const res=await api.post("/users/login",{email,password})
        
        const {user,accessToken}=res.data.data;
        login(user,accessToken);
        navigate("/dashboard");
    } catch (error) {
        setError(
            error.response?.data?.message || "Login failed. Try again."
        )
    }
}

  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Login to Kite
        </h2>

        {error && (
          <p className="text-red-600 text-sm mb-3">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login