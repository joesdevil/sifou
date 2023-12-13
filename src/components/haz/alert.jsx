import inj from "../../images/injured.png";
export default function Alert() {
  return (
    <div className="bg-white mb-2 px-4 py-2 rounded-3">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img src={inj} width="40px" alt="" srcset="" />
          <div className="ms-3">
            <h6 className="">
              <span className="text-danger">Urgent:</span> a worker was injured
            </h6>
            <p className="small">
              <small>23/11/2023 at 5;00 PM</small>
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <button className="btn btn-sm btn-outline-danger fw-bold px-3">
            <small>
              <small>See details</small>
            </small>
          </button>
          <div
            class="btn-close text-danger outline-0 ms-3"
            style={{ cursor: "pointer" }}
          ></div>

          {/* <i className="text-danger pointer bi bi-x-lg ms-3 h5" style={{"cursor":"pointer"}}></i> */}
        </div>
      </div>
    </div>
  );
}
