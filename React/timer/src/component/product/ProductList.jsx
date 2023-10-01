import ProductItem from "./ProductItem";

function ProductList(props) {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {props.products.map((item) => {
          return <ProductItem item={item} />;
        })}
      </ul>
    </div>
  );
}

export default ProductList;
