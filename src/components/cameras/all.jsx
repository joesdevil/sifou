import Camera from "./camera";
import {React,useEffect} from "react";





export default function All() {
   useEffect(() => {

      const isDark = localStorage.getItem('isDark' );
      
      if(isDark== 'true'){
         
         
       document.querySelectorAll(".bi-arrows-fullscreen").forEach(ele=>{
          ele.classList.add("dark") 
       })
       
      }else{
          
         
       document.querySelectorAll(".bi-arrows-fullscreen").forEach(ele=>{
          ele.classList.remove("dark") 
       })
       
      }
    }, []);
   return (
      <div className="pt-4 px-lg-5 p-3 all-cam">
         <div className="d-flex justify-content-between mb-2 align-items-center">
            <h3 className="pr-color">Cameras</h3>
            <b className="pr-color me-3">Date : 15:00 20/12/2021</b>
         </div>
         <div className="shadow-lg row row-cols-md-3 rounded-3">
         <Camera cam_name="chantier 1" cam_num="1" ip="127.55.6.6" />
         <Camera cam_name="chantier 1" cam_num="2" ip="127.1258.6.6" />
         <Camera cam_name="chantier 1" cam_num="3" ip="127.111.6.6" />
         <Camera cam_name="chantier 1" cam_num="4" ip="127.000.6.6" />
         </div>{" "}
      </div>
   );
}
