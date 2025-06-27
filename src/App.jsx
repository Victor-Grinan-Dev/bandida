import { 
  HashRouter, 
  Routes, 
  Route,  
} from "react-router-dom";

//pages
import Layout from './layout/Layout';
import NotFound from './pages/notFound/NotFound';
import LandingPage from "./pages/landingPage/LandingPage";
import Bookings from "./pages/bookings/Bookings";

import Ajanvaraus from "./pages/info_ajanvaraus/Ajanvaraus";
import EnnenTatuointia from "./pages/info_ennenTatuointia/EnnenTatuointia";
import Hinnasto from "./pages/info_hinnasto/Hinnasto";
import HoitoOhjeet from "./pages/info_hoitoOhjeet/HoitoOhjeet";
import StudioPage from "./pages/studio/StudioPage";
import Artist from "./pages/artist/Artist";
import Smalls from "./pages/gallery/smalls/Smalls";
import BlackNWhite from "./pages/gallery/blackNWhite/BlackNWhite";
import Colored from "./pages/gallery/colored/Colored";
import PMU from "./pages/gallery/PMU/PMU";
import PermantMakeUp from "./pages/permanentMakeUp/PermantMakeUp";
import TattooIdea from "./pages/tattooIdea/TattooIdea";
import Gallery from "./pages/gallery/Gallery";

function App() {

  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route index element={<LandingPage />} />

            <Route path="galleria" element={<Gallery />} >
              <Route path="pienet-tatuointi" element={<Smalls />} />
              <Route path="mustavalkoinen-tatuointi" element={<BlackNWhite />} />
              <Route path="värilliset-tatuointi" element={<Colored />} />
              <Route path="pmu-tatuointi" element={<PMU />} />
            </Route>

            <Route path="ajanvaraus" element={<Bookings />} />

            <Route path="info-ajanvaraus" element={<Ajanvaraus />} />
            <Route path="ennen-tatuointia" element={<EnnenTatuointia />} />
            <Route path="hinnat" element={<Hinnasto />} />
            <Route path="tatuoinnin-hoito" element={<HoitoOhjeet />} />
            <Route path="kestopigmentointi-ja-microblading" element={<PermantMakeUp />} />
            <Route path="ideat-tatuointiin" element={<TattooIdea />} />

            <Route path="studio" element={<StudioPage />} />
            <Route path="paula-annelica" element={<Artist />} />

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
