import { sortCountryArrFn } from "./sortCountryDataArr";
import { setCountriesDataPerPage, setCountriesDataRequested } from "../features/fetchCountryApiSlice";

export const handlePaginationFn = (dispatch, countriesDataRequested, countriesPerPage, currentPageNo) => {
  const indexOfLastPage = countriesPerPage * currentPageNo;
  const indexOfPrevPage = indexOfLastPage - countriesPerPage;
  let currentCountriesData = sortCountryArrFn(countriesDataRequested).slice(indexOfPrevPage, indexOfLastPage);
  dispatch(setCountriesDataRequested(countriesDataRequested));
  dispatch(setCountriesDataPerPage(currentCountriesData));
};
