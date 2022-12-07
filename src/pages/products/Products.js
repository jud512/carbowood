import "./products.css";

import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";
import Product from "../../components/product/Product";
import Categories from "../../components/categories/Categories";

const Products = () => {
  return (
    <>
      <Hero hero="otherHero">
        <Banner banner="bannerOther" title="Termékek"></Banner>
      </Hero>
      <Categories />
      <div className="productsContainer">
        <h1 id="violin" className="productsTitle">
          Hegedű vonók
        </h1>
        <Product />
        <Product />
        <Product />
        <Product />
        <h1 id="viola" className="productsTitle">
          Brácsa vonók
        </h1>
        <Product />
        <Product />
        <h1 id="cello" className="productsTitle">
          Cselló vonók
        </h1>
        <Product />
      </div>
    </>
  );
};

export default Products;
