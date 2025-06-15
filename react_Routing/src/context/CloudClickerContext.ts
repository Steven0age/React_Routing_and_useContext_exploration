import { createContext } from "react";

export const CloudClickerContext = createContext<{
  cloudCount: number;
  setCloudcount: React.Dispatch<number>;
}>({ cloudCount: 0, setCloudcount: () => {} });
