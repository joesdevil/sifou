export default function Chgpwd() {
   return (
      <>
         <div
            class="modal  fade"
            id="exampleModal"
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
                        Change your password
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
                           Previous Password :
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
                           New Password :
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
                           Confirm New Password :
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
