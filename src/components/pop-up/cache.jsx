export default function Cache() {
        return (
           <>
              <div
                 class="modal  fade"
                 id="cache"
                 tabindex="-1"
                 aria-labelledby="cache"
                 aria-hidden="true"
              >
                 <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                       <div class="modal-header">
                          <h1
                             class="modal-title pr-colo fs-5"
                             id="exampleModalLabel"
                          >
                             Reset Alerts History
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
                             Are you sure you would like to delete all the video cache from recent camera previews? This action cannot be undone. </div>
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
     