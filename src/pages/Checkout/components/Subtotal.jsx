import "./subtotal.css";
import { useAmazon } from "../../../store/globalStateHooks";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
const Subtotal = () => {
  const { basket, getTotalPrice } = useAmazon();
  const subTotal = getTotalPrice(basket);
  const itemsSelected = basket.length;
  const navigate = useNavigate();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <p>
            Subtotal : ({itemsSelected} selected): <strong>{value}</strong>
          </p>
        )}
        decimalScale={2}
        thousandSeparator
        prefix="$"
        displayType="text"
        value={subTotal}
      />
      <div className="subtotal__gift">
        <input type="radio" name="gift" />
        This Order Contains gift
      </div>
      <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
