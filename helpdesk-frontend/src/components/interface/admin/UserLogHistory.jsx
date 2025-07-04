import { useNavigate } from "react-router-dom";
import Header from "../../partials/Header";

const UserLogHistory = () => {
    const navigate = useNavigate();
return (
    <div className="bg-white min-h-screen">
        <Header />
        <div className="flex">
            {/* Sidebar */}
            <div className="w-50 bg-[#6A6767]/21 min-h-[calc(100vh-60px)] shadow-md relative">
                <img src="../../public/Vector.png" className="w-2.5 absolute top-51 left-4" />
                <div className="pt-7 pl-8">
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => { navigate('/admin/dashboard') }}>
                        <span className="mr-1"><img src="../../public/DashboardLayout.png" className="w-8" /></span> Dashboard
                    </div>
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => { navigate('/admin/database') }}>
                        <span className="ml-1 mr-2.5"><img src="../../public/Database.png" className="w-5" /></span> Database
                    </div>
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => { navigate('/admin/setting') }}>
                        <span className="ml-1 mr-2.5"><img src="../../public/Setting.png" className="w-5" /></span> Setting
                    </div>
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => { navigate('/admin/user-log-history') }}>
                        <span className="ml-1 mr-2.5"><img src="../../public/UserLog.png" className="w-5" /></span> User Log History
                    </div>
                </div>
            </div>
            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-[calc(100vh-60px)] bg-white">
                <div className="py-6 px-20">
                    <h1 className="text-2xl font-medium mb-6">User Log History</h1>
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center space-x-2 pl-0">
                            <span>Show:</span>
                            <select className="rounded px-2 py-1 w-16 bg-[#C4C4C4]">
                                <option>5</option>
                                <option>10</option>
                                <option>25</option>
                                <option>50</option>
                            </select>
                            <span>entries</span>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-[#C4C4C4]">
                            <thead>
                                <tr className="text-center">
                                    <th className="py-2 px-4 font-normal">No.</th>
                                    <th className="py-2 px-4 font-normal">Date/Sign InTime</th>
                                    <th className="py-2 px-4 font-normal">Staff ID</th>
                                    <th className="py-2 px-4 font-normal">Department</th>
                                    <th className="py-2 px-4 font-normal">Activity</th>
                                    <th className="py-2 px-4 font-normal">Date/Sign Out time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-[#C4C4C4]/37 text-center">
                                    <td className="py-2 px-4">1.</td>
                                    <td className="py-2 px-4">130821 / 0800</td>
                                    <td className="py-2 px-4">XL000001</td>
                                    <td className="py-2 px-4">OT</td>
                                    <td className="py-2 px-4">Create Team</td>
                                    <td className="py-2 px-4">130821 / 0815</td>
                                </tr>
                                <tr className="bg-[#C4C4C4]/56 text-center">
                                    <td className="py-2 px-4">2.</td>
                                    <td className="py-2 px-4">130821 / 0805</td>
                                    <td className="py-2 px-4"></td>
                                    <td className="py-2 px-4"></td>
                                    <td className="py-2 px-4"></td>
                                    <td className="py-2 px-4">130821 / 0810</td>
                                </tr>
                                <tr className="bg-[#C4C4C4]/37 text-center">
                                    <td className="py-2 px-4">3.</td>
                                    <td className="py-2 px-4"></td>
                                    <td className="py-2 px-4"></td>
                                    <td className="py-2 px-4"></td>
                                    <td className="py-2 px-4"></td>
                                    <td className="py-2 px-4"></td>
                                </tr>
                                <tr className="bg-[#C4C4C4]/56 text-center">
                                    <td className="py-2 px-4">4.</td>
                                    <td className="py-2 px-4"></td>
                                    <td className="py-2 px-4"></td>
                                    <td className="py-2 px-4"></td>
                                    <td className="py-2 px-4"></td>
                                    <td className="py-2 px-4"></td>
                                </tr>
                                <tr className="bg-[#C4C4C4]/37 text-center">
                                    <td className="py-2 px-4">5.</td>
                                    <td className="py-2 px-4"></td>
                                    <td className="py-2 px-4"></td>
                                    <td className="py-2 px-4"></td>
                                    <td className="py-2 px-4"></td>
                                    <td className="py-2 px-4"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-between items-center mt-4 text-md">
                        <span>Showing 1 to 5 of 5 entries</span>
                        <div className="flex items-center space-x-2">
                            <span className="text-xl">&laquo;</span>
                            <span className="text-xl">&lsaquo;</span>
                            <span className="">1</span>
                            <span className="text-xl">&rsaquo;</span>
                            <span className="text-xl">&raquo;</span>
                        </div>
                    </div>
                </div>
                <footer className="bg-[#55D6C2] text-gray-900 text-center text-xs py-1 mt-auto font-medium">
                    Footer Area
                </footer>
            </div>
        </div>
    </div>
);
}

export default UserLogHistory;