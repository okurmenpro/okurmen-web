import Plot from "react-plotly.js";

const AttendanceChart = () => {
  const totalClasses = 12;
  const attendedClasses = 10;
  const missedClasses = totalClasses - attendedClasses;

  return (
    <div className="w-[190px] h-[190px] text-center relative ">
      <Plot
        data={[
          {
            values: [attendedClasses, missedClasses],
            labels: ["Присутствие", "Отсутствие"],
            type: "pie",
            marker: {
              colors: ["#00C27C", "#FF3B30"],
            },
            textinfo: "percent",
            textposition: "inside",
            hole: 0.55,
          },
        ]}
        layout={{
          width: 190,
          height: 190,
          showlegend: false,
          margin: { t: 0, b: 0, l: 0, r: 0 },
          annotations: [
            {
              x: 0.5,
              y: 0.5,
              xref: "paper",
              yref: "paper",
              text: `<span style=" font-size: 16px; font-family: Arial, sans-serif; font-weight: bold"> Был в<br><span style="color:#FF8C00; ">${attendedClasses} из ${totalClasses}</span><br>уроков</span>`,
              showarrow: false,
              font: {
                size: 14,
                color: "#333",
              },
              align: "center",
            },
          ],
        }}
        config={{ displayModeBar: false }}
      />
    </div>
  );
};

export default AttendanceChart;
