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
            <Route path="galleria" element={<Gallery />} />
            <Route path="ajanvaraus" element={<Bookings />} />

            <Route path="info-ajanvaraus" element={<Ajanvaraus />} />
            <Route path="ennen-tatuointia" element={<EnnenTatuointia />} />
            <Route path="tatuoinnin-hinta" element={<Hinnasto />} />
            <Route path="tatuoinnin-hoito" element={<HoitoOhjeet />} />

            <Route path="studio" element={<StudioPage />} />
            <Route path="artist" element={<Artist />} />

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
