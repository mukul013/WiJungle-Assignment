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

const SourceIpChart = ({ data }) => {
  return (
    <div className="bg-[#1E263B] min-h-80">      
    <Line
        data={{
          labels: data.map((obj) => obj.src_ip),
      
          datasets: [
            {
              label: "SOURCE IP GRAPH WITH COUNTS",
              data: data.map((obj) => obj.count),
              backgroundColor: ["rgba(54,162,122,1)"],
              borderColor: ["#2C5CFF"],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          scales: {
            y: {
              min: 0,
              max: 100,
              ticks: {
                    padding: 10,
                    color: 'white'
                  },
            },
            x: {
                  ticks: {
                    padding: 10,
                    color: 'white'
                  },
            },
          },
          maintainAspectRatio: false,
          plugins: {
                    legend: {
                        position:"top",
                        labels: {
                            font: {
                                size: 14,
                                weight: 400
                            },
                            boxWidth: 8,
                            boxHeight:8,
                            usePointStyle: true,
                            pointStyle: "circle",
                            color: "white"
                        }
                    },
                    
                }
        }}
      />
    </div>
  );
};

export default SourceIpChart;
