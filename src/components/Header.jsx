import React, { useState } from 'react'
import { FaBitcoin } from "react-icons/fa"
import { IoSearch } from "react-icons/io5"
import { MdPlaylistAddCircle } from "react-icons/md"

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
    window.addEventListener('scroll', () => setShowSearch(false))
    return (
        <>
            <header className='flex justify-between items-center px-4 py-8 md:py-12 bg-cus-white-300'>
                <div className='flex items-center gap-x-1'>
                    <FaBitcoin className='text-yellow-400 text-3xl' />
                    <h1 className='text-xl font-bold'>Crypto Tracker</h1>
                </div>
                <div className='flex items-center gap-x-1 text-2xl relative *:cursor-pointer'>
                    <IoSearch onClick={() => setShowSearch(!showSearch)} />
                    <MdPlaylistAddCircle />
                    {showSearch && (
                        <div className='absolute -bottom-12 right-6'>
                            <div className='w-3 h-3 rotate-45 bg-cus-white-400 absolute top-0 right-0 -translate-y-1/2 -translate-x-1/2'></div>
                            <input placeholder='Search...' type="text" className='bg-cus-white-400 outline-none border-none rounded-md w-60 h-9 p-2 text-sm text-white placeholder:text-white' />
                        </div>
                    )}
                </div>
            </header>
        </>
    )
}

export default Header