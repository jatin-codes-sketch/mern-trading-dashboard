import { BarChart } from "@mui/x-charts/BarChart";

const PortfolioChart = ({ investment, currentValue }) => {
  return (
    <BarChart
      height={300}
      series={[
        {
          data: [investment],
          label: "Investment",
          color: "#4184f3",
        },
        {
          data: [currentValue],
          label: "Current Value",
          color: "#4caf50",
        },
      ]}
      xAxis={[{ data: ["Portfolio"] }]}
    />
  );
};

export default PortfolioChart;
