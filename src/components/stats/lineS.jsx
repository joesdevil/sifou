import { Line } from "react-chartjs-2";
import { useTranslation } from 'react-i18next';

export default function LineS(props) {
   const isDark = localStorage.getItem("isDark");
   function dark() {
      if (isDark == "true") {
         return "white";
      }
   }

   const { t } = useTranslation();

   const lineData = {
      labels: [
         t("January"),
        t( "February"),
         t("March"),
         t("April"),
         t("May"),
         t("June"),
         t("july"),
         t("august"),
         t("september"),
         t("october"),
         t("november"),
         t("december"),
      ],
      datasets: [
         {
            label: "Dataset 1",
            data: [65, 59, 80, 81, 56, 55],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
         },
         {
            label: "Dataset 2",
            data: [28, 48, 40, 19, 86, 27, 45, 56, 34, 78, 9],
            fill: false,
            borderColor: "rgb(255, 99, 132)",
            tension: 0.1,
         },
         {
            label: "Dataset 3",
            data: [33, 25, 35, 51, 54, 76, 27, 45, 51, 34, 70, 9],
            fill: false,
            borderColor: "rgb(255, 206, 86)",
            tension: 0.1,
         },
         {
            label: "Dataset 4",
            data: [45, 67, 55, 42, 38, 62],
            fill: false,
            borderColor: "rgb(54, 162, 235)",
            tension: 0.1,
         },
      ],
   };

   // Line chart options
   const lineOptions = {
      maintainAspectRatio: false,
      plugins: {
         legend: {
            labels: {
               color: dark()
            },
            display: true,
            position: "bottom",
         },
      },

      scales: {
         x: { // "x" for Chart.js version 3.x, or "xAxes" for version 2.x
            ticks: {
                color: dark() // Change X-axis labels color
            },
            
        },
         y: {
            ticks: {
               color: dark() // Change Y-axis labels color
           },            beginAtZero: true,
         },
      },
   };

   return (
      <div
         style={{ height: "41vh" }}
         className={props.shadow?'text-center mt-3 bg-white rounded-4 shadow p-3':'text-center mt-3 bg-white rounded-4 p-3'}
      >
         <div style={{ height: "34vh" }}>
            <Line
               data={lineData}
               style={{ width: "", margin: "" }}
               options={lineOptions}
            />
         </div>

          
        
      </div>

   )
}