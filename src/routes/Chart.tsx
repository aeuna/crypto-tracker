import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../atoms';
import Loader from '../components/Loader';

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IHistorical[]>(['ohlcv', coinId], () => fetchCoinHistory(coinId), { refetchInterval: 10000 });
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: data?.map((price) => ({
                x: price.time_open,
                y: [price.open.toFixed(2), price.high.toFixed(2), price.low.toFixed(2), price.close.toFixed(2)],
              })),
            },
          ]}
          options={{
            theme: { mode: isDark ? 'dark' : 'light' },
            chart: { type: 'candlestick', height: 450, width: 450, toolbar: { show: false }, background: 'transparent' },
            title: {
              text: 'Price Chart (open, high, low, close)',
              align: 'center',
            },
            xaxis: {
              type: 'datetime',
            },
            yaxis: { show: false },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
