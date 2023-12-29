import { useState } from "react";

export default function ZoneAdd() {
        const [rangValue, setCamValue] = useState(0);
        const changeRangeValue = (e, num) => {
                switch (num) {
                   case 2:
                      setCamValue(e.target.value);
                      break;
                   default:
                      break;
                }
             };

   return (
          
      <>
         <div
            class="modal  fade"
            id="zoneadd"
            tabindex="-1"
            aria-labelledby="zoneadd"
            aria-hidden="true"
         >
            <div class="modal-dialog modal-dialog-centered">
               <div class="modal-content">
                  <div class="modal-header">
                     <h1
                        class="modal-title pr-colo fs-5"
                        id="exampleModalLabel"
                     >
                        New Zone Setup
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
                        <div className="w-100 mb-3 pr-colo fw-bold">
                           Enter a name and select how many cameras you have in
                           this zone{" "}
                        </div>
                        <div class="mb-3 w-100">
                           <label
                              for="exampleFormControlInput1"
                              class="form-label pr-colo fw-bold"
                           >
                              Previous Password :
                           </label>
                           <input
                              type="email"
                              class="form-control py-2 w-100"
                              id="exampleFormControlInput1"
                              placeholder="xxxxxxxxxx"
                           />
                        </div>
                        <div className="w-100 p-3">
                           <span className="border pr-colo rounded-1 px-4 py-2">
                              {rangValue}
                           </span>
                           <input
                              type="range"
                              onChange={(e) => changeRangeValue(e, 2)}
                              className="float-end mt-1 pr-bg w-75"
                              name="vol"
                              value={rangValue}
                              min="0"
                              max="100"
                           />
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
                     <button type="button" class="btn btn-primary">
                        Save changes
                     </button>
                  </div>
               </div>
            </div>
         </div>{" "}
      </>
   );
}
