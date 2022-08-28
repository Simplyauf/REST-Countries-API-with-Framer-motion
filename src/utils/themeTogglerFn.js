export const ThemeToggleCheck = (state) => {
	const [isDarkThemeOn, setIsDarkThemeOn] = state;
	const userPrevTheme = localStorage.getItem("theme");
	const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;
	if (userPrevTheme === "dark" || (!userPrevTheme && systemTheme)) {
		document.documentElement.classList.add("dark");
		setIsDarkThemeOn(true);
	} else {
		document.documentElement.classList.remove("dark");
	}
};

export const ThemeTogglerSwitch = (state) => {
	const [isDarkThemeOn, setIsDarkThemeOn] = state;

	setIsDarkThemeOn(!isDarkThemeOn);

	if (!isDarkThemeOn) {
		document.documentElement.classList.add("dark");
		localStorage.setItem("theme", "dark");
	} else {
		document.documentElement.classList.remove("dark");
		localStorage.setItem("theme", "light");
	}
};
