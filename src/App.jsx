import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Orders from "./pages/orders/Orders";
import Checkout from "./pages/Checkout/Checkout";
import Payment from "./pages/payment/Payment";

import { useAmazon } from "./store/globalStateHooks";
import { auth } from "./baas/firebase";
import { useEffect } from "react";
function App() {
  const { dispatch } = useAmazon();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });

    // cleanup
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Checkout />} path="/checkout" />
          <Route element={<Orders />} path="/orders" />
          <Route element={<Payment />} path="/payment" />
          <Route element={<h1>This page doesn't exist</h1>} path="*" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
