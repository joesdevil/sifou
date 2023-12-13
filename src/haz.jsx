import Alert from "./components/haz/alert";
import LastHaz from "./components/haz/last-haz";
import MostF from "./components/haz/mostF";

function Haz() {
  return (
    <div className="row row-cols-md-2 p-4">
      <div className="">
        <h3 className="pr-color mb-2">Latest Alert</h3>
        <LastHaz></LastHaz>
        <h3 className="pr-color my-3">Most frequent Alert</h3>
        <MostF></MostF>
      </div>
      <div className="">
      <h3 className="pr-color my-3">Pervious Alert</h3>
        <div
          className="p-0 m-0"
          style={{ overflow: "auto", height: "calc(100vh - 180px)" }}>
          <Alert></Alert>
          <Alert></Alert>
          <Alert></Alert>
          <Alert></Alert>
          <Alert></Alert>
          <Alert></Alert>
          <Alert></Alert>
          <Alert></Alert>
          <Alert></Alert>
          <Alert></Alert>
          <Alert></Alert>
          <Alert></Alert>
          <Alert></Alert>
        </div>

      </div>
    </div>
  );
}

export default Haz;
