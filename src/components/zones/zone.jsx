import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


export default function Zone() {
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
      <>
         <tr className="">
            <th scope="row">3</th>
            <td>
               <h6 className="pr-color">Zone 01</h6>
               <div className="feats">
                  <div
                     className="feat"
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
                  </div>
                  <div
                     className="feat"
                     onClick={() => handleToggleClick(2)}
                  >
                     <svg
                        className={isDisabled2 ? "disabled" : ""}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                     >
                        <path d="M288 0c17.7 0 32 14.3 32 32l0 9.8c0 54.6-27.9 104.6-72.5 133.6l.2 .3L304.5 256l87.5 0c15.1 0 29.3 7.1 38.4 19.2l43.2 57.6c10.6 14.1 7.7 34.2-6.4 44.8s-34.2 7.7-44.8-6.4L384 320l-96 0h-1.4l92.3 142.6c9.6 14.8 5.4 34.6-9.5 44.3s-34.6 5.4-44.3-9.5L164.5 249.2c-2.9 9.2-4.5 19-4.5 29l0 73.8c0 17.7-14.3 32-32 32s-32-14.3-32-32V278.2c0-65.1 39.6-123.7 100.1-147.9C232.3 115.8 256 80.8 256 41.8l0-9.8c0-17.7 14.3-32 32-32zM112 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                     </svg>
                  </div>
                  <div
                     className="feat"
                     onClick={() => handleToggleClick(3)}
                  >
                     <svg
                        className={isDisabled3 ? "disabled" : ""}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                     >
                        <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V336c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64H304c97.2 0 176-78.8 176-176V128c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V32z" />
                     </svg>
                  </div>
               </div>
            </td>
            <td className="ni fw-bold align-middle fs-5 text-danger">
               283{" "}
               <i className="bi ps-1 bi-exclamation-triangle-fill"></i>
            </td>
            <td className="si fw-bold align-middle fs-5 text-success">
               6 <i class="bi ps-1 bi-check-circle-fill"></i>
            </td>
            <td className="">
               <div class="form-check ms-sm-4 mt-4 form-switch">
                  <input class="form-check-input" type="checkbox" />
               </div>
            </td>
            <td className="">
               <Link className="link" to="/zones/edit">
                  <button className="btn fw-bold btn-outline-pr">
                     <i class="bi bi-pencil-square"></i>{" "}
                     <span>{t('Edit Zone')}</span>
                  </button>
               </Link>
               <br />
               <button className="btn fw-bold btn-outline-danger mt-2">
                  <i class="bi bi-x-circle-fill pe-sm-2"></i>{" "}
                  <span>{t('Delete')}</span>
               </button>
            </td>
         </tr>
      </>
   )
}
