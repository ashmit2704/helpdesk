import { useNavigate } from "react-router-dom";
import Header from "../../partials/Header";

const NewTicket = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-white min-h-screen">
        <Header/>
        <div className="flex">
            {/* Sidebar */}
            <div className="w-50 bg-[#6A6767]/21 min-h-[calc(100vh-60px)] shadow-md relative">
                <img src="/Vector.png" className="w-2.5 absolute top-21.5 left-4"/>
                <div className="pt-7 pl-8">
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/user/dashboard')}}>
                        <span className="mr-1"><img src="/DashboardLayout.png" className="w-8" /></span> Dashboard
                    </div>
                    <div className="mb-6 flex items-center text-xl cursor-pointer">
                        <span className="ml-1 mr-2.5"><img src="/NewTicket.png" className="w-5" /></span> New Ticket
                    </div>
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/user/my-ticket')}}>
                        <span className="ml-1 mr-2.5"><img src="/TwoTickets.png" className="w-5" /></span> My Ticket
                    </div>
                </div>
        </div>
            {/* Main Body */}
            <div className="flex-1 flex flex-col min-h-[calc(100vh-60px)]">
                <div className="pt-6 px-50">
                    <h2 className="text-2xl font-serif font-semibold text-center mb-8">Create New Ticket</h2>
                    <form className="space-y-6">
                        {/* Row 1 */}
                        <div className="flex gap-24 mb-4">
                            <div className="flex items-center flex-1">
                                <label className="w-32 text-md font-serif">Ticket No.</label>
                                <div className="flex-1">
                                    <input className="bg-[#C4C4C4]/63 rounded-md h-9 shadow-[0px_1px_3px_black] ring-white ring px-3 w-full"></input>
                                </div>
                            </div>
                            <div className="flex items-center flex-1">
                                <label className="w-32 text-md font-serif">Date:</label>
                                <div className="flex-1">
                                    <input className="bg-[#C4C4C4]/63 rounded-md h-9 shadow-[0px_1px_3px_black] ring-white ring px-3 w-full"></input>
                                </div>
                            </div>
                        </div>
                        {/* Row 2 */}
                        <div className="flex gap-24 mb-4">
                            <div className="flex items-center flex-1">
                                <label className="w-32 text-md font-serif">Name:</label>
                                <div className="flex-1">
                                    <input className="bg-[#C4C4C4]/63 rounded-md h-9 shadow-[0px_1px_3px_black] ring-white ring px-3 w-full"></input>
                                </div>
                            </div>
                            <div className="flex items-center flex-1">
                                <label className="w-32 text-md font-serif">Department:</label>
                                <div className="flex-1">
                                    <input className="bg-[#C4C4C4]/63 rounded-md h-9 shadow-[0px_1px_3px_black] ring-white ring px-3 w-full"></input>
                                </div>
                            </div>
                        </div>
                        {/* Subject, Category, Description, etc. */}
                        <div className="flex flex-col mb-4">
                            <label className="mb-3 text-md font-serif">Subject:</label>
                            <input type="text" className="bg-[#C4C4C4]/63 rounded-md h-9 shadow-[0px_1px_3px_black] ring-white ring px-3 w-full" />
                        </div>
                        {/* Row 3 */}
                        <div className="flex gap-8 mb-2">
                            <div className="flex flex-col flex-1 gap-3.5">
                                <div className="flex flex-col">
                                    <label className="mb-3 text-md font-serif">Category:</label>
                                    <input type="text" className="bg-[#C4C4C4]/63 rounded-md h-9 shadow-[0px_1px_3px_black] ring-white ring px-3 w-full" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-3 text-md font-serif">Type:</label>
                                    <input type="text" className="bg-[#C4C4C4]/63 rounded-md h-9 shadow-[0px_1px_3px_black] ring-white ring px-3 w-full" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-3 text-md font-serif">Priority:</label>
                                    <input type="text" className="bg-[#C4C4C4]/63 rounded-md h-9 shadow-[0px_1px_3px_black] ring-white ring px-3 w-full" />
                                </div>
                            </div>
                            <div className="flex flex-col flex-1">
                                <label className="mb-3 text-md font-serif">Description:</label>
                                <div className="relative h-full flex-1">
                                    <textarea
                                        rows={5}
                                        className="rounded-md px-3 py-2 w-full h-full min-h-[120px] shadow-[0px_1px_3px_black] ring-white ring bg-[#C4C4C4]/63 resize-none"
                                        style={{ height: "100%" }}
                                    />
                                    <button type="button" className="absolute bottom-3 right-2 bg-[#55D6C2] rounded-lg p-1 hover:cursor-pointer">
                                        <img src="/Clip.png" alt="Attach" className="w-3 my-1 mx-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* reCAPTCHA and Submit */}
                        <div className="flex items-center justify-between mt-4">
                            <div>
                                <img src="/captcha.png" className="w-80"/>
                            </div>
                            <button type="submit" className="bg-[#55D6C2] hover:bg-teal-500 text-black font-semibold px-12 py-2 rounded-md transition-colors hover:cursor-pointer">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <footer className="bg-[#55D6C2] text-gray-900 text-center text-xs py-1 mt-auto font-medium">
                    Footer Area
                </footer>
            </div>
        </div>
    </div>
  )
}

export default NewTicket;