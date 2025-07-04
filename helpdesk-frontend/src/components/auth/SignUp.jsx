import { useNavigate} from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

return (
    <div className="bg-[#55D6C2] min-h-screen flex items-center justify-center">
        <div className="bg-[#EFEDED]/50 w-[600px] h-[450px] flex flex-col items-center justify-center relative">
            <h1 className="text-4xl font-bold italic mt-2 mb-2 text-center">
                Helpdesk System
            </h1>
            <p className="text-lg mb-4 text-center">Sign up here</p>
            <div className="flex flex-col gap-4 w-[400px]">
                <input
                    type="text"
                    placeholder="Username"
                    className="h-12 px-4 border border-gray-400 rounded text-lg focus:outline-none bg-white"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="h-12 px-4 border border-gray-400 rounded text-lg focus:outline-none bg-white"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="h-12 px-4 border border-gray-400 rounded text-lg focus:outline-none bg-white"
                />
            </div>
            <button className="bg-[#296EF2] text-white text-xl font-medium rounded-xl mt-6 mb-2 hover:bg-blue-700 transition-all hover:cursor-pointer h-12 w-[220px]">
                Sign Up
            </button>
            <div className="flex justify-between w-[400px] mt-2">
                <span className="text-[#EA0000] text-sm cursor-pointer " onClick={() => navigate('/auth/forget-password')}>
                    Forgot password
                </span>
                <span className="text-black text-lg cursor-pointer " onClick={() => navigate('/')}>
                    Sign In
                </span>
            </div>
        </div>
    </div>
)
}

export default SignUp