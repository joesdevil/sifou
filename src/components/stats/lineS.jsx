import { Line } from "react-chartjs-2";
import { useTranslation } from 'react-i18next';

export default function LineS() {
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
            display: true,
            position: "bottom",
         },
      },

      scales: {
         y: {
            beginAtZero: true,
         },
      },
   };

   return (
      <div
         style={{ height: "41vh" }}
         className="text-center mt-3 bg-white rounded-4 shadow p-3"
      >
         <div style={{ height: "34vh" }}>
            <Line
               data={lineData}
               style={{ width: "", margin: "" }}
               options={lineOptions}
            />
         </div>
         <small className="fw-bold text-secondary">{t('-alerts history-')}</small>
      </div>

   )
}