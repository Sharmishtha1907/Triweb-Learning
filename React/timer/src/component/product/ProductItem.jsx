import ProductItemStyle from "./ProductItem.module.css";
import Wrapper from "../layouts/Wrapper";

function ProductItem(props) {
  return (
    <li key={props.item.id}>
      <Wrapper>
        <div className={ProductItemStyle.items}>
          <img src={props.item.image} alt="No Img" />
          <h2>{props.item.product_name}</h2>
          <p>{props.item.description}</p>
          <h4>{props.item.price}</h4>
          <button className=""> Buy Now</button>{" "}
          <button className="">Add To Cart</button>
        </div>
      </Wrapper>
      <br />
    </li>
  );
}

export default ProductItem;
