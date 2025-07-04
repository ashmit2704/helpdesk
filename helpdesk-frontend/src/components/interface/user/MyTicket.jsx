import { useNavigate } from "react-router-dom";
import Header from "../../partials/Header";
import TicketOverlay from "./TicketOverlay";
import { useState } from "react";

const MyTicket = () => {
    const navigate = useNavigate();

    const [showOverlay, setShowOverlay] = useState(false);
    const [value, setValue] = useState('');

    const handleClick = (ticket) => {
        setShowOverlay(true);
        setValue(ticket);
    }

    const handleClose = (value) => {
        if(value) {
            setShowOverlay(false);
            setValue('');
        }
    }

    return (
        <div className="bg-white min-h-screen">
            {showOverlay && <TicketOverlay ticket={value} close={handleClose}/>}
            <Header/>
            <div className="flex">
                {/* Sidebar */}
                <div className="w-50 bg-[#6A6767]/21 min-h-[calc(100vh-60px)] shadow-md relative">
                        <img src="../../public/Vector.png" className="w-2.5 absolute top-35 left-4"/>
                        <div className="pt-7 pl-8">
                                <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/user/dashboard')}}>
                                        <span className="mr-1"><img src="../../public/DashboardLayout.png" className="w-8" /></span> Dashboard
                                </div>
                                <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/user/new-ticket')}}>
                                        <span className="ml-1 mr-2.5"><img src="../../public/NewTicket.png" className="w-5" /></span> New Ticket
                                </div>
                                <div className="mb-6 flex items-center text-xl cursor-pointer">
                                        <span className="ml-1 mr-2.5"><img src="../../public/TwoTickets.png" className="w-5" /></span> My Ticket
                                </div>
                        </div>
                </div>
                {/* Main Content */}
                <div className="flex-1 flex flex-col min-h-[calc(100vh-60px)] bg-white">
                    <div className="py-6 px-20">

                        <h1 className="text-2xl font-medium text-center mb-6">List of Ticket</h1>
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
                            <div className="flex items-center space-x-2 pl-5">
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
                            <table className="min-w-full  border-[#C4C4C4]">
                                <thead>
                                    <tr className="text-center">
                                            <th className="py-2 px-4 font-normal">Ticket No.</th>
                                            <th className="py-2 px-4 font-normal">Subject</th>
                                            <th className="py-2 px-4 font-normal">Status</th>
                                            <th className="py-2 px-4 font-normal">Support by</th>
                                            <th className="py-2 px-4 font-normal">Date</th>
                                            <th className="py-2 px-4 font-normal">Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-[#C4C4C4]/37 text-center">
                                            <td className="py-2 px-4 text-[#000AFF] underline"><span className="hover:cursor-pointer" onClick={() => handleClick(1234)}>1234</span></td>
                                            <td className="py-2 px-4">Login issue</td>
                                            <td className="py-2 px-4">
                                                <span className="bg-[#5CDB95] text-black px-3 py-1 rounded-xl text-sm font-semibold w-full">In Progress</span>
                                            </td>
                                            <td className="py-2 px-4">Tech support</td>
                                            <td className="py-2 px-4">13/08/21</td>
                                            <td className="py-2 px-4">
                                                    {[...Array(5)].map((_, i) => (
                                                            <span key={i} className="text-gray-400 text-xl">&#9733;</span>
                                                    ))}
                                            </td>
                                    </tr>
                                    <tr className="bg-[#C4C4C4]/56 text-center">
                                            <td className="py-2 px-4 text-[#000AFF] underline"><span className="hover:cursor-pointer" onClick={() => handleClick(1124)}>1124</span></td>
                                            <td className="py-2 px-4">New ticket issue</td>
                                            <td className="py-2 px-4">
                                                <span className="bg-[#05386B] text-white px-5.25 py-1 rounded-xl text-sm font-semibold">On hold</span>
                                            </td>
                                            <td className="py-2 px-4">Operation Team</td>
                                            <td className="py-2 px-4">14/08/21</td>
                                            <td className="py-2 px-4">
                                                    {[...Array(5)].map((_, i) => (
                                                            <span key={i} className="text-gray-400 text-xl">&#9733;</span>
                                                    ))}
                                            </td>
                                    </tr>
                                    <tr className="bg-[#C4C4C4]/37 text-center">
                                            <td className="py-2 px-4 text-[#000AFF] underline"><span className="hover:cursor-pointer" onClick={() => handleClick(1224)}>1224</span></td>
                                            <td className="py-2 px-4">New request</td>
                                            <td className="py-2 px-4">
                                                    <span className="bg-gray-600 text-white px-6 py-1 rounded-xl text-sm font-semibold">Closed</span>
                                            </td>
                                            <td className="py-2 px-4">Tech support</td>
                                            <td className="py-2 px-4">13/08/21</td>
                                            <td className="py-2 px-4">
                                                    <span className="text-yellow-400 text-xl">&#9733;</span>
                                                    <span className="text-yellow-400 text-xl">&#9733;</span>
                                                    <span className="text-yellow-400 text-xl">&#9733;</span>
                                                    <span className="text-yellow-400 text-xl">&#9733;</span>
                                                    <div className="relative inline-block text-yellow-400 text-xl">
                                                        <span className="absolute overflow-hidden w-1/2">
                                                            &#9733;
                                                        </span>
                                                        <span className="text-gray-300">&#9733;</span>
                                                    </div>
                                            </td>
                                    </tr>
                                    <tr className="bg-[#C4C4C4]/56 text-center">
                                            <td className="py-2 px-4 text-[#000AFF] underline"><span className="hover:cursor-pointer" onClick={() => handleClick(1244)}>1244</span></td>
                                            <td className="py-2 px-4">Ticket submission</td>
                                            <td className="py-2 px-4">
                                                    <span className="bg-[#5CDB95] text-black px-3 py-1 rounded-xl text-sm font-semibold">In Progress</span>
                                            </td>
                                            <td className="py-2 px-4">Operation Team</td>
                                            <td className="py-2 px-4">14/08/21</td>
                                            <td className="py-2 px-4">
                                                    {[...Array(5)].map((_, i) => (
                                                            <span key={i} className="text-gray-400 text-xl">&#9733;</span>
                                                    ))}
                                            </td>
                                    </tr>
                                    <tr className="bg-[#C4C4C4]/37 text-center">
                                        <td className="py-2 px-4 text-[#000AFF] underline"><span className="hover:cursor-pointer" onClick={() => handleClick(1114)}>1114</span></td>
                                        <td className="py-2 px-4">Login issue</td>
                                        <td className="py-2 px-4">
                                                <span className="bg-[#5CDB95] text-black px-3 py-1 rounded-xl text-sm font-semibold">In Progress</span>
                                        </td>
                                        <td className="py-2 px-4">Tech support</td>
                                        <td className="py-2 px-4">3/08/21</td>
                                        <td className="py-2 px-4">
                                                {[...Array(5)].map((_, i) => (
                                                        <span key={i} className="text-gray-400 text-xl">&#9733;</span>
                                                ))}
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
    )
}

export default MyTicket;