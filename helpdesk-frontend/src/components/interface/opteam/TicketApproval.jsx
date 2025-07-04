import { useNavigate } from "react-router-dom";
import Header from "../../partials/Header";

const TicketApproval = () => {
    const navigate = useNavigate();
    
    
return (
    <div className="bg-white min-h-screen">
        <Header/>
        <div className="flex">
            {/* Sidebar */}
            <div className="w-50 bg-[#6A6767]/21 min-h-[calc(100vh-60px)] shadow-md relative">
                <img src="/Vector.png" className="w-2.5 absolute top-25 left-4"/>
                <div className="pt-7 pl-8">
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/opteam/dashboard')}}>
                        <span className="mr-1"><img src="/DashboardLayout.png" className="w-8" /></span> Dashboard
                    </div>
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/opteam/ticket-approval')}}>
                        <span className="ml-1 mr-2.5"><img src="/Approval.png" className="w-5" /></span> Ticket Approval
                    </div>
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/opteam/my-ticket')}}>
                        <span className="ml-1 mr-2.5"><img src="/TwoTickets.png" className="w-5" /></span> My Ticket
                    </div>
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/opteam/performance')}}>
                        <span className="ml-1 mr-2.5"><img src="/Performance.png" className="w-5" /></span> Performance
                    </div>
                </div>
            </div>
            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-[calc(100vh-60px)] bg-white">
                <div className="py-6 px-20">

                    <h1 className="text-2xl font-medium mb-6">Ticket Approval</h1>
                    <div className="flex items-center mb-5 relative w-60">
                        <input
                            type="text"
                            placeholder="Find ticket"
                            className="bg-[#C4C4C4]/63 rounded-md h-9 shadow-[0px_1px_3px_black] ring-white ring px-3 w-full"
                        />
                        <svg className="absolute right-2 hover:cursor-pointer" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </div>
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center space-x-2 pl-0">
                            <span>Show:</span>
                            <select className="rounded px-2 py-1 w-16 bg-[#C4C4C4]">
                                <option>10</option>
                                <option>25</option>
                                <option>50</option>
                            </select>
                            <span>Entries</span>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-[#C4C4C4]">
                            <thead>
                                <tr className="text-center">
                                    <th className="py-2 px-4 font-normal">Ticket No.</th>
                                    <th className="py-2 px-4 font-normal">Subject</th>
                                    <th className="py-2 px-4 font-normal">Category</th>
                                    <th className="py-2 px-4 font-normal">Priority</th>
                                    <th className="py-2 px-4 font-normal">Date</th>
                                    <th className="py-2 px-4 font-normal">Action</th>
                                    <th className="py-2 px-4 font-normal">Assign to</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-[#C4C4C4]/37 text-center">
                                    <td className="py-2 px-4 underline">1234</td>
                                    <td className="py-2 px-4">Login issue</td>
                                    <td className="py-2 px-4">Access issue</td>
                                    <td className="py-2 px-4">High</td>
                                    <td className="py-2 px-4">13/08/21</td>
                                    <td className="py-3.5 px-4 flex justify-center items-center space-x-2">
                                        <button title="Approve"><img src="/right.png" className="w-4"></img></button>
                                        <button title="Reject"><img src="/close.png" className="w-4"></img></button>
                                    </td>
                                    <td className="py-2 px-4 w-32">
                                        <div className="relative">
                                            <button className="bg-[#C4C4C4] px-2 py-1 rounded flex items-center justify-end w-full">
                                                <span></span>
                                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-[#C4C4C4]/56 text-center">
                                    <td className="py-2 px-4 underline">1124</td>
                                    <td className="py-2 px-4">New ticket issue</td>
                                    <td className="py-2 px-4">Access issue</td>
                                    <td className="py-2 px-4">Medium</td>
                                    <td className="py-2 px-4">14/08/21</td>
                                    <td className="py-3.5 px-4 flex justify-center items-center space-x-2">
                                        <button title="Approve"><img src="/right.png" className="w-4"></img></button>
                                        <button title="Reject"><img src="/close.png" className="w-4"></img></button>
                                    </td>
                                    <td className="py-2 px-4 w-32">
                                        <div className="relative">
                                            <button className="bg-[#C4C4C4] px-2 py-1 rounded flex items-center justify-end w-full">
                                                <span></span>
                                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-[#C4C4C4]/37 text-center">
                                    <td className="py-2 px-4 underline">1224</td>
                                    <td className="py-2 px-4">New request</td>
                                    <td className="py-2 px-4">Feedback</td>
                                    <td className="py-2 px-4">Low</td>
                                    <td className="py-2 px-4">13/08/21</td>
                                    <td className="py-3.5 px-4 flex justify-center items-center space-x-2">
                                        <button title="Approve"><img src="/right.png" className="w-4"></img></button>
                                        <button title="Reject"><img src="/close.png" className="w-4"></img></button>
                                    </td>
                                    <td className="py-2 px-4 w-32">
                                        <div className="relative">
                                            <button className="bg-[#C4C4C4] px-2 py-1 rounded flex items-center justify-end w-full">
                                                <span></span>
                                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-[#C4C4C4]/56 text-center">
                                    <td className="py-2 px-4 underline">1244</td>
                                    <td className="py-2 px-4">Ticket submission</td>
                                    <td className="py-2 px-4">Ticketing</td>
                                    <td className="py-2 px-4">High</td>
                                    <td className="py-2 px-4">14/08/21</td>
                                    <td className="py-3.5 px-4 flex justify-center items-center space-x-2">
                                        <button title="Approve"><img src="/right.png" className="w-4"></img></button>
                                        <button title="Reject"><img src="/close.png" className="w-4"></img></button>
                                    </td>
                                    <td className="py-2 px-4 w-32">
                                        <div className="relative">
                                            <button className="bg-[#C4C4C4] px-2 py-1 rounded flex items-center justify-end w-full">
                                                <span></span>
                                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-[#C4C4C4]/37 text-center">
                                    <td className="py-2 px-4 underline">1114</td>
                                    <td className="py-2 px-4">Login issue</td>
                                    <td className="py-2 px-4">Access issue</td>
                                    <td className="py-2 px-4">High</td>
                                    <td className="py-2 px-4">3/08/21</td>
                                    <td className="py-3.5 px-4 flex justify-center items-center space-x-2">
                                        <button title="Approve"><img src="/right.png" className="w-4"></img></button>
                                        <button title="Reject"><img src="/close.png" className="w-4"></img></button>
                                    </td>
                                    <td className="py-2 px-4 w-32">
                                        <div className="relative">
                                            <button className="bg-[#C4C4C4] px-2 py-1 rounded flex items-center justify-end w-full">
                                                <span></span>
                                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
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

export default TicketApproval;