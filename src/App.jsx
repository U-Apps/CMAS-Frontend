import { Routes, Route, Navigate } from "react-router-dom";

import { Toaster } from "sonner";
import Clients from "./pages/client";

function App() {
  return (
    <main>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/client" />} />
          <Route path="/client" element={<Clients />} />
        </Routes>
      </div>
      <Toaster richColors position="top-center" />
    </main>
  );
}

export default App;
