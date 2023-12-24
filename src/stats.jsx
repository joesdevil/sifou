import React from "react";
import "chart.js/auto";
import DoughnutS from "./components/stats/DoughnutS";
import LineS from "./components/stats/lineS";
import Device from "./components/stats/device";

export default function Stats() {
   // Line chart data

   return (
      <div className="px-4 py-3">
         <div className="d-flex justify-content-between mb-2 align-items-center">
         <div className="d-flex   mb-4 align-items-center statflex">
       <div style={{
  flexDirection: 'column'}} >
          <div>
          <h3 className="pr-color mr-20">Report Update</h3>
        <select name="" id="" className='selectbox'>
            <option value="Daily">Daily</option>
            <option value="weekly">weekly</option>
            <option value="Mounthly">Mounthly</option>
        </select>
          </div>
      <div>
      <b className="pr-color me-3">Date : 15:00 20/12/2021</b>

      </div>
       </div>
       
       <div>
       <h3 className="pr-color">All devices</h3>
       </div>
        
      </div>
            
         </div>

         <div className="row">
            <div className="col-md-7">
               <DoughnutS></DoughnutS>
               <LineS></LineS>
            </div>
            <div className="col-md-5 mt-md-0 mt-3">
               
               <div
                  className=" bg-white rounded-4 shadow"
                  style={{ overflow: "auto", height: "calc(100vh - 195px)" }}
               >
<Device></Device>
<Device></Device>
<Device></Device>
<Device></Device>
<Device></Device>
<Device></Device>
<Device></Device>
<Device></Device>
<Device></Device>
<Device></Device>
               </div>
            </div>
         </div>
      </div>
   );
}
