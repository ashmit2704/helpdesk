const TicketOverlay = ({ ticket, close }) => {
    const handleClick = () => {
        close(true);
    };
    return (
        <div className="fixed inset-0 w-screen h-screen bg-black/30 z-[9999] flex items-center justify-center">
            <div className="bg-white p-8 shadow-lg min-w-[700px]">
                <h2 className="text-center text-2xl font-semibold">Ticket Details</h2>
                <div className="my-8">
                    <div>Ticket No: {ticket}</div>
                    <div>Date:</div>
                    <div>Name:</div>
                    <div>Dept:</div>
                    <br />
                    <div>Title:</div>
                    <div>Description:</div>
                    <div>Category:</div>
                    <div>Type:</div>
                    <div>Priority:</div>
                    <div>Status:</div>
                    <div>Attachment:</div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-[#43D752] text-black rounded-lg px-10 py-1 text-md hover:cursor-pointer" onClick={handleClick}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TicketOverlay;
