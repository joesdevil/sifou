import PPE from "../../images/ppe.png";
import mZone from "../../images/mZone.png";

export default function MostF() {
  return (
    <div className="bg-white row row-cols-lg-2 shadow px-3 py-2 rounded-4">
      <div>
        <h5 className="pr-color text-center py-3">PPE Alert</h5>
        <div className="d-flex justify-content-center align-items-center">
          <img src={PPE} className="" width="80px" alt="" />
          <div className="ms-3" style={{ width: "" }}>
            <div className="rounded-pill small bg-warning px-3 py-2 text-center text-white fw-bold">
              <small> 32 Alerts</small>
            </div>
            <div className="rounded-pill mt-3 pr-bg px-3 py-2 small text-center text-white fw-bold">
              <small> 13 Unsolved</small>
            </div>
          </div>
        </div>
        <div className="text-center small text-secondary my-4">
          - Missing Safety Helmet -
        </div>
      </div>
      <div>
        <h5 className="pr-color text-center py-3">Most Dangerous Zone</h5>
        <div className="d-flex justify-content-center py-1 align-items-center">
          <div className="">
            <div className="rounded-pill small bg-warning px-3 py-2 text-center text-white fw-bold">
              <small>14 Violation</small>
            </div>
            <div className="rounded-pill mt-3 pr-bg px-3 py-2 small text-center text-white fw-bold">
              <small> 4 Unsolved</small>
            </div>
          </div>
          <img className="ms-3" src={mZone} width="80px" alt="" />
        </div>
        <div className="text-center small text-secondary mt-4 mb-3">
          - Zone 01 Violation -
        </div>
      </div>
    </div>
  );
}
