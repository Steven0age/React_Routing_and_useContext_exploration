import { Link, Outlet } from "react-router-dom";
import "./root.css";
import { useContext } from "react";
import clickerContext from "../../context/SunClickerContext";
import { CloudClickerContext } from "../../context/CloudClickerContext";

function Root() {
  const { sunCount } = useContext(clickerContext);
  const { cloudCount } = useContext(CloudClickerContext);
  return (
    <>
      <div id="sidebar">
        <nav>
          <h1>MyFirst Router-Dom-Menu</h1>
          <ul>
            <li>
              <Link to="/first">open First Route</Link>
            </li>
            <li>
              <Link to="/second">open Second Route</Link>
            </li>
            <li>
              <Link to="/third">open Third Route</Link>
            </li>
          </ul>
        </nav>
        <br />
        <p>Wetter Ranking: Stand = {sunCount - cloudCount}</p>
      </div>
      <div id="main-content">
        <p> Nachfolgend der Content "aus dem Outlet":</p>
        <hr></hr>
        <br />
        <Outlet />
      </div>
    </>
  );
}

export default Root;
