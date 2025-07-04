import { useNavigate } from "react-router-dom";
import Header from "../../partials/Header";
import { useState, useEffect } from "react";

const Dashboard = () => {
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
                        <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/user/new-ticket')}}>
                            <span className="ml-1 mr-2.5"><img src="/NewTicket.png" className="w-5" /></span> New Ticket
                        </div>
                        <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/user/my-ticket')}}>
                            <span className="ml-1 mr-2.5"><img src="/TwoTickets.png" className="w-5" /></span> My Ticket
                        </div>
                    </div>
                </div>
                {/* Main Content */}
                <main className="flex-1 flex flex-col min-h-[calc(100vh-60px)]">
                    <div className="flex-1 pt-8 flex flex-col items-center">
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
                    <footer className="bg-[#55D6C2] text-gray-900 text-center text-xs py-1 mt-auto font-medium">
                        Footer Area
                    </footer>
                </main>
            </div>
        </div>
    )
}

export default Dashboard;