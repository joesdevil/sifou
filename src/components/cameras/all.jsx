import Camera from "./camera";

export default function All() {
   return (
      <div className="pt-4 px-lg-5 p-3 all-cam">
         <div className="d-flex justify-content-between mb-2 align-items-center">
            <h3 className="pr-color">Cameras</h3>
            <b className="pr-color me-3">Date : 15:00 20/12/2021</b>
         </div>
         <div className="shadow-lg row row-cols-md-3 rounded-3">
         <Camera></Camera>
            <Camera></Camera>
            <Camera></Camera>
            <Camera></Camera>
            <Camera></Camera>
            <Camera></Camera>
            <Camera></Camera>
            <Camera></Camera>
            <Camera></Camera>
         </div>{" "}
      </div>
   );
}
