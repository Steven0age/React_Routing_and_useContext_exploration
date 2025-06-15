import { createContext } from "react";
const SunClickerContext = createContext<{
  sunCount: number;
  setSunCount: React.Dispatch<number>;
}>({ sunCount: 0, setSunCount: () => {} });

export default SunClickerContext;
