import React, { useState } from 'react'
import { FaBitcoin } from "react-icons/fa"
import { IoSearch } from "react-icons/io5"
import { MdPlaylistAddCircle } from "react-icons/md"

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
    window.addEventListener('scroll', () => setShowSearch(false))
    return (
        <>
            <header className='flex justify-between items-center px-3 py-7 md:px-6 md:py-8 bg-cus-white-50 rounded-b-3xl border border-cus-white-200 w-full fixed top-0 left-0'>
                <div className='flex items-center gap-x-1'>
                    <FaBitcoin className='text-yellow-400 text-3xl' />
                    <h1 className='text-xl font-bold'>Crypto Tracker</h1>
                </div>
                <div className='flex items-center gap-x-2.5 text-2xl relative'>
                    <IoSearch onClick={() => setShowSearch(!showSearch)} className='cursor-pointer md:hidden'/>
                    {showSearch && (
                        <div className='absolute -bottom-12 right-6 md:hidden'>
                            <div className='w-3 h-3 rotate-45 bg-cus-white-300/70 absolute top-0 right-0 -translate-y-1/2 -translate-x-1/2'></div>
                            <input placeholder='Search...' type="text" className='bg-cus-white-300/70 outline-none border-none rounded-md w-60 h-9 p-2 text-sm text-cus-white-950 placeholder:text-cus-white-600' />
                        </div>
                    )}
                    <input placeholder='Search...' type="text" className='bg-cus-white-300/70 outline-none border-none rounded-md px-4 py-2 w-64 text-sm text-cus-white-950 hidden md:block placeholder:text-cus-white-600' />
                    <MdPlaylistAddCircle className='cursor-pointer text-cus-white-950'/>
                </div>
            </header>
        </>
    )
}

export default Header