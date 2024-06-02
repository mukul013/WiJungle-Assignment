import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AlertSeverityChart = ({ data }) => {
    console.log([data.map((obj) => obj.count)])
  return (
    <div className="bg-[#1E263B] min-h-60">
      <Bar
        data={{
          labels: ["High", "Medium", "Low"],
          datasets: [
            {
              label: "Number of Alerts by Severity",
              data: data.map((obj) => obj.count),
              backgroundColor: ["rgba(111,11,132,0.2)"],
              borderColor: ["rgba(54,162,122,1)"],
              hoverBackgroundColor: ["rgba(75,192,192,0.4)"],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
              labels: {
                font: {
                  size: 14,
                  weight: 400,
                },
                boxWidth: 8,
                boxHeight: 8,
                usePointStyle: true,
                pointStyle: "circle",
                color: "white"
              },
            },
          },
          scales: {
            y: {
              ticks: {
                color: "white",
              },
            },
            x: {
              ticks: {
                color: "white",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default AlertSeverityChart;
