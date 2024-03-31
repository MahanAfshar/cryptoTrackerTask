import React, { useEffect, useState } from 'react'
import { FaArrowTrendDown } from "react-icons/fa6"
import { FaArrowTrendUp } from "react-icons/fa6"

const CoinsList = () => {
    const [data, setData] = useState([])
    const options = { method: 'GET', headers: { 'x-cg-demo-api-key': 'CG-GRqVbvv3AqZtdpWwgoJAGTcu' } };
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=200', options)
            .then((res) => res.json())
            .then((json) => setData(json))
    }, []);
    const numberWithCommas = (x) => {
        return Number(x).toLocaleString();
    }
    return (
        <div className="pt-[5.5rem] md:pt-[6.5rem] bg-cus-white-100 overflow-auto">
            <table className='min-w-full text-right align-middle table-fixed border-collapse'>
                <thead>
                    <tr className='*:py-3 *:pr-10 [&>:last-child]:pr-3 *:pl-3 *:text-nowrap text-lg *:font-medium border-b'>
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
                    {data.map(item => (
                        <tr key={item.id} className='*:py-3 *:pr-10 [&>:last-child]:pr-3 *:pl-3 text-nowrap odd:bg-cus-white-50'>
                            <td className='flex items-center gap-x-1.5'>
                                <img src={item.image} alt={item.name} className='w-7' />
                                <span>{item.name}</span>
                            </td>
                            <td>${numberWithCommas(item.current_price)}</td>
                            <td className={`
                                flex 
                                items-center
                                justify-end
                                gap-x-1
                                ${item.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}`}>
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
        </div>
    )
}

export default CoinsList