import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

const EditProfile = () => {
    return (
    <div className="bg-white min-h-screen">
        <Header/>
        <div className="flex">
            {/* Sidebar */}
            <Sidebar/>
            <div className="flex-1 flex flex-col justify-start pt-4 px-30 bg-white min-h-[calc(100vh-60px)]">
                <h1 className="text-2xl mb-4 ml-10">User Profile</h1>
                <div className="ml-10 bg-white w-[90%]">
                    <div className="flex">
                        <button className="bg-[#55D6C2] text-black font-medium px-8 py-2 mb-0 mr-2 focus:outline-none">
                            Edit Account
                        </button>
                    </div>
                    <form>
                        <div className="grid grid-cols-2 items-center bg-[#C4C4C4]">
                            <div className="bg-[#8F8C8C] text-white px-4 py-2 border-b border-r border-gray-200">Username</div>
                            <div className="px-4 py-2">
                                <input className="w-full px-2 py-1 border border-gray-300 rounded bg-white" type="text" />
                            </div>
                            <div className="bg-[#8F8C8C] text-white px-4 py-2 border-b border-r border-gray-200">Current Password</div>
                            <div className="px-4 py-2">
                                <input className="w-full px-2 py-1 border border-gray-300 rounded bg-white" type="password" />
                            </div>
                            <div className="bg-[#8F8C8C] text-white px-4 py-2 border-b border-r border-gray-200">New Password</div>
                            <div className="px-4 py-2">
                                <input className="w-full px-2 py-1 border border-gray-300 rounded bg-white" type="password" />
                            </div>
                            <div className="bg-[#8F8C8C] text-white px-4 py-2 border-b border-r border-gray-200">Comfirm Password</div>
                            <div className="px-4 py-2">
                                <input className="w-full px-2 py-1 border border-gray-300 rounded bg-white" type="password" />
                            </div>
                            <div className="bg-[#8F8C8C] text-white px-4 py-2 border-b border-r border-gray-200">Email</div>
                            <div className="px-4 py-2">
                                <input className="w-full px-2 py-1 border border-gray-300 rounded bg-white" type="email" />
                            </div>
                            <div className="bg-[#8F8C8C] text-white px-4 py-2 border-b border-r border-gray-200">Real Name</div>
                            <div className="px-4 py-2">
                                <input className="w-full px-2 py-1 border border-gray-300 rounded bg-white" type="text" />
                            </div>
                            <div className="bg-[#8F8C8C] text-white px-4 py-2 border-b border-r border-gray-200">Access Level</div>
                            <div className="px-4 py-2">
                                <input className="w-full px-2 py-1 border border-gray-300 rounded bg-white" type="text" />
                            </div>
                            <div className="bg-[#8F8C8C] text-white px-4 py-2 border-b border-r border-gray-200">Project Access Level</div>
                            <div className="px-4 py-2">
                                <input className="w-full px-2 py-1 border border-gray-300 rounded bg-white" type="text" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="bg-[#C4C4C4] px-4 py-4 w-1/2">
                                <button type="submit" className="bg-[#5ED6C0] text-black font-medium px-8 py-2 rounded-md hover:cursor-pointer">
                                    Update User
                                </button>
                            </div>
                            <div className="bg-[#C4C4C4] px-4 py-4 w-1/2"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default EditProfile;