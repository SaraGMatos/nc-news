function SortBySelect({ setCurrentPage, setCurrentSortBy }) {
  return (
    <div className="sort-by-select">
      <label htmlFor="sort-bys">Sort by:</label>
      <select
        name="sort-bys"
        onChange={(event) => {
          setCurrentSortBy(event.target.value);
          setCurrentPage(1);
        }}
      >
        <option value="">Select</option>
        <option value="created_at">Date</option>
        <option value="comment_count">Comment count</option>
        <option value="votes">Vote count</option>
      </select>
      <p>Default: Date</p>
    </div>
  );
}

export default SortBySelect;
