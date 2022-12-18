import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home/components/MainCard";
import Favorites from "./favorites/components/CityItems";
import NavBar from "./shared/components/Navigation/NavBar";
import NotFound from "./shared/components/NotFound";

import { ghPageName } from "./redux/constants/helper";

const App = () => {
  let routes;

  routes = (
    <Routes>
      <Route path={`/${ghPageName}/`} element={<Home />} />
      <Route path={`/${ghPageName}/favorites`} element={<Favorites />} />
      <Route path={`/${ghPageName}/:cityKey`} element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  return (
    <Router>
      <NavBar />
      {routes}
    </Router>
  );
};

export default App;
