import DoughnutS from "../stats/DoughnutS";
import LineS from "../stats/lineS";
import logoblue from '../../images/logoblue.svg';

export default function StateReport() {

    // document.body.style.background="white"
    // Array.from(document.querySelectorAll('.txtstat')).forEach(ele=>{
    //     ele.style.textAlign="center"
    // }) 
    // Array.from(document.querySelectorAll('.shadow')).forEach(ele=>{
    //     ele.classList.remove("shadow")
    // })
    
return(
<div style={{width:'100%',height:'200vh',background:'#fff'}}>

{/* <div className="row">
    <div>
    <h2>Site Security Stats & Report</h2>
    </div>
   
    <div className="logo me-3">
        <img src={logoblue} height="26px" alt="" />
      </div>
</div> */}

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
        

        
        <div class="col-15  txtstat  pr-color p-3" style={{textAlign:'center',padding:'20px',borderTop:'1px solid black'}}   ><h2 class="align-middle">- Hazards & issues Distribution -</h2></div>
       <DoughnutS shadow={false} />




        <div class="col-15  txtstat pr-color p-3" style={{textAlign:'center',padding:'20px',borderTop:'1px solid black'}}  ><h2 class="align-middle">- Hazards & issues Reported overtime -</h2></div>
       <LineS shadow={false} />



</div>
</div>
</div>


    
)

}