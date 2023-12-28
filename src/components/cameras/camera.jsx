import zoneImage from "../../images/zone.png";
import FullscreenButtonvd from "../../flvideo";

export default function Camera(props) {
   return (
            <div className="zone-image rounded-3 position-relative p-0 m-0" id="test11">
               <div className="cam-info d-flex position-absolute w-100 justify-content-between text-white small">
                  <b className="p-2 small m-0">
                     <i className="bi bi-camera-video-fill p-1"></i> Camera No {props.cam_num} {props.cam_name} 
                  </b>
                  <small  className="p-2 fw-bold m-0">{props.ip}</small>
               </div>
               <div id="test1" className="icon bg-white pr-color position-absolute m-3 bottom-0 end-0 rounded-circle text-center">
                  {/* <i class="bi bi-arrows-fullscreen  align-middle"></i> */}
                  <FullscreenButtonvd />
                  </div>
               <img
                  className="object-fit-cover"
                  src={zoneImage}
                  alt=""
                  srcset=""
               />
            </div>
   );
}
