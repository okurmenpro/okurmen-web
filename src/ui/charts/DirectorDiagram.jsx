import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DirectorDiagram = () => {
  const data = {
    labels: ["1 - 7", "8 - 15", "16 - 23", "24 - 30"],
    datasets: [
      {
        label: "Студенты",
        data: [22, 25, 28, 50, 35, 30, 25],
        borderColor: "orange",
        backgroundColor: "#FF8a00",
        tension: 0.2,
        borderWidth: 3,
        pointHoverRadius: 5,
        pointStyle: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Дни",
          font: {
            size: 14,
          },
        },
        grid: {
          display: false, 
        },
      },
    },
  };

  return (
    <div className="max-w-[390px] flex  items-center w-full h-[311px] border-2 border-[#FF8a00] rounded-[10px] p-[15px] pt-[30px] relative">
      <p className="font-bold text-[13px] absolute top-[10px] left-[5%]">
        Студенты
      </p>
      <Line data={data} options={options} height={200} />
    </div>
  );
};

export default DirectorDiagram;
