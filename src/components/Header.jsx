import React, { useState } from 'react'
import { FaBitcoin } from "react-icons/fa"
import { IoSearch } from "react-icons/io5"
import { IoSunny } from "react-icons/io5"

const Header = ({ setSearch }) => {
    const [showSearch, setShowSearch] = useState(false);
    const searchHandler = (e) => {
        setSearch(e.target.value)
    };
    const themeHandler = () => {
        document.documentElement.classList.toggle('dark');
    };
    window.addEventListener('scroll', () => setShowSearch(false));

    return (
        <header className='flex justify-between items-center px-3 py-7 md:px-6 md:py-8 bg-cus-white-50 dark:bg-zinc-900 dark:text-white/90 md:rounded-b-3xl border-b border-cus-white-200 dark:border-cus-white-400 w-full fixed top-0 left-0'>
            <div className='flex items-center gap-x-1'>
                <FaBitcoin className='fill-yellow-400 text-3xl' />
                <h1 className='text-xl font-bold'>Crypto Tracker</h1>
            </div>
            <div className='flex items-center gap-x-2.5 text-2xl relative select-none'>
                <IoSearch onClick={() => setShowSearch(!showSearch)} className='cursor-pointer md:hidden' />
                {showSearch && (
                    <div className='absolute -bottom-12 right-8 md:hidden'>
                        <div className='w-3 h-3 rotate-45 bg-zinc-300 dark:bg-white absolute top-1 -right-0.5 -translate-y-1/2 -translate-x-1/2'></div>
                        <input placeholder='Search...' type="text" onChange={searchHandler} className='bg-zinc-300 dark:bg-white outline-none border-none rounded-md w-60 h-9 p-2 text-sm text-black dark:text-cus-white-400 placeholder:text-cus-white-400' />
                    </div>
                )}
                <input placeholder='Search...' type="text" onChange={searchHandler} className='bg-zinc-300 dark:bg-white/90 outline-none border-none rounded-md px-4 py-2 w-64 text-sm hidden md:block text-black dark:text-cus-white-400 placeholder:text-cus-white-400' />
                <IoSunny onClick={themeHandler} className='text-[25px] fill-yellow-400 dark:fill-white/90 dark:hover:fill-yellow-400 cursor-pointer' />
            </div>
        </header>
    )
}

export default Header