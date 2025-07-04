import { useNavigate } from "react-router-dom";
import Header from "../../partials/Header";
import { useState, useEffect } from "react";

const AdminDashboard = () => {
    const navigate = useNavigate();

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const target1 = 12;
    const target2 = 8;
    const target3 = 2;

    useEffect(() => {
        const interval1 = setInterval(() => {
            setCount1(prev => {
                if (prev < target1) return prev + 1;
                clearInterval(interval1);
                return prev;
            });
        }, 40);

        const interval2 = setInterval(() => {
            setCount2(prev => {
                if (prev < target2) return prev + 1;
                clearInterval(interval2);
                return prev;
            });
        }, 40);

        const interval3 = setInterval(() => {
            setCount3(prev => {
                if (prev < target3) return prev + 1;
                clearInterval(interval3);
                return prev;
            });
        }, 40);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
        };
    }, []);
    return (
        <div className="bg-white min-h-screen">
            <Header/>
            <div className="flex">
                {/* Sidebar */}
                <div className="w-50 bg-[#6A6767]/21 min-h-[calc(100vh-60px)] shadow-md relative">
                    <img src="/Vector.png" className="w-2.5 absolute top-8.5 left-4"/>
                    <div className="pt-7 pl-8">
                        <div className="mb-6 flex items-center text-xl cursor-pointer">
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
                {/* Main Content */}
                <main className="flex-1 flex flex-col min-h-[calc(100vh-60px)]">
                    <div className="pt-8 flex flex-col items-center">
                        <div className="text-3xl font-medium mb-7.5">Dashboard</div>
                        <div className="flex gap-7.5 text-lg">
                            {/* Card 1 */}
                            <div className="bg-[#2F82FF] w-46 h-49 rounded-2xl shadow-[5px_5px_1px_#9EA6A1] flex flex-col items-center justify-center relative">
                                <div className="flex flex-col items-center">
                                    <div className="mb-2.5 absolute top-3">Total Tickets</div>
                                    <div className="text-7xl font-medium text-[#05386B] absolute bottom-8">{count1}</div>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-[#0BFF68] text-gray-900 w-46 h-49 rounded-2xl shadow-[5px_5px_1px_#9EA6A1] flex flex-col items-center justify-center relative">
                                <div className="mb-2.5 absolute top-3">Total Solved</div>
                                <div className="text-7xl font-medium text-[#05386B] absolute bottom-8">{count2}</div>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-[#FE594E] text-gray-900 w-46 h-49 rounded-2xl shadow-[5px_5px_1px_#9EA6A1] flex flex-col items-center justify-center relative">
                                <div className="mb-2.5 text-center absolute top-3">Total<br />Awaiting<br />Approval</div>
                                <div className="text-7xl font-medium text-[#05386B] absolute bottom-8">{count3}</div>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-[#FCFF6C] text-gray-900 w-46 h-49 rounded-2xl shadow-[5px_5px_1px_#9EA6A1] flex flex-col items-center justify-center relative">
                                <div className="mb-2.5 text-center absolute top-3">Total in<br />Progress</div>
                                <div className="text-7xl font-medium text-[#05386B] absolute bottom-8">{count3}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-8 gap-7.5 w-full px-56">
                        {/* Chart Section */}
                        <div className="bg-[#55D6C2] flex-1 flex items-center justify-center min-h-[220px]">
                            <svg width="160" height="160" viewBox="0 0 130 130"> 
                                <rect x="5" y="80" width="20" height="30" rx="3" fill="none" stroke="#05386B" strokeWidth="7"/>
                                <rect x="40" y="45" width="20" height="65" rx="3" fill="none" stroke="#05386B" strokeWidth="7"/>
                                <rect x="75" y="4" width="20" height="105" rx="3" fill="none" stroke="#05386B" strokeWidth="7"/>
                                <rect x="0" y="107" width="100" height="8" rx="5" fill="#05386B"/>
                            </svg>
                        </div>
                        {/* Team Section */}
                        <div className="flex flex-col gap-4 flex-1">
                            <div className="bg-[#55D6C2] flex flex-row items-center justify-around min-h-[110px] pt-5 pb-1">
                                <div className="flex flex-col items-center">
                                    <img src="/soporte-tecnico.png" alt="Technical Support" className="w-16" />
                                    <div className="text-xl font-medium mt-1 text-[#05386B]">3</div>
                                    <div className="font-medium">Technical</div>
                                    <div className="font-medium">Supports</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src="/techno2.png" alt="Operation Team" className="w-16" />
                                    <div className="text-xl font-medium mt-1 text-[#05386B]">4</div>
                                    <div className="font-medium">Operation</div>
                                    <div className="font-medium">Team</div>
                                </div>
                            </div>
                            <div className="bg-[#55D6C2] rounded-xl flex flex-col items-center justify-center py-3">
                                <div className="text-lg font-medium mb-1">Customer Feedback</div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36"/></svg>
                                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36"/></svg>
                                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36"/></svg>
                                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36"/></svg>
                                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <defs>
                                            <linearGradient id="half">
                                                <stop offset="50%" stopColor="currentColor"/>
                                                <stop offset="50%" stopColor="#d1d5db"/>
                                            </linearGradient>
                                        </defs>
                                        <polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36" fill="url(#half)"/>
                                    </svg>
                                </div>
                            </div>
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

export default AdminDashboard;