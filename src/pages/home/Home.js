import React from "react";
import Banner from "../../components/banner/Banner";
import Hero from "../../components/hero/Hero";
import { Link } from "react-router-dom";
import Featured from "../../components/featured/Featured";
import FeaturedGallery from "../../components/featuredGallery/FeaturedGallery";
import "./home.css";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";

const Home = () => {
  return (
    <div className="home">
      <Hero>
        <Banner
          title="Mi az a Carbowood?"
          subtitle="Tudj meg róla többet!"
          banner="banner"
        >
          {/* <Link to="/carbowood" className="btn-primary">
            tovább
          </Link> */}
          <a href="#featured" className="btn-primary">
            Tovább
          </a>
        </Banner>
      </Hero>
      <Featured />
      <div className="recommendation">
        <span>
          <KeyboardDoubleArrowDownOutlinedIcon fontSize="20px" />
          További képekért nézz szét a galériában!
          <KeyboardDoubleArrowDownOutlinedIcon fontSize="20px" />
        </span>
      </div>
      <FeaturedGallery />
    </div>
  );
};

export default Home;
