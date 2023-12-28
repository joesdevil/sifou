import Listusers from "./components/users/listusers";
import {useEffect} from "react";

export default function Users() {
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
        
  return(
    <>
    <Listusers></Listusers>
  </>
  )
}
