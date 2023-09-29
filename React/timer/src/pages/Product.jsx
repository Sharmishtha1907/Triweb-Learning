import ProductList from "../component/product/ProductList";
import city from "../assets/city.jpeg";
import forest from "../assets/forest.jpeg"

function Product() {
  let products = [
    {
      id: "p1",
      product_name: "City Tour",
      image:  [city],
      description: "Its a good tour",
      price: "20000",
    },
    {
      id: "p2",
      product_name: "Forest Tour",
      image:[forest],
      description: "Its a treck tour",
      price: "50000",
    },
  ];
  return (
    <div>
      {/* {{products.map((item)=>{
        return <li key={item.id}>{item.product_name}</li>;
      })}} */}
      <ProductList products={products}/>
    </div>
  );
}

export default Product;
