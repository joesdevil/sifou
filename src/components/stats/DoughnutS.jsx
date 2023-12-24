import { Doughnut } from "react-chartjs-2";

export default function DoughnutS(){
           // Doughnut chart data
   const doughnutData = {
        labels: [
           "Danger Zone",
           "No Helmet Detection",
           "Anti Collision",
           "No Jacket",
           "Other Events",
        ],
        datasets: [
           {
              label: "Number of alerts",
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
               padding: 25,  // Adjust the padding between legend items
            },
           },
        },
     };
  
        return(
                <div
                style={{ height: "35vh" }}
                className="bg-white rounded-4 shadow p-3"
             >
                <Doughnut
                   style={{ width: "100%" }}
                   data={doughnutData}
                   options={doughnutOptions}
                />
             </div>
 
        )
}