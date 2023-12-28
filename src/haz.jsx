import Alert from "./components/haz/alert";
import NotificationComponent from "./components/haz/notification";
import LastHaz from "./components/haz/last-haz";
import MostF from "./components/haz/mostF";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";


function Haz() {
  const { t } = useTranslation();
  useEffect(() => {

    const isDark = localStorage.getItem('isDark' );
    
    if(isDark== 'true'){
       document.body.classList.add("dark")
       document.querySelectorAll(".bg-white").forEach(ele=>{
          ele.classList.add("dark") 
       })
       document.querySelectorAll(".pr-color").forEach(ele=>{
          ele.classList.add("dark") 
       })
  
       document.querySelectorAll(".btn-outline-pr").forEach(ele=>{
          ele.classList.add("dark") 
       })
       document.querySelectorAll(".form-select").forEach(ele=>{
          ele.classList.add("dark") 
       })
       document.querySelectorAll("h3").forEach(ele=>{
          ele.classList.add("dark") 
       })
       document.querySelectorAll("h4").forEach(ele=>{
        ele.classList.add("dark") 
     })
     document.querySelectorAll("p").forEach(ele=>{
      ele.classList.add("dark") 
   })
       document.querySelector("path").classList.add("dark") 
    }else{
       document.body.classList.remove("dark")
       document.querySelectorAll(".bg-white").forEach(ele=>{
          ele.classList.remove("dark")
       })
       document.querySelectorAll(".pr-color").forEach(ele=>{
          ele.classList.remove("dark") 
       })
       document.querySelectorAll(".btn-outline-pr").forEach(ele=>{
          ele.classList.remove("dark") 
       })
       document.querySelectorAll(".form-select").forEach(ele=>{
          ele.classList.remove("dark") 
       })
       document.querySelectorAll("h3").forEach(ele=>{
          ele.classList.remove("dark") 
       })
       document.querySelector("path").classList.remove("dark") 
     
    }
  }, []);
  
  return (
    <div className="row row-cols-md-2 p-4">
      <div className="">
        <h3 className="pr-color mb-2">{t('Latest Alert')}</h3>
        <LastHaz></LastHaz>
        <h3 className="pr-color my-3">{t('Most frequent Alert')}</h3>
        <MostF></MostF>
      </div>
      <div className="">
      <h3 className="pr-color my-3">{t('Pervious Alert')}</h3>
        <div
          className="p-0 m-0"
          style={{ overflow: "auto", height: "calc(100vh - 180px)" }}>
          {/* <Alert></Alert> */}
           <NotificationComponent></NotificationComponent>
        </div>

      </div>
    </div>
  );
}

export default Haz;
