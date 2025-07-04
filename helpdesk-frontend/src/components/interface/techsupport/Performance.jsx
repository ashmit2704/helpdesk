import { useNavigate } from "react-router-dom";
import Header from "../../partials/Header";

const TechPerformance = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-white min-h-screen">
        <Header/>
        <div className="flex">
            {/* Sidebar */}
            <div className="w-50 bg-[#6A6767]/21 min-h-[calc(100vh-60px)] shadow-md relative">
                <img src="../../public/Vector.png" className="w-2.5 absolute top-34.5 left-4"/>
                <div className="pt-7 pl-8">
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/techsupport/dashboard')}}>
                        <span className="mr-1"><img src="../../public/DashboardLayout.png" className="w-8" /></span> Dashboard
                    </div>
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/techsupport/my-ticket')}}>
                        <span className="ml-1 mr-2.5"><img src="../../public/TwoTickets.png" className="w-5" /></span> My Ticket
                    </div>
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/techsupport/performance')}}>
                        <span className="ml-1 mr-2.5"><img src="../../public/Performance.png" className="w-5" /></span> Performance
                    </div>
                </div>
            </div>
            {/* Main Content */}
            <main className="flex-1 flex flex-col min-h-[calc(100vh-60px)]">
                <h1 className="text-2xl font-serif mb-6 mt-4 ml-10 px-20">Performance</h1>
                <div className="flex ml-10 px-20">
                    {/* Left: Main Profile Card */}
                    <div>
                        <div className="flex items-center">
                            {/* Avatar */}
                            <div className="w-28 h-28 bg-black/12 rounded-xl flex items-center justify-center mr-6">
                                <svg width="60" height="60" fill="none" viewBox="0 0 24 24">
                                    <circle cx="12" cy="8" r="5" fill="#222" />
                                    <rect x="4" y="15" width="16" height="7" rx="3.5" fill="#222" />
                                </svg>
                            </div>
                            <div className="w-71">
                                <div className="text-2xl font-serif mb-6">Operation Name</div>
                                <div className="bg-black/12 rounded-lg px-4 py-2 text-sm font-mono">
                                    <div>Contact No: 0123456789</div>
                                    <div>Department: ABC</div>
                                </div>
                            </div>
                        </div>
                        {/* Ticket Handle Card */}
                        <div className="bg-black/12 rounded-xl mt-8 px-6 py-5 w-[420px]">
                            <div className="font-serif text-lg mb-2">Total Ticket Handle <span className="float-right font-mono text-xl">5</span></div>
                            <div className="ml-2 text-sm font-mono">
                                <div className="flex justify-between">
                                    <span>Ticket Solved</span>
                                    <span>2</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Ticket Pending</span>
                                    <span>1</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Ticket in progress</span>
                                    <span>2</span>
                                </div>
                                <div className="flex items-center justify-between ">
                                    <span className="mr-2">Rating</span>
                                    <span className="flex text-yellow-400 text-xl">
                                        <svg width="20" height="20" fill="currentColor"><polygon points="10,1 12.5,7.5 19,8 14,12.5 15.5,19 10,15.5 4.5,19 6,12.5 1,8 7.5,7.5" /></svg>
                                        <svg width="20" height="20" fill="currentColor"><polygon points="10,1 12.5,7.5 19,8 14,12.5 15.5,19 10,15.5 4.5,19 6,12.5 1,8 7.5,7.5" /></svg>
                                        <svg width="20" height="20" fill="currentColor"><polygon points="10,1 12.5,7.5 19,8 14,12.5 15.5,19 10,15.5 4.5,19 6,12.5 1,8 7.5,7.5" /></svg>
                                        <svg width="20" height="20" fill="currentColor"><polygon points="10,1 12.5,7.5 19,8 14,12.5 15.5,19 10,15.5 4.5,19 6,12.5 1,8 7.5,7.5" /></svg>
                                        <svg width="20" height="20" fill="currentColor"><polygon points="10,1 12.5,7.5 19,8 14,12.5 15.5,19 10,15.5 4.5,19 6,12.5 1,8 7.5,7.5" /></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right: Other Operations */}
                    <div className="ml-16 flex flex-col gap-7 mt-2">
                        {[1,2,3].map((n) => (
                            <div key={n} className="flex items-center">
                                <div className="w-16 h-16 bg-black/12 rounded-xl flex items-center justify-center mr-4">
                                    <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                                        <circle cx="12" cy="8" r="5" fill="#222" />
                                        <rect x="4" y="15" width="16" height="7" rx="3.5" fill="#222" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-serif text-lg">Operation Name {n}</div>
                                    <button className="mt-2 bg-[#55D6C2] hover:bg-[#3bbda8] text-black font-serif px-6 py-1.5 rounded-full text-base shadow-sm border border-[#4ED6C1] transition-all">
                                        View details
                                    </button>
                                </div>
                            </div>
                        ))}
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

export default TechPerformance;