import { useNavigate } from "react-router-dom";
import Header from "../../partials/Header";
import { useState } from "react";

const Setting = () => {
    const navigate = useNavigate();

    const [openGeneral, setOpenGeneral] = useState(false);
    const [openConnect, setOpenConnect] = useState(true);
    const [openEmail, setOpenEmail] = useState(false);
    const [openAuth, setOpenAuth] = useState(true);
    const [openNoti, setOpenNoti] = useState(false);

  return (
    <div className="bg-white min-h-screen">
        <Header/>
        <div className="flex">
            {/* Sidebar */}
            <div className="w-50 bg-[#6A6767]/21 min-h-[calc(100vh-60px)] shadow-md relative">
                <img src="../../public/Vector.png" className="w-2.5 absolute top-34.5 left-4"/>
                <div className="pt-7 pl-8">
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/admin/dashboard')}}>
                        <span className="mr-1"><img src="../../public/DashboardLayout.png" className="w-8" /></span> Dashboard
                    </div>
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/admin/database')}}>
                        <span className="ml-1 mr-2.5"><img src="../../public/Database.png" className="w-5" /></span> Database
                    </div>
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/admin/setting')}}>
                        <span className="ml-1 mr-2.5"><img src="../../public/Setting.png" className="w-5" /></span> Setting
                    </div>
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/admin/user-log-history')}}>
                        <span className="ml-1 mr-2.5"><img src="../../public/UserLog.png" className="w-5" /></span> User Log History
                    </div>
                </div>
            </div>
            <main className="flex-1 flex flex-col min-h-[calc(100vh-60px)]">
                <h2 className="text-2xl font-normal my-4 ml-10">Setting</h2>
                <div className="space-y-4 px-10 pb-4">
                    {/* General */}
                    <div>
                        <div className="bg-[#55D6C2] px-4 py-2 text-lg font-normal flex items-center">
                            <span>General</span>
                            <span className="ml-2 hover:cursor-pointer" onClick={() => setOpenGeneral((prev) => !prev)}>&#9660;</span>
                        </div>
                        {openGeneral && (
                            <div className="pl-10">
                                <div className="flex items-center justify-between px-8 py-2 bg-[#C4C4C4]/37">
                                    <span>Language</span>
                                    <div className="relative">
                                        <img
                                            src="/BMBI.png"
                                            alt="BM BI"
                                        />
                                        <span className="absolute top-1.25 left-1.5 text-xs font-bold text-white px-1">BM</span>
                                        <span className="text-black absolute bottom-1.5 right-2.75 text-xs font-bold px-1">BI</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between px-8 py-2 bg-[#C4C4C4]/56">
                                    <span>Data Backup</span>
                                    <button title="Approve" className="bg-white h-5 w-5 p-0.5"><img src="/public/right.png" className="w-4"></img></button>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Connect To */}
                    <div>
                        <div className="bg-[#55D6C2] px-4 py-2 text-lg font-normal flex items-center">
                            <span>Connect To</span>
                            <span className="ml-2 hover:cursor-pointer" onClick={() => setOpenConnect((prev) => !prev)}>&#9660;</span>
                        </div>
                        {openConnect && (
                            <div className="pl-10">
                                <div className="flex items-center justify-between px-8 py-2 bg-[#C4C4C4]/37">
                                    <span>GoDash</span>
                                    <button title="Approve" className="bg-white h-5 w-5 p-0.5"><img src="/public/right.png" className="w-4"></img></button>
                                </div>
                                <div className="flex items-center justify-between px-8 py-2 bg-[#C4C4C4]/56">
                                    <span>SuperController</span>
                                    <button title="Approve" className="bg-white h-5 w-5 p-0.5"><img src="/public/right.png" className="w-4"></img></button>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Email */}
                    <div>
                        <div className="bg-[#55D6C2] px-4 py-2 text-lg font-normal flex items-center">
                            <span>Email</span>
                            <span className="ml-2 hover:cursor-pointer" onClick={() => setOpenEmail((prev) => !prev)}>&#9660;</span>
                        </div>
                        {openEmail && (
                            <div className="pl-10">
                                <div className="flex items-center justify-between px-8 py-2 bg-[#C4C4C4]/37">
                                    <span>Enable SMTP</span>
                                    <button title="Approve" className="bg-white h-5 w-5 p-0.5"><img src="/public/right.png" className="w-4"></img></button>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Authorization */}
                    <div>
                        <div className="bg-[#55D6C2] px-4 py-2 text-lg font-normal flex items-center">
                            <span>Authorization</span>
                            <span className="ml-2 hover:cursor-pointer" onClick={() => setOpenAuth((prev) => !prev)}>&#9660;</span>
                        </div>
                        {openAuth && (
                            <div className="pl-10">
                                <div className="flex items-center justify-between px-8 py-2 bg-[#C4C4C4]/37">
                                    <span>Edit authorization</span>
                                    <button title="Approve" className="bg-white h-5 w-5 p-0.5"><img src="/public/right.png" className="w-4"></img></button>
                                </div>
                                <div className="flex items-center justify-between px-8 py-2 bg-[#C4C4C4]/56">
                                    <span>Authority Level</span>
                                    <span className="bg-[#C4C4C4] pl-8 pr-1 py-0.5 text-black flex items-center">
                                        <span className="mr-1">&#9660;</span>
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Notification */}
                    <div>
                        <div className="bg-[#55D6C2] px-4 py-2 text-lg font-normal flex items-center">
                            <span>Notification</span>
                            <span className="ml-2 hover:cursor-pointer" onClick={() => setOpenNoti((prev) => !prev)}>&#9660;</span>
                        </div>
                        {openNoti && (
                            <div className="pl-10">
                                <div className="flex items-center justify-between px-8 py-2 bg-[#C4C4C4]/37">
                                    <span>Enable Notification</span>
                                    <button title="Approve" className="bg-white h-5 w-5 p-0.5"><img src="/public/right.png" className="w-4"></img></button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <footer className="bg-[#55D6C2] text-gray-900 text-center text-xs py-1 mt-auto font-medium">
                    Footer Area
                </footer>
            </main>
        </div>
    </div>
  )
}

export default Setting;