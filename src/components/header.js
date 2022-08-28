import "../index.css";
import { useState, useEffect } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { BsSunFill } from "react-icons/bs";
import { ThemeToggleCheck } from "../utils/themeTogglerFn";
import { ThemeTogglerSwitch } from "../utils/themeTogglerFn";

const Header = () => {
	const [isDarkThemeOn, setIsDarkThemeOn] = useState(false);

	useEffect(() => {
		ThemeToggleCheck([isDarkThemeOn, setIsDarkThemeOn]);
	}, [isDarkThemeOn]);

	return (
		<div className="bg-mainElementColor font-sans dark:bg-mainElementColor2 flex justify-between tablet:px-[8%] px-[5%] laptop:px-[5%] h-24 items-center  shadow-[1px_2px_6px_0px_rgba(0,0,0,0.1)]">
			<h2 className="font-extrabold laptop:text-[22px] text-[18px] md:text-[21px] tablet:text-[20px]">Where in the world?</h2>
			<div
				className="flex cursor-pointer  gap-3 items-center"
				onClick={() => {
					ThemeTogglerSwitch([isDarkThemeOn, setIsDarkThemeOn]);
				}}
			>
				{isDarkThemeOn ? <BsSunFill className=" dark:stroke-mainTextColor2 dark:fill-mainTextColor2" /> : <IoMoonOutline className="" />}
				<span className="font-semibold text-[17px] laptop:text-[19px] md:text-[18px]">Dark Mode</span>
			</div>
		</div>
	);
};

export default Header;
