export default function Exprt() {
        return (
           <>
              <div
                 class="modal  fade"
                 id="exprt"
                 tabindex="-1"
                 aria-labelledby="exprt"
                 aria-hidden="true"
              >
                 <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                       <div class="modal-header">
                          <h1
                             class="modal-title pr-colo fs-5"
                             id="exampleModalLabel"
                          >
                             Export your report
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
                        <div className="pr-colo fw-bold">File format :</div>
                             <select class="form-select py-2 form-select-sm" style={{width:'30%'}}>
                              <option selected>Pdf</option>
                              <option value="FR">
                                 Excel
                              </option>
                           </select>
                           <div class="mt-3 w-100">
                        <label
                           for="exampleFormControlInput1"
                           class="form-label pr-colo fw-bold"
                        >
                          Filename :
                        </label>
                        <input
                           type="text"
                           class="form-control py-2 w-100"
                           id="exampleFormControlInput1"
                           placeholder="xxxxxxxxx"
                        />
                     </div>

                       </div></div>
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
              </div>
              
           </>
        );
     }
     