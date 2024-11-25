import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";

//components
import HomePage from './pages/homePage/HomePage';
import Layout from './layout/Layout';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
