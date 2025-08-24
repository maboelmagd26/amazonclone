import starIcon from "../../../assets/icons/star.png";
import "./checkoutproduct.css";
import { useAmazon } from "../../../store/globalStateHooks";
const CheckoutProduct = ({ img, price, title, rating, id }) => {
  const { dispatch } = useAmazon();
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={img} />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <img src={starIcon} key={i} />
              </p>
            ))}
        </div>
        <button
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_BASKET", item: { id: id } })
          }
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
