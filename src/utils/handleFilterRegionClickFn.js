import { setCurrentRegionData, setCurrentRegionContainerHeader } from "../features/regionFilterSplice";
import { sortCountryArrFn } from "./sortCountryDataArr";
import { handlePaginationFn } from "./handlePaginationFn";


export const handleFilterRegionClick = (
  e,
  dispatch,
  countriesData,
  countriesPerPage,
  currentPageNo,
  setCurrentPageNo,
) => {
  e.currentTarget.classList.remove("active-region-container");

  if (e.target.dataset.id) {
    const filteredRegion = countriesData.filter((countryData) => {
      return countryData.region === e.target.dataset.id;
    });
    dispatch(setCurrentRegionContainerHeader(e.target.textContent))
    console.log(filteredRegion);
    setCurrentPageNo(1);
    dispatch(setCurrentRegionData(filteredRegion))
    handlePaginationFn(dispatch, filteredRegion, countriesPerPage, currentPageNo);
  } else {
    dispatch(setCurrentRegionContainerHeader("Filter by region"))
    dispatch(setCurrentRegionData(countriesData))
    handlePaginationFn(dispatch, countriesData, countriesPerPage, currentPageNo);
  }
};
