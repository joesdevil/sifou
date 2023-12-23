import zoneImage from "../../images/zone.png";

export default function Camera() {
   return (
            <div className="zone-image rounded-3 position-relative p-0 m-0">
               <div className="cam-info d-flex position-absolute w-100 justify-content-between text-white small">
                  <b className="p-2 small m-0">
                     <i className="bi bi-camera-video-fill p-1"></i> Camera No 3 "Main Hall"
                  </b>
                  <small  className="p-2 fw-bold m-0">192.168.205.204</small>
               </div>
               <div className="icon bg-white pr-color position-absolute m-3 bottom-0 end-0 rounded-circle text-center"><i class="bi bi-arrows-fullscreen  align-middle"></i></div>
               <img
                  className="object-fit-cover"
                  src={zoneImage}
                  alt=""
                  srcset=""
               />
            </div>
   );
}
