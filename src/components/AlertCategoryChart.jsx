import { Bar, Line } from "react-chartjs-2";
import { useEffect } from "react";
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

const AlertCategoryChart = ({ data }) => {
   const processData = data.filter((obj) => {if (obj.count > 5) {return obj.category;}})
    
  return (
    <div className="bg-[#1E263B] min-h-60">
      <Bar
        data={{
          labels: processData.map( (obj) => obj.category),
          datasets: [
            {
              label: "Number of Alerts by Category",
              data: processData.map( (obj) => obj.count),
              backgroundColor: ["rgba(111,11,132,0.2)"],
              borderColor: ["rgba(54,162,122,1)"],
              hoverBackgroundColor: ['rgba(75,192,192,0.4)'],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          color: "#fffff",
          indexAxis: "y",
          scales: {
            y: {
              min: 0,
              max: 150,
              ticks: {
                color: 'white', 
              },
            },
            x: {
                ticks: {
                    color: 'white', 
                },
            }
          },
          maintainAspectRatio: false,
          plugins: {
                    legend: {
                        position:"top",
                        labels: {
                            font: {
                                size: 14,
                                weight: 400,
                            },
                            boxWidth: 8,
                            boxHeight:8,
                            usePointStyle: true,
                            pointStyle: "circle",
                            color: "#ffffff"
                        }
                    },
                    
        }
          
        }}
      />
    </div>
  );
};

export default AlertCategoryChart;
