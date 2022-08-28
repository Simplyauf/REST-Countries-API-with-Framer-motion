import { setLoadingOrErrorMessage, setIsSearchFound } from "../features/fetchCountryApiSlice";
import { handlePaginationFn } from "./handlePaginationFn";

export const handleSearchCountry = (e, dispatch, currentRegionData, countriesPerPage, currentPageNo) => {
  let searchInput = e.currentTarget.value.toUpperCase().trim();
  const searchedCountriesData = currentRegionData.filter((countryData) => {
    return (
      countryData.name.common.toUpperCase().trim().includes(searchInput) ||
      countryData.name.official.toUpperCase().trim().includes(searchInput)
    );
  });
  console.log(searchInput);
  if (searchInput.length === 0 || searchedCountriesData.length === 0) {
    dispatch(setIsSearchFound(Boolean(false)));
    dispatch(setLoadingOrErrorMessage("Country not found"));
  } else {
    dispatch(setIsSearchFound(Boolean(true)));
    handlePaginationFn(dispatch, searchedCountriesData, countriesPerPage, currentPageNo);
  }
};
