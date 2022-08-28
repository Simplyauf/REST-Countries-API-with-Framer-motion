export const PaginationContainer = ({
  countriesPerPage,
  currentPageNo,
  countriesDataRequested,
  handleChangePageNo,
}) => {
  // making lists of the page numbers through division of the requested data
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(countriesDataRequested.length / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="grid grid-cols-5 tablet:grid-cols-5 md:grid-cols-10 mx-[10%] my-20 md:mx-[12%] lg:mx-[15%] gap-4 lg:gap-6">
      {pageNumbers.map((number,index) => {
        return (
          <li key={index}
            className={`pagination-lists ${currentPageNo === number ? "active-pagination-lists" : ""} `}
            data-id={number}
            onClick={() => handleChangePageNo(number)}
          >
            {number}
          </li>
        );
      })}
    </div>
  );
};
