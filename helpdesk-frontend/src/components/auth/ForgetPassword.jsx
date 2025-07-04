import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-[#55D6C2] min-h-screen flex items-center justify-center">
        <div className="bg-[#EFEDED]/50 w-[600px] h-[450px] flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 rounded-sm pointer-events-none" />
                <p className="text-center mt-8 mb-8 text-[16px] text-black">
                    Don’t worry, Enter your email below and we will<br />
                    send you a link to change password.
                </p>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-[400px] h-12 px-4 text-lg border border-gray-600 rounded mb-8 focus:outline-none bg-white"
                />
                <button
                    className=" bg-[#03CC17] hover:bg-[#13a10e] text-white text-xl rounded-xl mb-5 transition-all hover:cursor-pointer h-12 w-[220px]"
                >
                    Submit
                </button>
                <button
                    className="bg-[#0769DC] hover:bg-blue-700 text-white text-xl rounded-xl transition-all hover:cursor-pointer h-12 w-[220px]"
                    onClick={() => navigate("/")}
                >
                    Sign In
                </button>
        </div>
    </div>
  )
}

export default ForgetPassword;