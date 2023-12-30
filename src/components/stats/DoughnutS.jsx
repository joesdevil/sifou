import { Doughnut } from "react-chartjs-2";
import { useTranslation } from "react-i18next";

export default function DoughnutS(props) {
   // Doughnut chart data
   const isDark = localStorage.getItem("isDark");
   function dark() {
      if (isDark == "true") {
         return "white";
      }
   }
   const { t } = useTranslation();
   const doughnutData = {
      labels: [
         t("Danger Zone"),
         t("No Helmet Detection"),
         t("Anti Collision"),
         t("No Jacket"),
         t("Other Events"),
      ],
      datasets: [
         {
            label: t("Number of alerts"),
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
               "rgba(255, 99, 132, 0.2)",
               "rgba(54, 162, 235, 0.2)",
               "rgba(255, 206, 86, 0.2)",
               "rgba(75, 192, 192, 0.2)",
               "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
               "rgba(255, 99, 132, 1)",
               "rgba(54, 162, 235, 1)",
               "rgba(255, 206, 86, 1)",
               "rgba(75, 192, 192, 1)",
               "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
         },
      ],
   };

   // Doughnut chart options
   const doughnutOptions = {
      maintainAspectRatio: false,
      plugins: {
         legend: {
            display: true,
            position: "right",
            labels: {
               color: dark(),
               padding: 25, // Adjust the padding between legend items
            },
         },
      },
   };


 
   return (
      <div style={{ height: "35vh" }} className={props.shadow?  'bg-white rounded-4 p-3 shadow':'bg-white rounded-4 p-3 '}>
         <Doughnut
            style={{ width: "100%" }}
            data={doughnutData}
            options={doughnutOptions}
         />
      </div>
   );
}
