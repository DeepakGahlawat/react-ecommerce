import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../product/Product";
import styles from "./home.module.css"; // Import the CSS module

const Home = ({ login }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState(""); // New state for minimum price
  const [maxPrice, setMaxPrice] = useState(""); // New state for maximum price
  const navigate = useNavigate();

  useEffect(() => {
    if (!login) navigate("/");
  }, [login, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };
  //   const handleAddToCart = (product) => {
  //     setCart((prevCart) => [...prevCart, product]);
  //   };

  const filteredProducts = products.filter((product) => {
    const titleMatches = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const withinPriceRange =
      (!minPrice || parseFloat(product.price) >= parseFloat(minPrice)) &&
      (!maxPrice || parseFloat(product.price) <= parseFloat(maxPrice));
    return titleMatches && withinPriceRange;
  });

  return (
    <div className={styles.container}>
      <h2>Products</h2>

      <div className={styles.form}>
        <label className={styles.label} htmlFor="search">
          Search:
        </label>
        <input
          className={styles.input}
          type="text"
          id="search"
          value={searchQuery}
          onChange={handleSearchChange}
        />

        <label className={styles.label} htmlFor="minPrice">
          Min Price:
        </label>
        <input
          className={styles.input}
          type="text"
          id="minPrice"
          value={minPrice}
          onChange={handleMinPriceChange}
        />

        <label className={styles.label} htmlFor="maxPrice">
          Max Price:
        </label>
        <input
          className={styles.input}
          type="text"
          id="maxPrice"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
      </div>

      <ul className={styles.productList}>
        {filteredProducts.map((product) => (
          <li key={product.id} className={styles.li}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
