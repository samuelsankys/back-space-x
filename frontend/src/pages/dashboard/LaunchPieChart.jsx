import ReactApexChart from 'react-apexcharts';
import { baseURL } from '../../utils/constantes';
import { useFetch } from '../../useFetch';
import { useEffect, useState } from 'react';

const optionsPie = {
  chart: {
  type: 'donut',
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}],
};

const LaunchPieChart = () => {
  const {data, loading} = useFetch(baseURL + '/launches/stats/rocket')
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState(optionsPie);

  useEffect(() => {
    if (data) {
      const series = data.launches.map((item)=>{return item.total})
      const labels = data.launches.map((item)=>{return item.name})
      setSeries(series)
      setOptions((prevState) => ({
        ...prevState,
        labels: labels,
      }));
    }
  }, [data]);
  
 

  return (
    <div id="launch-chart">
      {loading && <p>Loading ...</p>} 
      <ReactApexChart width={500} options={options} series={series} type="donut" height={365} />
    </div>
  );
};

export default LaunchPieChart;