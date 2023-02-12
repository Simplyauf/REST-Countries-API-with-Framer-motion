import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCountriesData } from "../features/fetchCountryApiSlice";
import { Loading } from "./Loading";
import { BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";

export const DetailsOfSingleCountry = () => {
  const { countriesData, isLoading } = useSelector((state) => state.fetchCountriesData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountriesData());
  }, []);

  const navigate = useNavigate();
  const { countryAbbr } = useParams();

  let selectedCountry =
    countriesData.length > 0 &&
    countriesData.find((countryData) => {
      return countryData.cca3 === countryAbbr;
    });

  if (isLoading) {
    return <Loading />;
  } else {
    const { name, population, region, flags, capital, currencies, languages, subregion, tld, } =
      selectedCountry;
    const { nativeName } = name;
    return (
      <>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth }}
          transition={{ type: "spring", stiffness: 100 }}
          className="py-12 text-[16px] tablet:text-[17px] overflow-hidden tracking-[1.5%] "
        >
          <motion.button
            transition={{ duration: 0.3, ease: "linear" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="btn-link w-[110px]  ml-[7%] tablet:ml-[12%]  flex items-center justify-center"
            onClick={() => navigate(-1)}
          >
            <BsArrowLeft />
            <span className="ml-2">Back</span>
          </motion.button>
          <section className="mt-20 w-[100%] lg:flex lg:flex-row gap-[5%] lg:mx-[5%] lg:w-[90%]">
            <motion.img
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="h-[240px] md:h-[320px] md:w-[60%] tablet:w-[75%] mx-auto  tablet:mx-auto tablet:h-[280px] w-[88%] lg:w-[40%] "
              src={flags.png}
              alt={name.common}
            />
            <div className="mt-12 ml-[6%] tablet:ml-[12%] md:ml-[20%] lg:ml-0">
              <h2 className="font-extrabold font-sans leading-[24px] text-[28px]">{name.common}</h2>
              <article className="mt-8 lg:mb-8 lg:flex lg:gap-8">
                <ul className="flex flex-col gap-4 lg:gap-2">
                  <li>
                    <span className="font-semibold">Native Name:</span>
                    <span className="ml-[3px]">
                      {nativeName[Object.keys(nativeName)[Object.keys(nativeName).length - 1]].common}
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">Population:</span>
                    <span className="ml-[3px]">{population.toLocaleString()}</span>
                  </li>
                  <li>
                    <span className="font-semibold">Region:</span>
                    <span className="ml-[3px]">{region}</span>
                  </li>
                  <li>
                    <span className="font-semibold">Sub-region:</span>
                    <span className="ml-[3px]">{subregion}</span>
                  </li>
                  <li>
                    <span className="font-semibold">Capital:</span>
                    <span className="ml-[3px]">{capital[0]}</span>
                  </li>
                </ul>
                <ul className="flex flex-col gap-4 my-12 lg:my-0 lg:gap-2">
                  <li>
                    <span className="font-semibold">Top Level Domain:</span>
                    <span className="ml-[3px]">{tld[0]}</span>
                  </li>
                  <li>
                    <span className="font-semibold">Currencies:</span>
                    <span className="ml-[3px]">{currencies[Object.keys(currencies)[0]].name}</span>
                  </li>
                  <li>
                    <span className="font-semibold">Languages:</span>
                    <span className="ml-[3px]">{languages[Object.keys(languages)[0]]}</span>
                  </li>
                </ul>
              </article>
              <div className="flex-col flex gap-6 lg:flex-row">
                <h2 className="font-semibold text-lg lg:basis-[40%]">Border Countries:</h2>
                <ul className="flex gap-4 items-center flex-wrap pr-6">
                  {selectedCountry?.borders && selectedCountry.borders.map((borderCountry, index) => {
                    let borderCountryName = countriesData.find((countryData) => {
                      return countryData.cca3 === borderCountry;
                    });
                    const { nativeName } = borderCountryName.name;
                    return (
                      <motion.button
                        key={index}
                        className="btn-link flex justify-center items-center md:basis-[18%] basis-[26%] lg:basis-[30%]"
                        transition={{ duration: 0.3, ease: "linear" }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Link className="h-[100%] w-[100%]" to={`/countries/${borderCountry}`}>
                          {nativeName[Object.keys(nativeName)[Object.keys(nativeName).length - 1]].common}
                        </Link>
                      </motion.button>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>
        </motion.div>
      </>
    );
  }
};
