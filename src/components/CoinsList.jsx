import { useState } from 'react';
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import useSearch from '../hooks/useSearch';
import Loading from './Loading';
import Error from './Error';
import NoResult from './NoResult';

const CoinsList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, loading, error } = useFetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=30&page=${currentPage}`);
    const { search } = useSearch();

    const numberWithCommas = (x) => {
        return Number(x).toLocaleString();
    }
    const filtredItems = () => {
        if (search.length !== 0)
            return data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        return data;
    };

    return (
        <>
            <div className="pt-[5.5rem] md:pt-[6.5rem] bg-cus-white-100 dark:bg-zinc-900 dark:*:text-white/90 overflow-auto min-h-screen grid">
                {error && <Error />}

                {loading && <Loading />}

                {!error && !loading && filtredItems().length === 0 && <NoResult />}

                {!error && !loading && filtredItems().length != 0 && (
                    <table className='h-fit text-right align-middle table-fixed border-collapse'>
                        <thead>
                            <tr className='*:py-3 *:pr-10 [&>:last-child]:pr-3 *:pl-3 *:text-nowrap *:font-medium text-lg dark:border-b dark:border-cus-white-400'>
                                <th className='text-left'>Coin</th>
                                <th>Price</th>
                                <th>24h</th>
                                <th>Lowest 24h</th>
                                <th>Highest 24h</th>
                                <th>24h Volume</th>
                                <th>Market Cap</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtredItems()
                                ?.map(item => (
                                    <tr key={item.id} className='*:py-3 *:pr-10 [&>:last-child]:pr-3 *:pl-3 text-nowrap odd:bg-cus-white-50 dark:odd:bg-zinc-800/50'>
                                        <td>
                                            <Link to={`/${item.id}`} className='flex items-center gap-x-1.5 w-fit'>
                                                <img src={item.image} alt={item.name} className='w-7' />
                                                <span>{item.name}</span>
                                            </Link>
                                        </td>
                                        <td>${numberWithCommas(item.current_price)}</td>
                                        <td className={`
                                            flex 
                                            items-center
                                            justify-end
                                            gap-x-1
                                            ${item.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                            {item.price_change_percentage_24h > 0 ? (
                                                <FaArrowTrendUp />
                                            ) : (
                                                <FaArrowTrendDown />
                                            )}
                                            {Math.abs(item.price_change_percentage_24h.toFixed(2))}%
                                        </td>
                                        <td>${numberWithCommas(item.low_24h)}</td>
                                        <td>${numberWithCommas(item.high_24h)}</td>
                                        <td>${numberWithCommas(item.total_volume)}</td>
                                        <td>${numberWithCommas(item.market_cap)}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                )}
            </div>
            <ReactPaginate
                breakLabel='...'
                nextLabel='>'
                nextLinkClassName='font-medium w-7 h-7 flex items-center justify-center bg-cus-white-200 dark:bg-cus-white-700 hover:bg-cus-white-300 dark:hover:bg-cus-white-900 rounded-md'
                previousLabel='<'
                previousLinkClassName='font-medium w-7 h-7 flex items-center justify-center bg-cus-white-200 dark:bg-cus-white-700 hover:bg-cus-white-300 dark:hover:bg-cus-white-900 rounded-md'
                pageLinkClassName='w-7 h-7 flex items-center justify-center hover:bg-cus-white-200 dark:hover:bg-cus-white-700 rounded-md'
                containerClassName={`${search || error || loading ? 'hidden' : 'flex'} justify-center items-center gap-1.5 select-none pt-6 pb-3 bg-cus-white-50 dark:bg-zinc-900 border-t border-dotted border-cus-white-300 dark:border-cus-white-400 dark:text-white`}
                activeLinkClassName='bg-cus-white-950 hover:bg-cus-white-950 dark:bg-cus-white-100 dark:hover:bg-cus-white-100/[99] text-white dark:text-black rounded-md'
                pageCount='9'
                marginPagesDisplayed={window.innerWidth > 768 ? '2' : '1'}
                onPageChange={(e) => setCurrentPage(e.selected + 1)}
            />
        </>
    )
}

export default CoinsList