function TopicsSelect({ setSearchParams }) {
  return (
    <>
      <label htmlFor="topics">Choose a topic:</label>
      <select
        name="topics"
        onChange={(event) => {
          setSearchParams(event.target.value);
        }}
      >
        <option value="Blank"></option>
        <option value="topic=cooking">Cooking</option>
        <option value="topic=coding">Coding</option>
        <option value="topic=football">Football</option>
      </select>
    </>
  );
}

export default TopicsSelect;
