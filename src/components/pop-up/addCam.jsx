export default function AddCam() {
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
                           Enter Name
                         </label>
                         <input
                            type="email"
                            class="form-control py-2 w-100"
                            id="exampleFormControlInput1"
                            placeholder="xxxxxxxxxx"
                         />
                      </div>
                      <div class="mb-3 w-100">
                         <label
                            for="exampleFormControlInput1"
                            class="form-label pr-colo fw-bold"
                         >
                           Enter Ip Address
                         </label>
                         <input
                            type="email"
                            class="form-control py-2 w-100"
                            id="exampleFormControlInput1"
                            placeholder="xxxxxxxxxx"
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
 