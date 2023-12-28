import Main from "./components/zones/main";
import { useEffect } from "react";

export default function Zones() {
  useEffect(() => {

    const isDark = localStorage.getItem('isDark' );
    console.log("hh",isDark)
    
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
       document.querySelectorAll(".table").forEach(ele=>{
        ele.classList.add("dark") 
     })
     Array.from(document.getElementsByTagName("th")).forEach(ele=>{
      ele.classList.add("dark") 
   })
   Array.from(document.getElementsByTagName("td")).forEach(ele=>{
    ele.classList.add("dark") 
 })
 Array.from(document.getElementsByTagName("tr")).forEach(ele=>{
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
       document.querySelectorAll(".table").forEach(ele=>{
        ele.classList.remove("dark") 
     })
     Array.from(document.getElementsByTagName("th")).forEach(ele=>{
      ele.classList.remove("dark") 
   })
   Array.from(document.getElementsByTagName("td")).forEach(ele=>{
    ele.classList.remove("dark") 
 })
 Array.from(document.getElementsByTagName("tr")).forEach(ele=>{
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
    <Main></Main>
  </>
  )
}
