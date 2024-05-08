function TopicsSelect({ setCurrentPage, setCurrentTopic }) {
  return (
    <div className="topics-select">
      <label htmlFor="topics">Choose a topic:</label>
      <select
        name="topics"
        onChange={(event) => {
          setCurrentTopic(event.target.value);
          setCurrentPage(1);
        }}
      >
        <option value="Blank"></option>
        <option value="cooking">Cooking</option>
        <option value="coding">Coding</option>
        <option value="football">Football</option>
      </select>
    </div>
  );
}

export default TopicsSelect;
