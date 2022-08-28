import "../index.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

export const SingleCountryBox = ({ countryData }) => {
	const { name, population, capital, region, flags, cca3 } = countryData;

	// ANIMATION WITH FRAMER MOTION AND REACT-INTERSECTION OBSERVER
	const { ref, inView } = useInView();
	const control = useAnimation();
	const visibleVariant = {
		visible: {
			transition: { duration: 0.3 },
			opacity: 1,
		},
		hidden: {
			opacity: 0,
		},
		exit: {
			opacity: 0,
			
		}
	};

	useEffect(() => {
		if (inView) {
			control.start("visible");
		} else {
			control.start("hidden");
		}
	}, [control, inView]);

	return (
		<motion.article initial="hidden" animate={control} variants={visibleVariant} ref={ref} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className="w-[100%] rounded-md bg-mainElementColor  text-mainTextColor  dark:text-mainTextColor2  dark:bg-mainElementColor2 shadow-[0_8px_30px_rgb(0,0,0,0.05)] pb-12">
			<Link to={`/countries/${cca3}`}>
				<img className="w-[100%] h-[170px] rounded-t-md object-cover" src={flags.png} alt={name.common} />
				<div className="flex flex-col gap-2 pl-[8%]">
					<h2 className="font-extrabold text-xl my-4">{name.common}</h2>
					<li>
						<span className="font-semibold">Population:</span> <span>{population.toLocaleString()}</span>
					</li>
					<li>
						<span className="font-semibold">Region:</span> <span>{region}</span>
					</li>
					<li>
						<span className="font-semibold">Capital:</span> <span>{capital}</span>
					</li>
				</div>
			</Link>
		</motion.article>
	);
};
