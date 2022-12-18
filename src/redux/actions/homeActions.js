import storeApi from "../../apis/storeApi";
import { WeatherAPIKey } from "../../apis/secrets";
import { ActionTypes } from "../constants/action-types";

export const fetchFiveDays = (locationKey) => {
  return async (dispatch) => {
    try {
      if (!locationKey) return;
      typeof locationKey == "object" && (locationKey = locationKey.Key);
      const response = await storeApi.get(
        `/forecasts/v1/daily/5day/${locationKey}?apikey=${WeatherAPIKey}&metric=true&details=true`
      );
      dispatch({ type: ActionTypes.FETCH_FIVEDAYS, payload: response });
    } catch (err) {
      dispatch({
        type: ActionTypes.ERROR,
        payload: err.message || "Ops Something went wrong.",
      });
    }
  };
};

export const fetchCurrent = (locationKey) => {
  return async (dispatch) => {
    try {
      if (!locationKey) return;
      typeof locationKey == "object" && (locationKey = locationKey.Key);
      const response = await storeApi.get(
        `/currentconditions/v1/${locationKey}?apikey=${WeatherAPIKey}`
      );
      dispatch({ type: ActionTypes.FETCH_CURRENT, payload: response });
    } catch (err) {
      dispatch({
        type: ActionTypes.ERROR,
        payload: err.message || "Ops Something went wrong.",
      });
    }
  };
};

export const fetchLocationKey = (city) => {
  return async (dispatch) => {
    try {
      if (!city) return;
      const response = await storeApi.get(
        `/locations/v1/cities/search?apikey=${WeatherAPIKey}&q=${city}`
      );
      dispatch({
        type: ActionTypes.FETCH_LOCATIONKEY,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: ActionTypes.ERROR,
        payload: err.message || "Ops Something went wrong.",
      });
    }
  };
};

export const setInput = (input) => {
  return {
    type: ActionTypes.INPUT,
    payload: input,
  };
};

export const addFavorites = (favorites) => {
  return {
    type: ActionTypes.ADD_FAVORITES,
    payload: favorites,
  };
};

export const removeFavorites = (favorites) => {
  return {
    type: ActionTypes.REMOVE_FAVORITES,
    payload: favorites,
  };
};

export const setError = (error) => {
  return {
    type: ActionTypes.ERROR,
    payload: error,
  };
};
