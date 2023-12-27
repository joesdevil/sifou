import { useState } from "react";
import { Link } from "react-router-dom";
import zoneImage from "../../images/zone.png";
import { useTranslation } from 'react-i18next';


export default function Edit() {
   const { t } = useTranslation();

   const [isDisabled1, setIsDisabled1] = useState(false);
   const [isDisabled2, setIsDisabled2] = useState(false);
   const [isDisabled3, setIsDisabled3] = useState(false);

   const handleToggleClick = (svgNumber) => {
      switch (svgNumber) {
         case 1:
            setIsDisabled1(!isDisabled1);
            break;
         case 2:
            setIsDisabled2(!isDisabled2);
            break;
         case 3:
            setIsDisabled3(!isDisabled3);
            break;
         default:
            break;
      }
   };
   return (
      <div className="pt-4 px-lg-5 zones" >
         <div className="d-flex justify-content-between mb-2 align-items-center">
            <h3 className="pr-color">
               <Link to="/zones" className="pr-color">
                  <small>
                     <i
                        class="bi bi-chevron-left fw-bold me-3 mb-1"
                        style={{ fontSize: "27px" }}
                     ></i>
                  </small>
               </Link>
               {t('Edit the Zones')}
            </h3>
            <b className="pr-color me-3">Date : 15:00 20/12/2021</b>
         </div>

         <div className="bg-white mx-5 mb-3 pb-3 shadow row rounded-3">
            <div className="zone-image  rounded-3 p-0 m-0">
               <img
                  className="object-fit-cover"
                  src={zoneImage}
                  alt=""
                  srcset=""
               />
            </div>
            <div className="zone-edit px-5 pt-4 d-lg-flex text-center justify-content-between ">
               <div className="type-haz m-lg-0 mb-4">
                  <h4 className="pr-color">{t('Type of Haz')}</h4>
                  <div className="feats  d-flex justify-content-between mt-4">
                     <div
                        className="feat text-center"
                        onClick={() => handleToggleClick(1)}
                     >
                        <svg
                           className={isDisabled1 ? "disabled" : ""}
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 576 512"
                        >
                           <path d="M256 32c-17.7 0-32 14.3-32 32v2.3 99.6c0 5.6-4.5 10.1-10.1 10.1c-3.6 0-7-1.9-8.8-5.1L157.1 87C83 123.5 32 199.8 32 288v64H544l0-66.4c-.9-87.2-51.7-162.4-125.1-198.6l-48 83.9c-1.8 3.2-5.2 5.1-8.8 5.1c-5.6 0-10.1-4.5-10.1-10.1V66.3 64c0-17.7-14.3-32-32-32H256zM16.6 384C7.4 384 0 391.4 0 400.6c0 4.7 2 9.2 5.8 11.9C27.5 428.4 111.8 480 288 480s260.5-51.6 282.2-67.5c3.8-2.8 5.8-7.2 5.8-11.9c0-9.2-7.4-16.6-16.6-16.6H16.6z" />
                        </svg>
                        <h6 className="pr-color small text-center mt-2">PPE</h6>
                     </div>
                     <div className="feat" onClick={() => handleToggleClick(2)}>
                        <svg
                           className={isDisabled2 ? "disabled ms-1" : "ms-1"}
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 512 512"
                        >
                           <path d="M288 0c17.7 0 32 14.3 32 32l0 9.8c0 54.6-27.9 104.6-72.5 133.6l.2 .3L304.5 256l87.5 0c15.1 0 29.3 7.1 38.4 19.2l43.2 57.6c10.6 14.1 7.7 34.2-6.4 44.8s-34.2 7.7-44.8-6.4L384 320l-96 0h-1.4l92.3 142.6c9.6 14.8 5.4 34.6-9.5 44.3s-34.6 5.4-44.3-9.5L164.5 249.2c-2.9 9.2-4.5 19-4.5 29l0 73.8c0 17.7-14.3 32-32 32s-32-14.3-32-32V278.2c0-65.1 39.6-123.7 100.1-147.9C232.3 115.8 256 80.8 256 41.8l0-9.8c0-17.7 14.3-32 32-32zM112 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                        </svg>
                        <h6 className="pr-color small text-center mt-2">
                           {t('Abnormal')}
                        </h6>
                     </div>
                     <div className="feat" onClick={() => handleToggleClick(3)}>
                        <svg
                           className={isDisabled3 ? "disabled" : ""}
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 512 512"
                        >
                           <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V336c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64H304c97.2 0 176-78.8 176-176V128c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V32z" />
                        </svg>
                        <h6 className="pr-color small text-center mt-2">
                           Violation
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="zone-info mt-2 my-lg-0 my-4 row row-cols-2">
                  <div>
                     <h6 className="pr-color">{t('Danger Level')}</h6>
                     <h6 className="text-danger">
                        {t('serious')} <i class="bi bi-bar-chart-fill"></i>
                     </h6>
                  </div>
                  <div>
                     <h6 className="pr-color">{t('Date/time started')}</h6>
                     <h6 className="text-secondary"> 15:32 Dec 21 </h6>
                  </div>
                  <div>
                     <h6 className="pr-color">{t('No. of issues')}</h6>
                     <h6 className="text-danger">
                        21 <i class="bi bi-exclamation-triangle-fill"></i>
                     </h6>
                  </div>
                  <div className="">
                     <h6 className="pr-color">{t('Solved Issues')}</h6>
                     <h6 className="text-success">
                        11 <i class="bi bi-check-circle-fill"></i>
                     </h6>
                  </div>
               </div>
               <div className="  mt-3 mt-lg-0 ">
                  <div className="d-flex ms-5 justify-content-between">
                     <h6 className="pr-color small mt-1">{t('Use Auto Zone')}</h6>
                     <div class="form-check mx-5 mt-0 form-switch">
                        <input class="form-check-input" type="checkbox" />
                     </div>
                  </div>
                  <hr className="my-3" />
                  <div className="d-flex ms-5 justify-content-between">
                     <h6 className="pr-color mt-1 small">{t('Save Reports')}</h6>
                     <div class="form-check mx-5 mt-0 form-switch">
                        <input class="form-check-input" type="checkbox" />
                     </div>
                  </div>
                  
                  <hr className="my-3" />

                  <div className="d-flex  mt-2 mt-lg-0  ms-5 justify-content-between">
                     <h6 className="pr-color mt-1 small">{t('Pop-up Alerts')}</h6>
                     <div class="form-check mx-5 mt-0 form-switch">
                        <input class="form-check-input" type="checkbox" />
                     </div>
                  </div>
                  <div className="d-flex mt-2 mt-lg-0 mx-lg-4 mx-5 justify-content-lg-between justify-content-center">
                  <button className="btn btn-success fw-bold p-1 mt-3 mx-2">{t('Apply')}</button>
                  <button className="btn btn-danger fw-bold p-1 mt-3 mx-2">{t('Remove')}</button>
                  </div>

               </div>
            </div>
         </div>
      </div>
   );
}
