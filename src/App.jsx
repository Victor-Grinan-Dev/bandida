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
import TheArtist from "./components/theArtist/TheArtist";
import LandingPage from "./pages/landingPage/LandingPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="artist" element={<TheArtist />} />
          </Route>
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
