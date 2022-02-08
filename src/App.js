import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cats from "./Cats/Cats";
import Breeds from "./Breeds/Breeds";
import Favorites from "./Favorites/Favorites";
import NotFound from "./NotFound/NotFound";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalstyle";
import Navbar from "./Navbar/Navbar";
import { AppContextProvider } from "./context";
import theme from "./theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Cats />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppContextProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
