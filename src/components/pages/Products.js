import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/p1">book</Link>
        </li>
        <li>
          <Link to="/products/p2">iPhone</Link>
        </li>
        <li>
          <Link to="/products/p3">Macbook</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
