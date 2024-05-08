function OrderSelect({ setCurrentPage, setCurrentOrder }) {
  return (
    <div className="order-select">
      <label htmlFor="order">Order by:</label>
      <select
        name="order"
        onChange={(event) => {
          setCurrentOrder(event.target.value);
          setCurrentPage(1);
        }}
      >
        <option value="Blank">Default</option>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </div>
  );
}

export default OrderSelect;
