import { ActionTypes } from "../constants/action-types";

const initialState = {
  forecast: {
    data: {
      Headline: {
        EffectiveDate: "2022-12-17T07:00:00+02:00",
        EffectiveEpochDate: 1671253200,
        Severity: 4,
        Text: "Pleasant this weekend",
        Category: "mild",
        EndDate: null,
        EndEpochDate: null,
      },
      DailyForecasts: [
        {
          Date: "2022-12-14T07:00:00+02:00",
          EpochDate: 1670994000,
          Temperature: {
            Minimum: {
              Value: 14.1,
              Unit: "C",
              UnitType: 17,
            },
            Maximum: {
              Value: 20.3,
              Unit: "C",
              UnitType: 17,
            },
          },
          Day: {
            Icon: 14,
            IconPhrase: "Partly sunny w/ showers",
            HasPrecipitation: true,
            PrecipitationType: "Rain",
            PrecipitationIntensity: "Moderate",
          },
          Night: {
            Icon: 35,
            IconPhrase: "Partly cloudy",
            HasPrecipitation: false,
          },
          Sources: ["AccuWeather"],
        },
        {
          Date: "2022-12-15T07:00:00+02:00",
          EpochDate: 1671080400,
          Temperature: {
            Minimum: {
              Value: 13.9,
              Unit: "C",
              UnitType: 17,
            },
            Maximum: {
              Value: 22,
              Unit: "C",
              UnitType: 17,
            },
          },
          Day: {
            Icon: 3,
            IconPhrase: "Partly sunny",
            HasPrecipitation: false,
          },
          Night: {
            Icon: 34,
            IconPhrase: "Mostly clear",
            HasPrecipitation: false,
          },
          Sources: ["AccuWeather"],
        },
        {
          Date: "2022-12-16T07:00:00+02:00",
          EpochDate: 1671166800,
          Temperature: {
            Minimum: {
              Value: 14.8,
              Unit: "C",
              UnitType: 17,
            },
            Maximum: {
              Value: 22.6,
              Unit: "C",
              UnitType: 17,
            },
          },
          Day: {
            Icon: 1,
            IconPhrase: "Sunny",
            HasPrecipitation: false,
          },
          Night: {
            Icon: 33,
            IconPhrase: "Clear",
            HasPrecipitation: false,
          },
          Sources: ["AccuWeather"],
        },
        {
          Date: "2022-12-17T07:00:00+02:00",
          EpochDate: 1671253200,
          Temperature: {
            Minimum: {
              Value: 14.2,
              Unit: "C",
              UnitType: 17,
            },
            Maximum: {
              Value: 22.9,
              Unit: "C",
              UnitType: 17,
            },
          },
          Day: {
            Icon: 1,
            IconPhrase: "Sunny",
            HasPrecipitation: false,
          },
          Night: {
            Icon: 33,
            IconPhrase: "Clear",
            HasPrecipitation: false,
          },
          Sources: ["AccuWeather"],
        },
        {
          Date: "2022-12-18T07:00:00+02:00",
          EpochDate: 1671339600,
          Temperature: {
            Minimum: {
              Value: 14,
              Unit: "C",
              UnitType: 17,
            },
            Maximum: {
              Value: 24.1,
              Unit: "C",
              UnitType: 17,
            },
          },
          Day: {
            Icon: 1,
            IconPhrase: "Sunny",
            HasPrecipitation: false,
          },
          Night: {
            Icon: 33,
            IconPhrase: "Clear",
            HasPrecipitation: false,
          },
          Sources: ["AccuWeather"],
        },
      ],
    },
    status: 200,
    statusText: "OK",
    headers: {
      "cache-control": "public, max-age=955",
      "content-type": "application/json; charset=utf-8",
      expires: "Thu, 15 Dec 2022 02:04:13 GMT",
    },
    config: {
      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false,
      },
      adapter: ["xhr", "http"],
      transformRequest: [null],
      transformResponse: [null],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: {},
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      baseURL: "http://dataservice.accuweather.com",
    },
    request: {},
  },
  current: {
    data: [
      {
        LocalObservationDateTime: "2022-12-15T03:38:00+02:00",
        EpochTime: 1671068280,
        WeatherText: "Some clouds",
        WeatherIcon: 36,
        HasPrecipitation: false,
        PrecipitationType: null,
        IsDayTime: false,
        Temperature: {
          Metric: {
            Value: 16.2,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 61,
            Unit: "F",
            UnitType: 18,
          },
        },
      },
    ],
    status: 200,
    statusText: "OK",
    headers: {
      "cache-control": "public, max-age=1",
      "content-type": "application/json; charset=utf-8",
      expires: "Thu, 15 Dec 2022 01:54:45 GMT",
    },
    config: {
      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false,
      },
      adapter: ["xhr", "http"],
      transformRequest: [null],
      transformResponse: [null],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: {},
      headers: {
        Accept: "application/json, text/plain, */*",
      },
    },
    request: {},
  },
  inputCityValue: "",
  locationKey: null,
  favorites: [],
  defaultCity: { LocalizedName: "Tel Aviv", Key: "215854" },
  removeFavorite: null,
  error: "",
};

export const defaultCity = (state = initialState.defaultCity) => state;

export const fiveDaysReducer = (
  state = initialState.forecast,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.FETCH_FIVEDAYS:
      return (state = payload);
    default:
      return state;
  }
};

export const currentReducer = (
  state = initialState.current,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.FETCH_CURRENT:
      return (state = payload);
    default:
      return state;
  }
};

export const inputReducer = (
  state = initialState.inputCityValue,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.INPUT:
      return (state = payload);
    default:
      return state;
  }
};

export const setLocationKey = (
  state = initialState.locationKey,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.FETCH_LOCATIONKEY:
      return (state = payload);
    default:
      return state;
  }
};

export const addFavorites = (
  state = initialState.favorites,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.ADD_FAVORITES:
      const newArray1 = Array.from(state);
      newArray1.splice(state.length - 1, 0, payload);
      return (state = newArray1);

    case ActionTypes.REMOVE_FAVORITES:
      const newArray = Array.from(state);
      const index = newArray.findIndex((favorite) => {
        return favorite.id === payload;
      });
      newArray.splice(index, 1);
      return (state = newArray);
    default:
      return state;
  }
};

export const setError = (state = initialState.error, { type, payload }) => {
  switch (type) {
    case ActionTypes.ERROR:
      return (state = payload);
    default:
      return state;
  }
};
