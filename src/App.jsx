import React from "react";
import Navegation from "./routes/Navegation";
import { ThemeProvider } from "./components/_partials/ThemeProvider";

function App() {
  return (
    <div className="dark:bg-neutral-900 border-gray-200">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navegation />
      </ThemeProvider>
    </div>
  );
}

export default App;
