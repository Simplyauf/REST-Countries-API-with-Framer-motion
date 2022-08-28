export function sortCountryArrFn(countryArr) {
	let sortedCountriesData = [...countryArr].sort((a, b) => {
		if (a.name.common < b.name.common) {
			return -1;
		}
		if (b.name.common > a.name.common) {
			return 1;
		}
		return 0;
	});
	return sortedCountriesData;
}
