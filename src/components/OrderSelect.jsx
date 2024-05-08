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
        <option value="">Select</option>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
      <p>Default: Desc</p>
    </div>
  );
}

export default OrderSelect;
