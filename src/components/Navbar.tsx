import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4">
            {/* Search Bar */}
            <div className="hidden md:flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-2 max-w-[40vw] w-full">
                <Image src="/search.png" alt="" width={16} height={16} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 p-2 bg-transparent outline-none"
                />
            </div>

            {/* Icon and User */}
            <div className="flex items-center gap-4 justify-end w-full">
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                    <Image src="/message.png" alt="" width={20} height={20}/>
                </div>

                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                    <Image src="/announcement.png" alt="" width={20} height={20}/>
                    <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        1
                    </div>
                </div>

                <div className="flex flex-col">
                    <span className="text-sm font-medium leading-3">John Doe</span>
                    <span className="text-gray-500 text-[10px] text-right">Admin</span>
                </div>

                <div>
                    <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;