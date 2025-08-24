import homeImg from "../../assets/ui/home.jpg";
import { productsData } from "../../data/data";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  const [p1, p2, p3, p4, p5, p6] = productsData;
  return (
    <div>
      <div className="home">
        <div className="home-container">
          <img
            src={homeImg}
            className="home-image"
            alt="Home background"
            // role="presentation"
          />
          <div className="home-row">
            <Product {...p1} key={p1.id} />
            <Product {...p2} key={p2.id} />
          </div>
          <div className="home-row">
            <Product {...p3} key={p3.id} />
            <Product {...p4} key={p4.id} />
            <Product {...p5} key={p5.id} />
          </div>
          <div className="home-row">
            <Product {...p6} key={p6.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
