import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import Workers from "./pages/worker";

function App() {
  return (
    <main>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/worker" />} />
          <Route path="/worker" element={<Workers />} />
        </Routes>
      </div>
      <Toaster richColors position="top-center" />
    </main>
  );
}

export default App;
