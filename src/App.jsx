// App.js
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Sidebar from "./components/Sidebar/Sidebar";
import Client from "./pages/client";
import Worker from "./pages/worker";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* المحتوى الرئيسي */}
      <div
        className={`flex-1 transition-all duration-300 p-4 ${
          isSidebarOpen ? "md:mr-64" : "md:mr-16"
        }`}
      >
        <Routes>
          <Route path="clients" element={<Client />} />
          <Route path="worker" element={<Worker />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
