// import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
// import Clients from "./pages/client";
// import Workers from "./pages/worker";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <main>
      <Sidebar />
      <div>
        {/* <Routes> */}
        {/* <Route path="/" element={<Navigate to="/worker" />} />
          <Route path="/worker" element={<Workers />} /> */}
        {/* </Routes> */}
      </div>
      <Toaster richColors position="top-center" />
    </main>
  );
}

export default App;
