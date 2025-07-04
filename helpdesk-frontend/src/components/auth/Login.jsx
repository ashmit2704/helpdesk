import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const response = await fetch('https://helpdesk-7j6n.onrender.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('userType', data.userType);
            if(data.userType === "user") {
                navigate('/user/dashboard');
            } else if(data.userType === "admin") {
                navigate('/admin/dashboard')
            } else if(data.userType === "opteam") {
                navigate('/opteam/dashboard')
            } else if(data.userType === "techsupport") {
                navigate('/techsupport/dashboard')
            }
        } else {
            alert('Login failed');
        }
    };

    return (
        <div className="bg-[#55D6C2] min-h-screen flex items-center justify-center">
            <div className="bg-[#EFEDED]/50 w-[600px] h-[450px] flex flex-col items-center justify-center relative">
                <h1 className="text-3xl font-bold italic mb-8 mt-2 text-center">
                    Helpdesk System
                </h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className="w-[400px] h-12 px-4 mb-4 border border-gray-400 rounded text-lg bg-white"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-[400px] h-12 px-4 mb-6 border border-gray-400 rounded text-lg bg-white"
                />
                <button className="w-[220px] h-12 bg-[#03CC17] text-white text-xl rounded-xl mb-6 hover:bg-[#13a10e] transition-all hover:cursor-pointer" onClick={handleLogin}>
                    Sign In
                </button>
                <div className="w-[400px] flex justify-between items-center">
                    <span className="text-[#EA0000] text-sm cursor-pointer" onClick={() => navigate("/auth/forget-password")}>
                        Forgot password
                    </span>
                    <span className="text-black text-lg cursor-pointer" onClick={() => navigate("/auth/signup")}>
                        Sign Up
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Login;
