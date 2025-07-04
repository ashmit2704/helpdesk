import { useNavigate } from "react-router-dom";
import Header from "../../partials/Header";

const Database = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-white min-h-screen">
        <Header/>
        <div className="flex">
            {/* Sidebar */}
            <div className="w-50 bg-[#6A6767]/21 min-h-[calc(100vh-60px)] shadow-md relative">
                <img src="/Vector.png" className="w-2.5 absolute top-21.5 left-4"/>
                <div className="pt-7 pl-8">
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/admin/dashboard')}}>
                        <span className="mr-1"><img src="/DashboardLayout.png" className="w-8" /></span> Dashboard
                    </div>
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/admin/database')}}>
                        <span className="ml-1 mr-2.5"><img src="/Database.png" className="w-5" /></span> Database
                    </div>
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/admin/setting')}}>
                        <span className="ml-1 mr-2.5"><img src="/Setting.png" className="w-5" /></span> Setting
                    </div>
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/admin/user-log-history')}}>
                        <span className="ml-1 mr-2.5"><img src="/UserLog.png" className="w-5" /></span> User Log History
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Database;