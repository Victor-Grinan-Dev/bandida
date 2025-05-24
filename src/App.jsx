import { 
  HashRouter, 
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

import Ajanvaraus from "./pages/info_ajanvaraus/Ajanvaraus";
import EnnenTatuointia from "./pages/info_ennenTatuointia/EnnenTatuointia";
import Hinnasto from "./pages/info_hinnasto/Hinnasto";
import HoitoOhjeet from "./pages/info_hoitoOhjeet/HoitoOhjeet";
import StudioPage from "./pages/studio/StudioPage";
import Artist from "./pages/artist/Artist";

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route index element={<LandingPage />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="info" element={<InfoPage />} />
            <Route path="booking" element={<Bookings />} />

            <Route path="ajanvaraus" element={<Ajanvaraus />} />
            <Route path="ennen-tatuointia" element={<EnnenTatuointia />} />
            <Route path="hinnasto" element={<Hinnasto />} />
            <Route path="hoito-ohjeet" element={<HoitoOhjeet />} />
            
            <Route path="studio" element={<StudioPage />} />
            <Route path="artist" element={<Artist />} />

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
