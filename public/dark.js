// if(localStorage.getItem('isDark')){
//     document.body.classList.add("dark")
//     document.querySelectorAll(".bg-white").forEach(ele=>{
//        ele.classList.add("dark") 
//     })
//     document.querySelectorAll(".pr-color").forEach(ele=>{
//        ele.classList.add("dark") 
//     })
 
//     document.querySelectorAll(".btn-outline-pr").forEach(ele=>{
//        ele.classList.add("dark") 
//     })
//     document.querySelectorAll(".form-select").forEach(ele=>{
//        ele.classList.add("dark") 
//     })
//     document.querySelectorAll("h3").forEach(ele=>{
//        ele.classList.add("dark") 
//     })
//     Array.from(document.getElementsByTagName("path")).forEach(ele=>{
//      ele.classList.add("dark") 
//   })
    
//  }else{
//     document.body.classList.remove("dark")
//     document.querySelectorAll(".bg-white").forEach(ele=>{
//        ele.classList.remove("dark")
//     })
//     document.querySelectorAll(".pr-color").forEach(ele=>{
//        ele.classList.remove("dark") 
//     })
//     document.querySelectorAll(".btn-outline-pr").forEach(ele=>{
//        ele.classList.remove("dark") 
//     })
//     document.querySelectorAll(".form-select").forEach(ele=>{
//        ele.classList.remove("dark") 
//     })
//     document.querySelectorAll("h3").forEach(ele=>{
//        ele.classList.remove("dark") 
//     })
//     Array.from(document.getElementsByTagName("path")).forEach(ele=>{
//      ele.classList.remove("dark") 
//   })
  
//  }


// darkModeScript.js

const applyDarkMode = () => {
    document.body.classList.add('dark');
  
    document.querySelectorAll('.bg-white').forEach((ele) => {
      ele.classList.add('dark');
    });
  
    document.querySelectorAll('.pr-color').forEach((ele) => {
      ele.classList.add('dark');
    });
  
    document.querySelectorAll('.btn-outline-pr').forEach((ele) => {
      ele.classList.add('dark');
    });
  
    document.querySelectorAll('.form-select').forEach((ele) => {
      ele.classList.add('dark');
    });
  
    document.querySelectorAll('h3').forEach((ele) => {
      ele.classList.add('dark');
    });
  
    Array.from(document.getElementsByTagName('path')).forEach((ele) => {
      ele.classList.add('dark');
    });
  };
  
  const removeDarkMode = () => {
    document.body.classList.remove('dark');
  
    document.querySelectorAll('.bg-white').forEach((ele) => {
      ele.classList.remove('dark');
    });
  
    document.querySelectorAll('.pr-color').forEach((ele) => {
      ele.classList.remove('dark');
    });
  
    document.querySelectorAll('.btn-outline-pr').forEach((ele) => {
      ele.classList.remove('dark');
    });
  
    document.querySelectorAll('.form-select').forEach((ele) => {
      ele.classList.remove('dark');
    });
  
    document.querySelectorAll('h3').forEach((ele) => {
      ele.classList.remove('dark');
    });
  
    Array.from(document.getElementsByTagName('path')).forEach((ele) => {
      ele.classList.remove('dark');
    });
  };
  
  const isDarkMode = localStorage.getItem('isDark');
  
  if (isDarkMode) {
    console.log("applyting darkmode")
    applyDarkMode();
  } else {
    removeDarkMode();
  }
  