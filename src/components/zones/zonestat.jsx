import { Link } from "react-router-dom";
import Zone from "./zone";
import { useTranslation } from 'react-i18next';

export default function MainStat() {
   
   const { t } = useTranslation();
   return (
      <div className=" p-1 p-sm-5 zones">
        
         <div className="bg-white mb-2 px-4 py-2 rounded-3">
            <table class="table">
               <thead>
                  <tr className="">
                     
                     <th className="pr-color" scope="col">
                     Zone name
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
                  
               <Zone name="boumerdes" stat={true} />
               <Zone name="boumerdes"  stat={true} ></Zone>
               <Zone name="boumerdes" stat={true} ></Zone>
               <Zone name="boumerdes" stat={true} ></Zone>
               </tbody>
            </table>
         </div>
      </div>
   );
}
