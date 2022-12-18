import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ghPageName } from "../../redux/constants/helper";
import { fetchLocationKey } from "../../redux/actions/homeActions";

import {
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import useStyles from "./CityItemsStyles";

const CityItems = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const FavoriteCities = useSelector((state) => state.addToFavorites);
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4} maxWidth="md">
        {FavoriteCities.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => dispatch(fetchLocationKey(card.city))}
              to={`/${ghPageName}/${card.id}`}
            >
              <CardActionArea component="a">
                <Card className={classes.card}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.city}
                    </Typography>
                    <CardMedia
                      component="img"
                      image={`https://developer.accuweather.com/sites/default/files/${
                        card.icon > 9 ? card.icon : `0${card.icon}`
                      }-s.png`}
                    />
                    <Typography>{`${card.temperature}C`}</Typography>
                    <Typography>{card.weatherText}</Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CityItems;
