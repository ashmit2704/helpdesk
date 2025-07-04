import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
  return (
    <header className="bg-[#55D6C2] py-3 flex items-center justify-between">
        <div className="italic font-bold text-3xl text-white ml-5">
            Helpdesk
        </div>
        <div className="flex items-center gap-3 mr-5">
            <div className="relative">
                <img
                    src="/BMBI.png"
                    alt="BM BI"
                />
                <span className="absolute top-1.25 left-1.5 text-xs font-bold text-white px-1">BM</span>
                <span className="text-black absolute bottom-1.5 right-2.75 text-xs font-bold px-1">BI</span>
            </div>
            <span className="text-lg text-gray-900"><i className="fa fa-bell"></i></span>
            <span className="text-lg text-gray-900 hover:cursor-pointer" onClick={() => {navigate('/user/profile')}}><i className="fa fa-user"></i></span>
            <span className="text-lg text-gray-900 hover:cursor-pointer" onClick={() => {navigate('/')}}><i className="fa fa-sign-out"></i></span>
        </div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </header>
  )
}

export default Header;



