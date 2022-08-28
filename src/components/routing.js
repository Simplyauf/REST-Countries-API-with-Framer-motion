import { Router, Routes, Route } from "react-router-dom";
import HomePageContent from "./homePage";
import { DetailsOfSingleCountry } from "./detailsOfSingleCountry";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export const Routing = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePageContent />} />
        <Route path="/countries/:countryAbbr" element={<DetailsOfSingleCountry />} />
        <Route path="*" />
      </Routes>
    </AnimatePresence>
  );
};
