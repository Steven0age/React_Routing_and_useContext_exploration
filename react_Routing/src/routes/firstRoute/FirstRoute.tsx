import { useContext } from "react";
import { useParams } from "react-router-dom";
import SunClickerContext from "../../context/SunClickerContext";

function FirstRoute() {
  const { itemId, thridId } = useParams();
  const { sunCount, setSunCount } = useContext(SunClickerContext);

  function sunClicked() {
    setSunCount(sunCount + 1);
  }
  return (
    <div>
      <img
        onClick={sunClicked}
        src="https://www.grafik-werkstatt.de/media/catalog/product/nice/d/doppelkarte-quadr-sonne-30951.png?width=400&height=400&store=de&image-type=image"
        alt=""
      />
      <p>
        <>First Route txt</>
      </p>
      <p>Item ID = {itemId}</p>
      <p>Third ID = {thridId}</p>
      <p>Sonne wurde {sunCount} Mal geklickt</p>
    </div>
  );
}

export default FirstRoute;
