import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base:
    mode === "production" ? "/React_Routing_and_useContext_exploration/" : "/",
  plugins: [react()],
}));
