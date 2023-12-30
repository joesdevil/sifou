import {useEffect, useState}  from "react";
import axios from 'axios';

export default function AddCam() {



   const [ip_address, setip_address] = useState('');
   const [zone_id, setzone_id] = useState(0);
   const [zones, setZones] = useState([]);
   const [is_active, setis_active] = useState(false);
   const handleCreateZone = async () => {


      console.log(is_active)
      try {
         console.log(ip_address,zone_id)
         const response = await axios.post('http://localhost:8000/cameras/', {
               ip_address,
               zone_id ,
               is_active
         });
         console.log('camera created:', response.data);
      } catch (error) {
         console.error('Error creating zone:', error);
      }
   };


   const fetchZones = async () => {

      try {
        const responsezone = await axios.get('http://localhost:8000/zones/');
        setZones(responsezone.data);
        
        console.log(responsezone.data )
      } catch (error) {
        console.error('Error fetching zones:', error);
      }
    };


    useEffect(() => {
      // Fetch zones when the component mounts
      fetchZones();
      
    }, []);


    return (
       <>
          <div
             class="modal  fade"
             id="exampleModalcam"
             tabindex="-1"
             aria-labelledby="exampleModalLabel"
             aria-hidden="true"
          >
             <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                   <div class="modal-header">
                      <h1
                         class="modal-title pr-colo fs-5"
                         id="exampleModalLabel"
                      >
                         New Camera
                      </h1>
                      
                      <button
                         type="button"
                         class="btn-close"
                         data-bs-dismiss="modal"
                         aria-label="Close"
                      ></button>
                   </div>
                   
                   <div class="modal-body modal-dialog-centered p-4">
                         <div className="w-100">

                         <div class="mb-3 w-100">
                         <label
                            for="exampleFormControlInput1"
                            class="form-label pr-colo fw-bold"
                         >
                           Enter Ip Address
                         </label>
                         <input
                            type="text"
                            class="form-control py-2 w-100"
                            id="exampleFormControlInput1"
                            placeholder="--"
                            value={ip_address} onChange={(e) => setip_address(e.target.value)}
                            
                         />
                      </div>
                      <div class="mb-3 w-100">
                         <label
                            for="exampleFormControlInput1"
                            class="form-label pr-colo fw-bold"
                         >
                           Choose Zone
                         </label>

                         <select class="form-select py-2 form-select-sm"  value={zone_id} onChange={(e) => setzone_id(e.target.value)} >

                         {zones.map((zone)=>(
                              <option key={zone.id} value={zone.id}>{zone.zoneName} #{zone.id}</option>
                              ))}
                              
                              
                           </select>
                         
                      </div>
                      <div class="mb-3 w-100">
                         <label
                            for="exampleFormControlInput1"
                            class="form-label pr-colo fw-bold"
                         >
                           Status
                         </label>

                         <select class="form-select py-2 form-select-sm"    onChange={(e) => setis_active(e.target.value)} >

                           
                              <option value={true} >Enabled</option>
                              <option value={false} >Disabled </option>
                           </select>
                         
                      </div>
                      
                      
 </div>
                   </div>
                   <div class="modal-footer">
                      <button
                         type="button"
                         class="btn btn-secondary"
                         data-bs-dismiss="modal"
                      >
                         Close
                      </button>
                      <button type="button" class="btn btn-primary" onClick={handleCreateZone}>
                         Save changes
                      </button>
                   </div>
                </div>
             </div>
          </div>{" "}
       </>
    );
 }
 