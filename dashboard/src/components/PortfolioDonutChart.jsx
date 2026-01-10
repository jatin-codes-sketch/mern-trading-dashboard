import { PieChart } from "@mui/x-charts/PieChart";

const PortfolioDonutChart = ({ data }) => {
  return (
    <PieChart
      height={300}
      series={[
        {
          data,
          innerRadius: 70,
          outerRadius: 120,
          paddingAngle: 3,
        },
      ]}
    />
  );
};

export default PortfolioDonutChart;
