function TopicsSelect({ setCurrentPage, setCurrentTopic }) {
  return (
    <div className="topics-select">
      <label htmlFor="topics">Topic:</label>
      <select
        name="topics"
        onChange={(event) => {
          setCurrentTopic(event.target.value);
          setCurrentPage(1);
        }}
      >
        <option value="">Select</option>
        <option value="cooking">Cooking</option>
        <option value="coding">Coding</option>
        <option value="football">Football</option>
      </select>
      <p>Default: All</p>
    </div>
  );
}

export default TopicsSelect;
