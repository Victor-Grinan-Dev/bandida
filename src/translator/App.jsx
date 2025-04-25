import { 
  HashRouter, 
  Routes, 
  Route, 
} from "react-router-dom";

//pages
import Layout from '../layout/Layout';
import NotFound from '../pages/notFound/NotFound';
import Gallery from "../pages/gallery/Gallery";
import InfoPage from "../pages/infoPage/InfoPage";
import LandingPage from "../pages/landingPage/LandingPage";
import Bookings from "../pages/bookings/Bookings";

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="info" element={<InfoPage />} />
            <Route path="booking" element={<Bookings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
