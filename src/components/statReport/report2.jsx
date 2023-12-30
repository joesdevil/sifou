import DoughnutS from "../stats/DoughnutS";
import LineS from "../stats/lineS";
import logoblue from '../../images/logoblue.svg';
import MainStat from "../zones/zonestat";
import generatePDF, { Resolution, Margin } from 'react-to-pdf';
import { useEffect,useState } from "react";
import Swal from 'sweetalert2';
import { ClipLoader } from 'react-spinners';
import loader from '../../images/loader.gif';
 

const StateReport2 =()=> {



            




    
    const [timeexportdelay, settimeexportdelay] = useState(
        localStorage.getItem("timeexportdelay")
     );

    // check new export time delay


   useEffect(() => {
    const checkNewDay =async () => {
      const currentDate = new Date();
      const currentDay = currentDate.getDate();

      // You may want to store the last checked day in localStorage or a server
      // to handle cases where the user refreshes the page or closes/open the app.
      const lastCheckedDay = parseInt(localStorage.getItem('lastCheckedDay'), 10);

      if (currentDay !== lastCheckedDay) {
       console.log('Hello, new day!');

       
       // Update the last checked day
       localStorage.setItem('lastCheckedDay', currentDay.toString());
      }
    };
    
    const systemdelay={
       'daily':1,
       'weekly':7,
       'monthly':30
    }
    // Check for a new day every 24 hours (adjust the interval as needed)
    let timedelay= systemdelay[localStorage.getItem(timeexportdelay)] * 24 * 60 * 60 * 1000 
    const intervalId = setInterval(checkNewDay, timedelay);

    // Initial check when the component mounts
    checkNewDay();

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); 
 // end check
 

    const options = {
        // default is `save`
        fileName: 'newFilename.pdf',
        method: 'open',
        // default is Resolution.MEDIUM = 3, which should be enough, higher values
        // increases the image quality but also the size of the PDF, so be careful
        // using values higher than 10 when having multiple pages generated, it
        // might cause the page to crash or hang.
        resolution: Resolution.MEDIUM,
        page: {
           // margin is in MM, default is Margin.NONE = 0
           margin: Margin.SMALL,
           // default is 'A4'
           format: 'letter',
           // default is 'portrait'
           orientation: 'portrait',
        },
        canvas: {
           // default is 'image/jpeg' for better size performance
           mimeType: 'image/png',
           qualityRatio: 1
        },
        // Customize any value passed to the jsPDF instance and html2canvas
        // function. You probably will not need this and things can break, 
        // so use with caution.
        overrides: {
           // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
           pdf: {
              compress: true
           },
           // see https://html2canvas.hertzen.com/configuration for more options
           canvas: {
              useCORS: true
           }
        },
     };
     
     // you can use a function to return the target element besides using React refs
     const getTargetElement = () => document.getElementById('content-id');
     
    
     function showLoadingAlert () {
        
         generatePDF(getTargetElement, options) 
        Swal.fire({
            title: "Sweet!",
            text: "Modal with a custom image.",
            imageUrl: loader,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
      };
      const handleClick = () => {
        showLoadingAlert();
      
        // Simulate an asynchronous task, e.g., API call
        setTimeout(() => {
          // Close the loading alert when the task is complete
          Swal.close();
          // Add additional logic or display another Swal alert if needed
          Swal.fire({
            icon: 'success',
            title: 'Task Completed',
            text: 'Your Report file has been succefully updated!',
          });
        }, 2000);
      };
return(
    
<div style={{width:'100%',height:'200vh',background:'#fff'}} id="content-id">
 
<button onClick={handleClick}>Click me</button>


<div style={{width:'90%',margin:'auto' }}>
<nav style={{background:'none'}} className="d-flex m-0   align-items-center justify-content-between">
      <ul className="list-unstyled d-flex align-content-center m-0">
         
        <div  className="pr-color pt-3 pb-3" style={{textTransform:'uppercase'}}>
        <b>Site Security Stats & Report</b>
        </div>
      </ul>
      <div className="logo  " style={{marginRight: '4rem' ,
  scale: '6'}}>
        <img src={logoblue} height="26px" alt="" />
      </div>
    </nav>
<div className="row">
    <div className="col-md-3">
        <div className="col-md-15 pr-color2">
        Date Range
        </div>
        <div className="col-md-15 pr-color ">
            <b> 22 Dec 2023 - 29 Dec 2023</b>
        
        </div>
    </div>
    <div className="col-md-3">
    <div className="col-md-15 pr-color2">
        Exported by
        </div>
        <div className="col-md-15 pr-color">
            <b>James Miller</b>
        
        </div>
    </div>
    <div className="col-md-3">

    <div className="col-md-15 pr-color2">
        from
        </div>
        <div className="col-md-15 pr-color">
        <b>Qareeb Security Platform</b>

        </div>
   
    </div>
    <div className="col-md-3">
    <div className="col-md-15 pr-color2">
        Language
        </div>
        <div className="col-md-15 pr-color">
        <b>English</b>
        </div>
    </div>
</div>

<div className="col-md-15" style={{width:'100%',background:'#fff'}}>
        

        
        <div class="col-15  txtstat  pr-color p-3" style={{textAlign:'center',padding:'20px',borderTop:'1px solid black'}}   >
            <h2 class="align-middle">- All Zones STATS -</h2></div>
       <MainStat />




        <div class="col-15  txtstat pr-color p-3" style={{textAlign:'center',padding:'20px',borderTop:'1px solid black'}}  >
            <h2 class="align-middle">- All Cameras STATS -</h2></div>
            <MainStat />



</div>
</div>
</div>


    
)

}

export default StateReport2