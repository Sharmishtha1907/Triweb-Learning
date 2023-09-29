import ProductItemStyle from "./ProductItem.module.css";

function ProductItem(props) {
  return (
    <div >
      <li key={props.item.id}><img src={props.item.image} alt="No Img" height="400px" width="400px"/>
        <div className={ProductItemStyle.items}>
            <h2>{props.item.product_name}</h2>
            <p>{props.item.description}</p>
            <h4>
                {props.item.price}
            </h4>
            <button className=""> Buy Now</button> <button className="">Add To Cart</button>
        </div>
        </li>
        <br/>
      
    </div>
  );
}

export default ProductItem;
