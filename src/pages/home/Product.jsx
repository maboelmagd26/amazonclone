import starIcon from "../../assets/icons/star.png";
import "./product.css";
import { useAmazon } from "../../store/globalStateHooks";
const Product = ({ title, img, price, rating, id }) => {
  const { basket, addToBasket } = useAmazon();
  console.log(basket);
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>
              <img src={starIcon} />
            </p>
          ))}
      </div>
      <img src={img} alt="product-img" />
      <button onClick={() => addToBasket({ id, title, img, price, rating })}>
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
