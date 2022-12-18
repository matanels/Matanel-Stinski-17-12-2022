import React from "react";

import AutoCompleteSearch from "./AutoCompleteSearch";
import MainContainer from "./MainContainer";

const MainCard = () => {
  return (
    <React.Fragment>
      <AutoCompleteSearch />
      <MainContainer />
    </React.Fragment>
  );
};

export default MainCard;
