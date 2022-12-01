import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

function DetailChart({ weatherData }) {
  ChartJS.register(
    LinearScale,
    CategoryScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
  );

  const detailChartWrapperOnClick = (event) => {
    event.stopPropagation();
    event.target.classList.remove('detail-chart-wrapper--visible');

    if (event.target.classList.contains('detail-chart-wrapper')) document.body.classList.remove('--disable-scroll');
  };

  const detailChartOptions = {
    transitions: {
      show: {
        animations: {
          x: { from: 0 },
          y: { from: 0 },
        },
      },
      hide: {
        animations: {
          x: { from: 0 },
          y: { from: 0 },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div onClick={detailChartWrapperOnClick} className='detail-chart-wrapper'>
      <div className='detail-chart-inner-wrapper'>
        <Line className='detail-chart' options={detailChartOptions} data={weatherData} />
      </div>
    </div>
  );
}

export default DetailChart;
