// import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
// import Clients from "./pages/client";
// import Workers from "./pages/worker";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Client from "./pages/client";
// import Project from "./pages/project";
// import SiteEngineer from "./pages/siteEngineer";
import Worker from "./pages/worker";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/pages/clients" element={<Client />} />
          {/* <Route path="/pages/projects" element={<Project />} /> */}
          {/* <Route path="/pages/site-engineer" element={<SiteEngineer />} /> */}
          <Route path="/pages/works" element={<Worker />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
