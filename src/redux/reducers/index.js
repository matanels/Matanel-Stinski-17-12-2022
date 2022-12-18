import { combineReducers } from "redux";
import {
  fiveDaysReducer,
  currentReducer,
  inputReducer,
  setLocationKey,
  addFavorites,
  defaultCity,
  setError,
} from "./homeReducer";

const reducers = combineReducers({
  fiveDaysForecast: fiveDaysReducer,
  currentWeather: currentReducer,
  inputField: inputReducer,
  locationKey: setLocationKey,
  addToFavorites: addFavorites,
  defaultCity: defaultCity,
  removeFromFavorites: addFavorites,
  errorHandle: setError,
});

export default reducers;
