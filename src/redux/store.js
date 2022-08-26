import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import loginReducer from "./login";
import recruiterReducer from "./recruiters";
import countryReducer from "./getCountries";
import areaReducer from "./getAreas";
import searchReducer from "./search";
import assignedSearchReducer from "./assignedSearch";
import contSlice from "./contSlice";
import activeSearchesReducer from "./modifyActiveSearches";
import staticReducer from "./stadistics";
import assignRecruiterReducer from "./assignRecruiter";
import staticTableReducer from "./stadisticsTable";
import modifyRatingReducer from "./modifyRecruiterRating";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  login: loginReducer,
  recruiters: recruiterReducer,
  country: countryReducer,
  area: areaReducer,
  search: searchReducer,
  assigned: assignedSearchReducer,
  assignRecuiter: assignRecruiterReducer,
  activeSearches: activeSearchesReducer,
  stadistics: staticReducer,
  stadisticsTable: staticTableReducer,
  rating: modifyRatingReducer,
  cont: contSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  middleware: [thunk],
  reducer: persistedReducer,
});

export default store;
