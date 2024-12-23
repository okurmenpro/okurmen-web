import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ["1 - 7", "8 - 15", "16 - 23", "24 - 30"],
    datasets: [
      {
        label: "Студенты",
        data: [25, 40, 40, 40],
        backgroundColor: "orange",
        borderRadius: 5,
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
      title: {
        display: true,
        text: "Май",
        font: {
          size: 24,
          weight: "bold",
        },
        color: "#000",
        padding: {
          top: 10,
          bottom: 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 50,
        ticks: {
          stepSize: 10,
          color: "#000",
          font: {
            size: 13,
            weight: "bold",
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Дни",
          color: "#000",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        ticks: {
          color: "#000",
          font: {
            size: 13,
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <div className="max-w-[390px] w-full h-[311px] border-2 border-orange-500 rounded-[10px] p-[15px] relative">
      <p className="font-bold text-[13px] absolute top-[30px] left-[5%]">Студенты</p>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
