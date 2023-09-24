import { configureStore } from "@reduxjs/toolkit";
import potentialCountriesReducer from "../redux/potentialCountriesSlice";
import displayedCountryReducer from "../redux/displayCountrySlice";

export default configureStore({
    reducer: {
        potentialCountries: potentialCountriesReducer,
        displayedCountry: displayedCountryReducer,
    },
});