import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";
import { handlePaginationFn } from "../utils/handlePaginationFn";
import { setIsSearchFound } from "../features/fetchCountryApiSlice";
import { setCurrentRegionContainerHeader } from "../features/regionFilterSplice";

export const CountriesNotFoundMessage = ({ dispatch, countriesData, countriesPerPage, currentPageNo }) => {
  return (
    <motion.button
      transition={{ duration: 0.3, ease: "linear" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
       className="btn-link w-[130px] text-[18px] lg:text-[20px] flex items-center justify-center"
      onClick={(e) => {
        handlePaginationFn(dispatch, countriesData, countriesPerPage, currentPageNo);
        dispatch(setIsSearchFound(Boolean(true)));
        dispatch(setCurrentRegionContainerHeader("Filter by Region"));
      }}
    >
      <BsArrowLeft />
      <span  className="ml-2">Back</span>
    </motion.button>
  );
};
