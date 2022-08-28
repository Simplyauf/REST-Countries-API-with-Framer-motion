import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {
  getCountriesData,
  setIsLoading,
  setCountriesDataRequested,
} from "../features/fetchCountryApiSlice";
import { handlePaginationFn } from "../utils/handlePaginationFn";
import { PaginationContainer } from "./pagination";
import { Loading } from "./Loading";
import { CountriesNotFoundMessage } from "./countriesNotFoundMessage";
import InputAndFilter from "./InputAndFilter";
import { SingleCountryBox } from "./singleCountryBox";

const HomePageContent = () => {
  const dispatch = useDispatch();
  const {
    countriesData,
    isLoading,
    countriesDataRequested,
    isSearchFound,
    lengthOfRequestedData,
    countriesDataPerPage,
  } = useSelector((state) => state.fetchCountriesData);

  useEffect(() => {
    dispatch(getCountriesData());
  }, [dispatch]);


  useEffect(() => {
    dispatch(setCountriesDataRequested(countriesData));
  }, [dispatch,countriesData]);

  const [currentPageNo, setCurrentPageNo] = useState(1);
  const countriesPerPage = 10;

  useEffect(() => {
    handlePaginationFn(dispatch, countriesDataRequested, countriesPerPage, currentPageNo);
  }, [dispatch, countriesDataRequested, countriesPerPage, currentPageNo]);

  const handleChangePageNo = async (pageNo) => {
    await dispatch(setIsLoading);
    await setCurrentPageNo(pageNo);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <InputAndFilter {...{ countriesPerPage, currentPageNo, setCurrentPageNo }} />
          {isSearchFound ? (
            <>
              <motion.div
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                exit={{ x: "100vw", transition: { delay: 0.3 } }}
                transition={{ type: "spring", stiffness: 100 }}
                className="grid md:w-[86%] md:grid-cols-2 lg:grid-cols-3 laptop:grid-cols-4 laptop:w-[90%] md:gap-8 gap-16 mx-auto tablet:w-[55%]  w-[70%] text-black"
              >
                {countriesData.length > 0 &&
                  countriesDataPerPage.map((countryData) => {
                    return <SingleCountryBox key={countryData.cca3} countryData={countryData} />;
                  })}
              </motion.div>
              <PaginationContainer
                {...{
                  countriesPerPage,
                  currentPageNo,
                  countriesDataRequested,
                  handleChangePageNo,
                  lengthOfRequestedData,
                }}
              />
            </>
          ) : (
            <Loading>
              <CountriesNotFoundMessage {...{ dispatch, countriesData, countriesPerPage, currentPageNo }} />
            </Loading>
          )}
        </>
      )}
    </>
  );
};

export default HomePageContent;
