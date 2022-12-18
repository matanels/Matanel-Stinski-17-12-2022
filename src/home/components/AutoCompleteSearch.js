import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { setInput, fetchLocationKey } from "../../redux/actions/homeActions";
import { WeatherAPIKey } from "../../apis/secrets";

import useStyles from "./AutoCompleteSearchStyles";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const AutoCompleteSearch = () => {
  const [selectedCityFromSearch, setSelectedCityFromSearch] = useState("");
  const [searchInputText, setSearchInputText] = useState("");
  const [cities, setCities] = useState([]);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (event) => {
    setSelectedCityFromSearch(event.target.outerText);
  };
  const onChangeField = (event) => {
    setSearchInputText(event.target.value);
  };
  useEffect(() => {
    if (!!searchInputText && searchInputText.length > 1) {
      const getCities = () =>
        axios
          .get(
            `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${WeatherAPIKey}&q=${searchInputText}`
          )
          .then(({ data }) => setCities(data))
          .catch(console.error);
      getCities();
    }
  }, [searchInputText]);
  useEffect(() => {
    if (!!selectedCityFromSearch) {
      dispatch(
        setInput({
          inputCityValue: selectedCityFromSearch,
        })
      );
      dispatch(fetchLocationKey(selectedCityFromSearch));
    }
  }, [selectedCityFromSearch, dispatch]);
  return (
    <Autocomplete
      disablePortal
      className={classes.AutocompleteBox}
      options={cities?.map((option) => option.LocalizedName)}
      renderInput={(params) => (
        <TextField onChange={onChangeField} {...params} label="City" />
      )}
      value={selectedCityFromSearch}
      onChange={handleChange}
    />
  );
};

export default AutoCompleteSearch;
