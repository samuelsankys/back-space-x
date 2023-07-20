import ReactApexChart from 'react-apexcharts';

const LaunchPieChart = () => {

  return (
    <div id="launch-chart">
      <ReactApexChart width={500} options={{}} series={[80, 95, 70, 42, 65, 55, 78]} type="donut" height={365} />
    </div>
  );
};

export default LaunchPieChart;