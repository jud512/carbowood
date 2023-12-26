import "./products.css";

import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";
import Product from "../../components/product/Product";
import Categories from "../../components/categories/Categories";

import { dataProductsViolin, dataProductsCello } from "../../data/dataProducts";

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
        {
          dataProductsViolin.map((dp, i )=> <div className='product' key={i}>
        <div className="productContainer">
            <div className="productImgTop">
                <img src={dp.imgEgesz} alt={dp.name} />

            </div>
            <div className="productMiddle">
                <div className="productImg">
                    <img src={dp.imgCsucs} alt={dp.nameCsucs} />
                </div>
                <div className="productImg"><img src={dp.imgKapa} alt={dp.nameKapa} /></div>
            </div>
            <div className="productText">{dp.name}</div>

        </div>
    </div>)
        }

        <h1 id="viola" className="productsTitle">
          Brácsa vonók
        </h1>
        {/* <Product />
        <Product /> */}
        <h1 id="cello" className="productsTitle">
          Cselló vonók
        </h1>
        {
          dataProductsCello.map((dp, i )=> <div className='product' key={i}>
        <div className="productContainer">
            <div className="productImgTop">
                <img src={dp.imgEgesz} alt={dp.name} />

            </div>
            <div className="productMiddle">
                <div className="productImg">
                    <img src={dp.imgCsucs} alt={dp.nameCsucs} />
                </div>
                <div className="productImg"><img src={dp.imgKapa} alt={dp.nameKapa} /></div>
            </div>
            <div className="productText">{dp.name}</div>

        </div>
    </div>)
        }
      </div>
    </>
  );
};

export default Products;
