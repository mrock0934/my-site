import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Site from "./Site";
import FinAndFur from "./pages/FinAndFur";
import MKEBeaverProject from "./pages/MKEBeaverProject.jsx";
import SuperiorBioConservancy from "./pages/SuperiorBioConservancy";
import Gallery from "./pages/Gallery.jsx";
import GalleryDestination from "./pages/GalleryDestination";


function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24">
      <h1 className="font-serif text-3xl font-bold">Page not found</h1>
      <p className="mt-4">
        Try the <a className="underline" href="/">homepage</a>.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Site />} />
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/gallery/:slug" element={<GalleryDestination />} />
        <Route path="/projects/fin-and-fur-southwest" element={<FinAndFur />} />
        <Route path="/projects/mke-beaver-project" element={<MKEBeaverProject />} />
        <Route path="/projects/superior-bio-conservancy" element={<SuperiorBioConservancy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
