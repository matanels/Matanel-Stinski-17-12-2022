import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  fetchLocationKey,
  fetchFiveDays,
  fetchCurrent,
  addFavorites,
  removeFavorites,
} from "../../redux/actions/homeActions";
import DeleteModal from "../../shared/components/UIElements/DeleteModal";
import SpinnerModal from "../../shared/components/UIElements/SpinnerModal";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import useStyles from "./MainContainerStyles";

import {
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  Button,
  CardMedia,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  DeleteButton,
  CancelButton,
} from "../../shared/components/UIElements/Modal.styled";

const MainContainer = () => {
  const { cityKey } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [deleteModalIsActive, setDeleteModalActive] = useState(false);
  const [errorActive, setErrorActive] = useState(false);
  const [error, setErrorMessage] = useState();

  const getDay = (date) => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = new Date(date);
    return weekday[day.getDay()];
  };

  const fiveDays = useSelector((state) => state.fiveDaysForecast);
  const currentWeather = useSelector((state) => state.currentWeather);
  const locationKey = useSelector((state) => state.locationKey);
  const favoriteList = useSelector((state) => state.addToFavorites);
  const defaultCity = useSelector((state) => state.defaultCity);
  const errorMessage = useSelector((state) => state.errorHandle);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (errorMessage) {
      setErrorActive(true);
      setErrorMessage(errorMessage);
    }
  }, [errorMessage]);

  const handleAddClick = () => {
    if (favoriteList.find((city) => city.id === locationKey[0].Key))
      alert("Already Exits");
    else {
      dispatch(
        addFavorites({
          id: locationKey[0].Key,
          city: locationKey[0].LocalizedName,
          temperature: currentWeather.data[0].Temperature.Metric.Value,
          weatherText: currentWeather.data[0].WeatherText,
          favorite: true,
          icon: fiveDays.data.DailyForecasts[0].Day.Icon,
        })
      );
    }
  };

  const handleRemoveClick = () => {
    dispatch(removeFavorites(locationKey[0].Key));
    setDeleteModalActive(false);
  };

  useEffect(() => {
    setIsLoading(true);
    if (!!cityKey) {
      dispatch(fetchFiveDays(cityKey));
      dispatch(fetchCurrent(cityKey));
    } else if (!cityKey && !locationKey) {
      dispatch(fetchLocationKey(defaultCity.LocalizedName));
    }
    setIsLoading(false);
  }, [dispatch, cityKey, defaultCity, locationKey]);

  useEffect(() => {
    setIsLoading(true);
    if (!!locationKey && locationKey[0].Key) {
      dispatch(fetchFiveDays(locationKey[0].Key));
      dispatch(fetchCurrent(locationKey[0].Key));
    }
    setIsLoading(false);
  }, [dispatch, locationKey]);

  return (
    !!currentWeather?.data &&
    !!fiveDays?.data?.DailyForecasts &&
    (!!locationKey || !!cityKey) && (
      <>
        <ErrorModal
          active={errorActive}
          hideModal={() => {
            setErrorActive(false);
          }}
          title="Error"
          okButton="OK"
        >
          {error}
        </ErrorModal>

        <Container className={classes.container} maxWidth="lg">
          {isLoading && <SpinnerModal />}
          <Grid container>
            <Grid item xs className={classes.leftData}>
              <Typography gutterBottom variant="h6">
                {!!locationKey && locationKey[0].LocalizedName}
              </Typography>
              <Typography gutterBottom variant="h6">
                {`${currentWeather.data[0].Temperature.Metric.Value}${currentWeather.data[0].Temperature.Metric.Unit}`}
              </Typography>
            </Grid>

            {favoriteList.find((city) => city.id === locationKey[0].Key) ? (
              <>
                <Grid item className={classes.indicator}>
                  <FavoriteBorderIcon fontSize="large" />
                </Grid>
                <Grid item className={classes.gridButton}>
                  <Button
                    className={classes.gridButton}
                    variant="outlined"
                    onClick={() => setDeleteModalActive(true)}
                  >
                    Remove From Favorites
                  </Button>
                  <DeleteModal
                    active={deleteModalIsActive}
                    hideModal={() => setDeleteModalActive(false)}
                    title="Are you sure?"
                    cancelButton={<CancelButton>Cancel</CancelButton>}
                    deleteButton={
                      <DeleteButton onClick={handleRemoveClick}>
                        Delete
                      </DeleteButton>
                    }
                  >
                    Do you really want to delete?
                  </DeleteModal>
                </Grid>
              </>
            ) : (
              <Grid item className={classes.gridButton}>
                <Button variant="outlined" onClick={handleAddClick}>
                  Add to Favorites
                </Button>
              </Grid>
            )}
          </Grid>
          <Typography
            gutterBottom
            variant="h1"
            className={classes.middleData}
          >
            {currentWeather.data[0].WeatherText}
          </Typography>
          <Grid container spacing={3} maxWidth="lg">
            {fiveDays.data.DailyForecasts.map((day) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2.4}
                className={classes.back}
                key={day.Date}
              >
                <Card className={classes.daysCards}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5">
                      {getDay(day.Date)}
                    </Typography>
                    <CardMedia
                      component="img"
                      image={`https://developer.accuweather.com/sites/default/files/${
                        day.Day.Icon > 9 ? day.Day.Icon : `0${day.Day.Icon}`
                      }-s.png`}
                    />
                    <Typography align="center" variant="h6">
                      {`${day.Temperature.Minimum.Value}${day.Temperature.Minimum.Unit} / ${day.Temperature.Maximum.Value}${day.Temperature.Minimum.Unit}`}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    )
  );
};

export default MainContainer;
