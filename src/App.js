import { Routes, Route } from "react-router-dom";
import Cats from "./Cats/Cats";
import Breeds from "./Breeds/Breeds";
import Favorites from "./Favorites/Favorites";
import NotFound from "./NotFound/NotFound";
import Navbar from "./Navbar/Navbar";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalstyle";
import { useGlobalContext } from "./context";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";

function App() {
  const {
    state: { theme },
  } = useGlobalContext();

  let location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Navbar />
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Cats />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
