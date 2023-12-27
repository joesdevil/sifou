import { Link } from "react-router-dom";
import Zone from "./zone";
import { useTranslation } from 'react-i18next';

export default function Main() {
   
   const { t } = useTranslation();
   return (
      <div className=" p-1 p-sm-5 zones">
         <div className="d-flex justify-content-between mb-4 align-items-center">
            <h3 className="pr-color m-lg-0 mt-4 ms-3">{t('All Zones')}</h3>
            <Link className="link" to="/zones/add">
               <button
                  className="btn pr-bg text-white btn-sm mt-4 ms-3 px-4 py-2"
                  style={{ width: "fit-content" }}
               >
                  <i class="bi bi-plus-circle-fill"></i> {t('Add Zone')}
               </button>
            </Link>
         </div>
         <div className="bg-white mb-2 px-4 py-2 rounded-3">
            <table class="table">
               <thead>
                  <tr className="">
                     <th scope="col">ID</th>
                     <th className="pr-color" scope="col">
                        {t("Zone's Features")}
                     </th>
                     <th className="pr-color" scope="col">
                        {t('No. of issues')}
                     </th>
                     <th className="pr-color" scope="col">
                        {t('Solved Issues')}
                     </th>
                     <th className="pr-color" scope="col">
                        {t('Pop-up Alerts')}
                     </th>
                     <th className="pr-color" scopetd="col"></th>
                  </tr>
               </thead>
               <tbody>
                  
               <Zone></Zone>
               <Zone></Zone>
               <Zone></Zone>
               <Zone></Zone>
               </tbody>
            </table>
         </div>
      </div>
   );
}
