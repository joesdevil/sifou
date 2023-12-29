export default function AddUser() {
    return (
       <>
          <div
             class="modal  fade"
             id="exampleModaluser"
             tabindex="-1"
             aria-labelledby="exampleModaluserLabel"
             aria-hidden="true"
          >
             <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                   <div class="modal-header">
                      <h1
                         class="modal-title pr-colo fs-5"
                         id="exampleModaluserLabel"
                      >
                         Add User
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
                           Role :
                         </label>
                         <select class="form-select py-2 form-select-sm" style={{width:'50%'}}>
                              <option selected>Employee</option>
                              <option value="ad">
                               Admin
                              </option>
                           </select>
                      </div>
                      <div class="mb-3 w-100">
                         <label
                            for="exampleFormControlInput1"
                            class="form-label pr-colo fw-bold"
                         >
                            Username :
                         </label>
                         <input
                            type="text"
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
                            Email :
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
                             Password :
                         </label>
                         <input
                            type="email"
                            class="form-control py-2 w-100"
                            id="exampleFormControlInput1"
                            placeholder="xxxxxxxxx"
                         />
                      </div>
                      <div class="mb-3 w-100">
                         <label
                            for="exampleFormControlInput1"
                            class="form-label pr-colo fw-bold"
                         >
                            Confirm Password :
                         </label>
                         <input
                            type="email"
                            class="form-control py-2 w-100"
                            id="exampleFormControlInput1"
                            placeholder="xxxxxxxxx"
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
                      <button style={{width: '130px'}} type="button" class="btn btn-primary">
                         Add User
                      </button>
                   </div>
                </div>
             </div>
          </div>{" "}
       </>
    );
 }
 