import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Typography, AppBar, Link, Toolbar } from "@mui/material";
import { ghPageName } from "../../../redux/constants/helper";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const homeColor = (e) => {
    setIsActive(false);
  };
  const favoritesColor = (e) => {
    setIsActive(true);
  };
  return (
    <AppBar
      position="static"
      bgcolor="blue"
      elevation={1}
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Weather Task
        </Typography>
        <nav>
          <NavLink style={{ textDecoration: "none" }} to={`/${ghPageName}/`}>
            <Link
              variant="button"
              underline="none"
              color={isActive ? "text.primary" : "white"}
              sx={{ my: 1, mx: 1.5 }}
              onClick={homeColor}
              // href="/"
            >
              Home
            </Link>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to={`/${ghPageName}/favorites`}>
            <Link
              variant="button"
              underline="none"
              color={isActive ? "white" : "text.primary"}
              onClick={favoritesColor}
              sx={{ my: 1, mx: 1.5 }}
              // href="/favorites"
            >
              Favorites
            </Link>
          </NavLink>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
