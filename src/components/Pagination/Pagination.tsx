import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
  pageCount: number;
  page: number; // Исправлено: page вместо currentPage
  onPageChange: (page: number) => void; // Принимает просто число
}

export default function Pagination({
  pageCount,
  page,
  onPageChange,
}: PaginationProps) {
  if (pageCount <= 1) return null;

  const handlePageChange = ({ selected }: { selected: number }) => {
    onPageChange(selected + 1); // ReactPaginate использует индексацию с 0
  };

  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={handlePageChange}
      forcePage={page - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
      disabledClassName={css.disabled}
      breakClassName={css.break}
      pageLinkClassName={css.pageLink}
      previousLinkClassName={css.prevLink}
      nextLinkClassName={css.nextLink}
    />
  );
}
