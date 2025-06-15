import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CloudClickerContext } from "../../context/CloudClickerContext";

function SecondRoute() {
  const { itemId, thridId } = useParams();
  const { cloudCount, setCloudcount } = useContext(CloudClickerContext);

  function cloudClicked() {
    setCloudcount(cloudCount + 1);
  }

  return (
    <div>
      <img
        onClick={cloudClicked}
        src="https://mias-klimatagebuch.de/wp-content/uploads/2021/07/mias-klimatagebuch-gewitterwolke-simone-lindemann.jpg"
        alt=""
      />
      <p>
        <>Second Route txt</>
      </p>
      <p>Item ID = {itemId}</p>
      <p>Third ID = {thridId}</p>
      <p>Wolke wurde {cloudCount} Mal geklickt</p>
    </div>
  );
}

export default SecondRoute;
