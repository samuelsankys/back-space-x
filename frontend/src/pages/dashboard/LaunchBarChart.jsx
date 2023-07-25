import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useFetch } from '../../useFetch';
import {baseURL} from '../../utils/constantes'

const barChartOptions =  {
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: true
    },
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  colors: ['#554298', '#FF33FF', '#FEB019', '#58FFC5'],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 5,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: '10px',
            fontWeight: 900
          }
        }
      }
    },

  },
  legend: {
    position: 'right',
    offsetY: 40
  },
  fill: {
    opacity: 5
  },
  tooltip: {
    theme: 'light'
  }
};


const LaunchBarChart = () => {
  const {data, loading} = useFetch(baseURL + '/launches/stats/launch')

  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState(barChartOptions);

  useEffect(() => {
    if (data) {
      setSeries(data.series)
      setOptions((prevState) => ({
        ...prevState,
        xaxis: {
          type: 'string',
          categories: data.years,
        },

      }));
    }
  }, [data]);

  return (
    <div id="launch-chart">
      {loading && <p>Loading ...</p>} 
      <ReactApexChart options={options} series={series} type="bar" height={365} />

    </div>
  );
};

export default LaunchBarChart;