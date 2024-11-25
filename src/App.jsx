import { 
  BrowserRouter, 
  Routes, 
  Route, 
  // Navigate  
} from "react-router-dom";

//components
import Layout from './layout/Layout';
import HomePage from './pages/homePage/HomePage';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      {/* <Route path="*" element={<Navigate to="/not-found" />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
