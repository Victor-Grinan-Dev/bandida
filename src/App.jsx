import { 
  BrowserRouter, 
  Routes, 
  Route, 
  // Navigate  
} from "react-router-dom";

//pages
import Layout from './layout/Layout';
// import HomePage from './pages/homePage/HomePage';
import NotFound from './pages/notFound/NotFound';
import Gallery from "./pages/gallery/Gallery";
import InfoPage from "./pages/infoPage/InfoPage";
import LandingPage from "./pages/landingPage/LandingPage";
import Bookings from "./pages/bookings/Bookings";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="info" element={<InfoPage />} />
            <Route path="booking" element={<Bookings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
