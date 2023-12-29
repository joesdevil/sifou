import { Link } from "react-router-dom";
import User from "./user";
import { useTranslation } from 'react-i18next';
import AddUser from "../pop-up/add-user";

export default function Listusers(props) {
   const { t } = useTranslation();
   const user=props.user
   let adminuser=Boolean

   user=='admin'?adminuser=true:adminuser=false;


   return (
      <div className=" p-1 p-sm-5 zones">
         <div className="d-flex justify-content-between mb-4 align-items-center">
            <h3 className="pr-color m-lg-0 mt-4 ms-3">{t('User Management')}</h3>
            <Link className="link" to="">
               <button
                  className="btn pr-bg text-white btn-sm mt-4 ms-3 px-4 py-2"
                  style={{ width: "fit-content" }}  data-bs-toggle="modal" data-bs-target="#exampleModaluser"
               >
                  <i class="bi bi-plus-circle-fill"></i> {t('Add User')}
               </button>
               <AddUser></AddUser>
            </Link>
         </div>
         <div className="bg-white mb-2 px-4 py-2 rounded-3">
            <table class="table">
               <thead>
                  <tr className="">
                     <th className="pr-color" scope="col">
                        {t('Name')}
                     </th>
                     <th className="pr-color" scope="col">
                        Email
                     </th>
                     {adminuser && (
                        <th className="pr-color" scope="col">
                        Password
                        </th>
                     )}
                     
                     <th className="pr-color" scope="col">
                        Role
                     </th>
                     <th className="pr-color" scope="col">
                        
                     </th>
                     <th className="pr-color" scopetd="col"></th>
                  </tr>
               </thead>
               <tbody>

                  <User user={user}></User>
                  <User user={user}></User>
                  <User user={user}></User>
                  <User user={user}></User>
               </tbody>
            </table>
         </div>
      </div>
   );
}
