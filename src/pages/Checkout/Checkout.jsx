import React from "react";
import { useAmazon } from "../../store/globalStateHooks";
import checkoutImg from "../../assets/ui/checkoutAd.jpg";
import CheckoutProduct from "./components/CheckoutProduct";
import "./checkout.css";
import Subtotal from "./components/SubTotal";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const navigate = useNavigate();
  const { user, basket } = useAmazon();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" src={checkoutImg} />
        <div>
          <h1>Hello, {user?.email}</h1>
          <h2 className="checkout-title">Your shopping Basket</h2>
          {basket.length > 0 ? (
            basket.map((item, index) => (
              <CheckoutProduct {...item} key={index} />
            ))
          ) : (
            <>
              <p>
                You have no items in your basket.To buy one or more items,click
                below to shop
              </p>
              <button
                onClick={() => navigate("/")}
                style={{ backgroundColor: "#f0c14b" }}
              >
                back to store
              </button>
            </>
          )}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
