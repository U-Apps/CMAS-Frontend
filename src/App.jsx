import { Routes, Route, Navigate } from 'react-router-dom';

import { Toaster } from 'sonner';
import ClientsTable from './components/ClientTable';

function App() {
  return (
    <main>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/client" />} />
          <Route path="/client" element={<ClientsTable />} />
        </Routes>
      </div>
      <Toaster richColors position="top-center" />
    </main>
  );
}

export default App;
