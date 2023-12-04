type PaginationPropsType = {
  totalPages: number;
  currentPage: number;
  onPageChange: (e: number) => void;
  nextPage: () => void;
  backPage: () => void;
};
// ... (resto del código del componente Pagination)

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
  nextPage,
  backPage,
}: PaginationPropsType) => {
  const renderPageButtons = () => {
    const buttons = [];
    let startPage = 1;

    // Calcula la página inicial para mostrar
    if (currentPage > 10) {
      startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
    }

    // Calcula la página final para mostrar
    let endPage = Math.min(startPage + 9, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <input
          key={i}
          className={`join-item btn btn-square ${currentPage === i ? "checked" : ""
            }`}
          type="radio"
          name="options"
          aria-label={i.toString()}
          checked={currentPage === i}
          onChange={() => onPageChange(i)}
        />
      );
    }

    return buttons;
  };

  return (
    <div className="flex sapce-x-10">
      <button className="join-item btn  w-16" onClick={backPage}>
        {"<"}
      </button>
      <div className="join">{renderPageButtons()}</div>
      <button className="join-item btn w-16" onClick={nextPage}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;

