import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Chgpwd from "./components/pop-up/chgpwd";
import Hist from "./components/pop-up/hist";
import Exprt from "./components/pop-up/exprt";
import Cache from "./components/pop-up/cache";
import ZoneAdd from "./components/pop-up/add-zone";
import AddCam from "./components/pop-up/addCam";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Config() {



   // 




   const [zones, setZones] = useState([]);
   const [cameras, setCameras] = useState([]);
   const fetchCams = async () => {
      try {
        const responsecam = await axios.get('http://localhost:8000/cameras/');
        setCameras(responsecam.data);
        console.log(responsecam.data)
      } catch (error) {
        console.error('Error fetching cameras:', error);
      }
    };

   // Function to fetch zones from the server
   const fetchZones = async () => {
     try {
       const responsezone = await axios.get('http://localhost:8000/zones/');
       setZones(responsezone.data);
       fetchCams()
       console.log(responsezone.data)
     } catch (error) {
       console.error('Error fetching zones:', error);
     }
   };

   
 
   useEffect(() => {
     // Fetch zones when the component mounts
     fetchZones();
     
   }, []);











   // 
   


   const myStyle = {
      width: '100%',
    };


   const [rangDurationValue, setRageDurationValue] = useState(0);
   const [rangCamValue, setRageCamValue] = useState(0);

   const changeRangeValue = (e, num) => {
      switch (num) {
         case 1:
            setRageDurationValue(e.target.value);
            break;
         case 2:
            setRageCamValue(e.target.value);
            break;
         default:
            break;
      }
   };

   // Utilisez la fonction useTranslation pour obtenir les fonctions de traduction
   const { t, i18n } = useTranslation();

   const [timeexportdelay, settimeexportdelay] = useState(
      localStorage.getItem("timeexportdelay")
   );
   const [nouvelleLangue, setnouvelleLangue] = useState(
      localStorage.getItem("nouvelleLangue")
   );
   const [displaypathsave, setdisplaypathsave] = useState(
      localStorage.getItem("displaypathsave")
   );

   useEffect(() => {
      localStorage.setItem("nouvelleLangue", nouvelleLangue);
      i18n.changeLanguage(nouvelleLangue);
   }, [nouvelleLangue]);

   const handleChangeLangue = (event) => {
      setnouvelleLangue(event.target.value);
      console.log(localStorage.getItem("nouvelleLangue"));
   };

   const [isVoiceOver, setisVoiceOver] = useState(
      localStorage.getItem("isVoiceOver") === "true"
   );

   const [isPoped, setisPoped] = useState(
      localStorage.getItem("isPoped") === "true"
   );

   const [isDark, setisDark] = useState(
      localStorage.getItem("isDark") === "true"
   );

   const [isAlertEmail, setisAlertEmail] = useState(
      localStorage.getItem("isAlertEmail") === "true"
   );

   // Update localStorage when the state changes
   useEffect(() => {
      localStorage.setItem("isDark", isDark);
      console.log(isDark, localStorage.getItem("isDark"));
      if (isDark) {
         document.body.classList.add("dark");
         document.querySelectorAll(".bg-white").forEach((ele) => {
            ele.classList.add("dark");
         });
         document.querySelectorAll(".pr-color").forEach((ele) => {
            ele.classList.add("dark");
         });

         document.querySelectorAll(".btn-outline-pr").forEach((ele) => {
            ele.classList.add("dark");
         });
         document.querySelectorAll(".form-select").forEach((ele) => {
            ele.classList.add("dark");
         });
         document.querySelectorAll("h3").forEach((ele) => {
            ele.classList.add("dark");
         });
         document.querySelector("path").classList.add("dark");
      } else {
         document.body.classList.remove("dark");
         document.querySelectorAll(".bg-white").forEach((ele) => {
            ele.classList.remove("dark");
         });
         document.querySelectorAll(".pr-color").forEach((ele) => {
            ele.classList.remove("dark");
         });
         document.querySelectorAll(".btn-outline-pr").forEach((ele) => {
            ele.classList.remove("dark");
         });
         document.querySelectorAll(".form-select").forEach((ele) => {
            ele.classList.remove("dark");
         });
         document.querySelectorAll("h3").forEach((ele) => {
            ele.classList.remove("dark");
         });
         document.querySelector("path").classList.remove("dark");
      }
   }, [isDark]);

   useEffect(() => {
      localStorage.setItem("displaypathsave", displaypathsave);
   }, [displaypathsave]);

   useEffect(() => {
      localStorage.setItem("isVoiceOver", isVoiceOver);
   }, [isVoiceOver]);

   useEffect(() => {
      localStorage.setItem("isPoped", isPoped);
   }, [isPoped]);

   useEffect(() => {
      localStorage.setItem("isAlertEmail", isAlertEmail);
   }, [isAlertEmail]);

   const toggleMode = () => {
      setisVoiceOver((prevMode) => !prevMode);
   };
   const toggleModePop = () => {
      setisPoped((prevMode) => !prevMode);
   };
   const toggleModeDark = () => {
      setisDark((prevMode) => !prevMode);
      localStorage.getItem("isDark");
   };

   const toggleModeAlertEmail = () => {
      console.log(isAlertEmail);
      setisAlertEmail((prevMode) => !prevMode);
   };

   const savepath = (e) => {
      setdisplaypathsave(e.target.value);
       
   };

   const handleReset = () => {
      setisVoiceOver(false);
      setisPoped(false);
      setisAlertEmail(false);
   };

   const [alertsAsEmail, setalertsAsEmail] = useState({
      email: "salemsif2001@gmail.com",
      subject: "hi",
      body: "hi",
   });

   const raportDelay=(e)=>{
      console.log(e.target.value)
      localStorage.setItem('timeexportdelay',e.target.value)
      setRageCamValue(timeexportdelay)
   }

   const HandlealertsAsEmail = async () => {
      try {
         const response = await fetch("http://127.0.0.1:8000/send-email/", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(alertsAsEmail),
         });

         const data = await response.json();
         console.log(data);
      } catch (error) {
         console.error("Error sending email:", error);
      }
   };

   const history = useNavigate();
   const signOut = () => {
      localStorage.removeItem("temitope");
      history('/login');
    };

   return (
      <div className="p-4">
         <button onClick={signOut}>sign out</button>
         <h4 className="pr-color">{t("All Settings")}</h4>
         <div className="row row-cols-lg-2">
            <div>
               <div className=" bg-white p-4 rounded-3">
                  <div className="gnrl">
                     <div className="d-flex justify-content-between">
                        <h5 className="pr-color">{t("General settings :")}</h5>

                        <button className="btn btn-sm fw-bold btn-outline-pr"                            data-bs-toggle="modal"
                           data-bs-target="#exampleModal"
>
                           <small>{t("Change password")}</small>
                           <i class="bi bi-arrow-right-short"></i>
                        </button>
                                 <Chgpwd></Chgpwd>

                     </div>
                     <div className="row my-4">
                        <div className="col-8 border pr-color p-3">
                           <b className="align-middle">{t("Language")}</b>
                        </div>
                        <div className="col-4 border p-3">
                           <select
                              class="form-select form-select-sm"
                              value={i18n.language}
                              onChange={handleChangeLangue}
                           >
                              <option value="en">{t("English")}</option>
                              <option value="fr">{t("French")}</option>
                           </select>
                        </div>
                        <div className="col-8 border border-top-0 pr-color p-3">
                           <b className="align-middle">{t("Display mode")}</b>
                        </div>
                        <div className="col-4 border border-top-0 p-3">
                           <div class="form-check float-end form-switch">
                              <input
                                 class="form-check-input"
                                 type="checkbox"
                                 checked={isDark}
                                 onChange={toggleModeDark}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="Alerts-&-Popups">
                     <div className="d-flex pt-4 justify-content-between">
                        <h5 className="pr-color">{t("Alerts & Popups :")}</h5>
                        <button className="btn btn-sm fw-bold btn-outline-pr"                            data-bs-toggle="modal"
                           data-bs-target="#hist"
                           onClick={handleReset}
                        >
                           <small>{t("Reset History")}</small>
                           <i class="bi bi-arrow-right-short"></i>
                        </button>
                        <Hist></Hist>
                     </div>
                     <div className="row my-4">
                        <div className="col-8 border pr-color pt-3">
                           <b className="align-middl">
                              {t("Send alerts as emails")}
                           </b>
                        </div>
                        <div className="col-4 border pt-3">
                           <div class="form-check float-end form-switch">
                              <input
                                 class="form-check-input"
                                 type="checkbox"
                                 checked={isAlertEmail}
                                 onChange={toggleModeAlertEmail}
                              />
                           </div>
                           <div class="form-check float-start form-switch">
                              <p className="pr-color small">
                                 {!isAlertEmail ? t("Disabled") : t("Enabled")}
                              </p>
                           </div>
                        </div>
                        <div className="col-8 border pr-color pt-3">
                           <b className="align-middl">
                              {t("Send rapports daily")}
                           </b>
                        </div>
                        <div className="col-4 border pt-3">
                           <div class="form-check float-end form-switch">
                              <input class="form-check-input" type="checkbox" />
                           </div>
                           <div class="form-check float-start form-switch">
                              <p className="pr-color small">{t("Disabled")}</p>
                           </div>
                        </div>
                        <div className="col-8 border pr-color pt-3">
                           <b className="align-middl">{t("Alerts sounds")}</b>
                        </div>
                        <div className="col-4 border pt-3">
                           <div class="form-check float-end form-switch">
                              <input
                                 class="form-check-input"
                                 type="checkbox"
                                 checked={isVoiceOver}
                                 onChange={toggleMode}
                              />
                           </div>
                           <div class="form-check float-start form-switch">
                              <p className="pr-color small">
                                 {" "}
                                 {!isVoiceOver
                                    ? t("Disabled")
                                    : t("Enabled")}{" "}
                              </p>
                           </div>
                        </div>
                        <div className="col-8 border pr-color pt-3">
                           <b className="align-middl">
                              {t("Display alerts as popups")}
                           </b>
                        </div>
                        <div className="col-4 border pt-3">
                           <div class="form-check float-end form-switch">
                              <input
                                 class="form-check-input"
                                 type="checkbox"
                                 checked={isPoped}
                                 onChange={toggleModePop}
                              />
                           </div>
                           <div class="form-check float-start form-switch">
                              {/* <p className="pr-color small">{t('Disabled')}</p> */}
                              <p className="pr-color small">
                                 {!isPoped ? t("Disabled") : t("Enabled")}
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="reports">
                     <div className="d-flex justify-content-between">
                        <h5 className="pr-color">{t("Reports :")}</h5>
                        <button className="btn btn-sm fw-bold btn-outline-pr" data-bs-toggle="modal" data-bs-target="#exprt"
                        >
                           <small>{t("Export As")}</small>
                           <i class="bi bi-arrow-right-short"></i>
                        </button>
                        <Exprt></Exprt>
                     </div>
                     <div className="row my-4">
                        <div className="col-6 border pr-color p-3">
                           <b className="align-middle">
                              {t("Auto-save reports")}
                           </b>
                        </div>
                        <div className="col-6 border p-3">
                           <select class="form-select form-select-sm" onChange={raportDelay} >
                              <option value='daily' selected>{t("Enabled (Daily)")}</option>
                              <option value='weekly'>{t("Enabled (Weekly)")}</option>
                              <option value="monthly">
                                 {t("Enabled (monthly)")}
                              </option>
                           </select>
                        </div>
                        <div className="col-6 border border-top-0 pr-color p-3">
                           <b className="align-middle">{t("Display path")}</b>
                        </div>
                        <div className="col-6 border border-top-0 p-3">
                           <div
                              className="pr-color "
                              style={{ overflow: "auto" }}
                           >
                              
                           <input 
                              type="text"
                                 onChange={savepath}
                                 value={displaypathsave!='null'?displaypathsave:''}
                              placeholder=" C:\Users\username\AppData\Roamin..."
                              className="m-0 border-0 bg-white pr-color h-100  "
                              style={myStyle}
                           />
                            
                      
                             
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className="bg-white p-4 rounded-3">
                  <div className="Cam-Recording">
                     <div className="d-flex justify-content-between">
                        <h5 className="pr-color">{t("Camera Recording :")}</h5>
                        <button className="btn btn-sm fw-bold btn-outline-pr"                            data-bs-toggle="modal"
                           data-bs-target="#cache"
                        >
                           <small>{t("Reset Cache")}</small>
                           <i class="bi bi-arrow-right-short"></i>
                        </button>
                        <Cache></Cache>
                     </div>
                     <div className="row my-4">
                        <div className="col-6 border pr-color p-3">
                           <b className="align-middle">
                              {t("Cache duration (sec)")}
                           </b>
                        </div>
                        <div className="col-6 border p-3">
                           <span className="btn-outline-pr rounded-1 small px-2 py-1">
                              {rangDurationValue}
                           </span>
                           <input
                              type="range"
                              onChange={(e) => changeRangeValue(e, 1)}
                              className="float-end mt-1 pr-bg w-75"
                              name="vol"
                              value={rangDurationValue}
                              min="0"
                              max="100"
                           />
                        </div>
                        <div className="col-6 border border-top-0 pr-color p-3">
                           <b className="align-middle">{t("Display mode")}</b>
                        </div>
                        <div className="col-6 border border-top-0 p-3">
                           <div
                              className="pr-color "
                              style={{ overflow: "auto" }}
                           >
                              C:\Users\username\AppData\Roamin...
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="Cam-Set">
                     <div className="d-flex justify-content-between">
                        <h5 className="pr-color">{t("Zones & Camera setup :")}</h5>
                        <button className="btn btn-sm fw-bold btn-outline-pr"                            data-bs-toggle="modal"
                           data-bs-target="#zoneadd"
                        >
                           <small>{t("Add zone name")}</small>
                           <i class="bi bi-arrow-right-short"></i>
                        </button>
                        <ZoneAdd></ZoneAdd>
                     </div>


                     

                        {zones.map((zone)=>(
                           <div className="row my-4">
                           <div className="col-6 border pr-color p-3" style={{width:'33.3%'}}>
                              <b className="align-middle">
                                 {/* {t("Cache duration (sec)")} */}
                                 {zone.zoneName} Zone #{zone.id}
                              </b>
                           </div>
                           <div className="col-6 border p-3 col-6 border pr-color p-3" style={{textAlign: 'center',width:'66.7%'}}>
                           
                              <b data-bs-toggle="modal"
                              data-bs-target="#exampleModalcam" style={{cursor:'pointer'}}>Add Zone Camera <i class="bi bi-plus-circle"></i></b>
                              
                             
                           <AddCam></AddCam>
                              
                           </div>
   
                          {/* cam row */}

                          {cameras.map((camera)=>(
                                
                                 camera.zone_id==zone.id?( <>
                                 <div className="col-4 border pr-color p-3">
                                 <b className="align-middle">Camera #01</b>
                                 </div>
                                 <div className="col-4 border pt-3">
                                 <div class="form-check float-end form-switch">
                                    <input class="form-check-input" type="checkbox" checked={camera.is_active} />
                                 </div>
                                 <div class="form-check float-start form-switch">
                                    <p className="pr-color small">{t("Disabled")}</p>
                                 </div>
                                 </div>
                                 <div className="col-4 border p-3 ">
                                 <input
                                    type="text"
                                    placeholder="Set IP address"
                                    className="m-0 border-0 bg-white pr-color h-100 w-auto"
                                    value={camera.ip_address}
                                    disabled={true}
                                 />
                                 <i class="bi bi-pencil-square pr-color"></i>
                                 </div>
                                 </>):'' 
                              
                                 
                          ))}
                        


                          {/* end cam row */}
                        </div>
                        ))}
                     {/* end zone row 2 */}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
