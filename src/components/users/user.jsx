import { useState,useEffect } from "react";
import { useTranslation } from 'react-i18next';
import UserImage from "../../images/R.jpg";


export default function User() {
    const { t } = useTranslation();

    const user='admin'
    let adminuser=Boolean

    user=='admin'?adminuser=true:adminuser=false;

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
           document.querySelectorAll("td").forEach(ele=>{
            ele.classList.add("dark") 
         })

         document.querySelectorAll(".bi-arrows-fullscreen").forEach(ele=>{
            ele.classList.add("dark") 
         })
         
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
           document.querySelectorAll("td").forEach(ele=>{
            ele.classList.remove("dark") 
         })
         document.querySelectorAll(".bi-arrows-fullscreen").forEach(ele=>{
            ele.classList.remove("dark") 
         })
         
        }
      }, []);

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

                <td className="ni fw-semibold align-middle fs-7 pr-color">
                    <img src={UserImage} alt="Image Ronde" class="rounded-circle custom-width" />
                    James miller
                </td>

                <td className="ni fw-semibold align-middle fs-7 pr-color">
                    james.miller@example.com
                </td>
                {adminuser && (<td className="ni fw-semibold align-middle fs-7 pr-color pwd">
                    james.miller 
                </td>)}
                
                <td className="ni fw-semibold align-middle fs-7 pr-color">
                    {adminuser?( 
                           <select
                              class="form-select form-select-sm"
                              
                           
                           >
                              <option value="admin">admin</option>
                              <option value="employee">employee</option>
                           </select>
                        ):('admisn')}
                </td>

                {adminuser && ( <td className="" >
                    <button className="btn fw-bold btn-outline-danger mt-3">
                        <i class="bi bi-x-circle-fill pe-sm-2"></i>{" "}
                        <span>{t('Delete')}</span>
                    </button>
                </td>)}
               
            </tr>
        </>
    )
}
