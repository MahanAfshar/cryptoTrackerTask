import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Error from './../components/Error';
import Loading from './../components/Loading';
import NoResult from './../components/NoResult';

import {
  Chart as ChartJS,
  LinearScale,
  Tooltip,
  LineElement,
  PointElement,
  Title,
  CategoryScale,
  Filler,
} from 'chart.js'
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import { IoClose } from "react-icons/io5";

ChartJS.register(
  LinearScale,
  Tooltip,
  LineElement,
  PointElement,
  Title,
  CategoryScale,
  Filler,
);

const Chart = () => {
  const { id } = useParams();

  const { data: { prices }, loading, error } = useFetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`);

  return (
    <>
      {error && <div className='min-h-screen grid'>
        <Error />
      </div>}

      {loading && <div className='min-h-screen grid'>
        <Loading />
      </div>}

      {!error && !loading && !prices && <div className='min-h-screen grid'>
        <NoResult />
      </div>}

      {
        !error && !loading && prices && (
          <div className='min-h-screen pt-12 bg-cus-white-50 dark:bg-zinc-900 overflow-auto'>
            <Link to='/'>
              <IoClose className='fixed top-4 right-4 text-2xl bg-cus-white-300 text-white rounded-md cursor-pointer' />
            </Link>
            <Line
              options={{
                responsive: true,
                aspectRatio: 0,
                scales: {
                  x: {
                    grid: {
                      display: false,
                    }
                  },
                  y: {
                    position: 'right',
                    grid: {
                      color: 'gray'
                    }
                  }
                },
                plugins: {
                  title: {
                    display: true,
                    text: id.toUpperCase(),
                    font: {
                      size: 22
                    }
                  },
                }
              }}
              data={{
                labels: prices.map(item => moment(item[0]).format('MMMDD')),
                datasets: [
                  {
                    data: prices.map(item => item[1].toFixed(2)),
                    borderColor: prices[0][1] < prices[prices.length - 1][1] &&
                      prices[0][1] != prices[prices.length - 1][1]
                      ? '#416D19' : '#E72929',
                    borderWidth: 2,
                    pointRadius: 0,
                    tension: .1,
                    pointHoverBackgroundColor: '#294B29',
                    backgroundColor: prices[0][1] < prices[prices.length - 1][1] &&
                      prices[0][1] != prices[prices.length - 1][1]
                      ? '#65b741' : '#F38181',
                    fill: true,
                  }
                ]
              }}
            />
          </div>
        )
      }
    </>
  )
}

export default Chart