import "../index.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentRegionData } from "../features/regionFilterSplice";
import { handleFilterRegionClick } from "../utils/handleFilterRegionClickFn";
import { handleSearchCountry } from "../utils/handleSearchCountryFn";

const InputAndFilter = ({ countriesPerPage, currentPageNo, setCurrentPageNo }) => {
  const { fetchCountriesData, regionFilterInfo } = useSelector((state) => state);
  const { countriesData } = fetchCountriesData;
  const { currentRegionData, currentRegionContainerHeader } = regionFilterInfo;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentRegionData(countriesData));
  }, [dispatch, countriesData]);

  return (
    <div className="mt-10  flex  flex-col md:flex-row md:justify-between md:items-start  tablet:px-[8%] px-[5%] md:px-[7%] laptop:px-[5%] w-[100%]">
      <div className="w-[100%] md:w-[45%] lg:w-[40%]  laptop:w-[35%]  dark:bg-mainElementColor2  h-14 relative rounded-md shadow-[1px_3px_25px_-2px_rgba(0,0,0,0.1)]">
        <input
          className="w-[100%] h-[100%] dark:bg-mainElementColor2 text pl-20 rounded-md"
          type="search"
          name=""
          placeholder="Search for a country..."
          onChange={(e) => handleSearchCountry(e, dispatch, currentRegionData, countriesPerPage, currentPageNo)}
        />
        <AiOutlineSearch className="absolute text-[18px] fill-inputColor  w-6 h-6  top-4 left-8" />
      </div>
      <article className="w-[65%] tablet:w-[40%] md:w-[30%]  laptop:w-[17%] lg:w-[22%] md:mt-0 mt-10 mb-12 flex-col flex gap-2">
        <div
          className="flex dark:bg-mainElementColor2 bg-mainElementColor justify-between h-14 rounded-md shadow-[0.5px_2px_32px_-2px_rgba(0,0,0,0.1)] items-center px-[10%] cursor-pointer"
          onClick={(e) => {
            e.currentTarget.nextElementSibling.classNameList.toggle("active-region-container");
          }}
        >
          <h2>{currentRegionContainerHeader}</h2>
          <RiArrowDropDownLine className="w-8 h-8 " />
        </div>
        <div
          className=" hidden flex-col rounded-md shadow-[0px_2px_32px_-2px_rgba(0,0,0,0.1)] bg-mainElementColor dark:bg-mainElementColor2  py-4  gap-4 z-50 px-[10%] sticky top-0 left-0 right-0 -mb-64  region-lists"
          onClick={(e) =>
            handleFilterRegionClick(e, dispatch, countriesData, countriesPerPage, currentPageNo, setCurrentPageNo)
          }
        >
          <li>All</li>
          <li data-id="Africa">Africa</li>
          <li data-id="Americas">America</li>
          <li data-id="Asia">Asia</li>
          <li data-id="Europe">Europe</li>
          <li data-id="Oceania">Oceania</li>
        </div>
      </article>
    </div>
  );
};

export default InputAndFilter;
