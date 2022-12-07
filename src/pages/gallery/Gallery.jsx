import React, { useState } from 'react'
import Hero from "../../components/hero/Hero";
import Banner from "../../components/banner/Banner";
import './gallery.css'
import GalleryComponent from '../../components/gallery/GalleryComponent';
import { dataGallery } from '../../data/dataGallery';

const Gallery = () => {
  const [clickedImgId, setClickedImgId] = useState(null);
  const [openGallery, setOpenGallery] = useState(false);
 
  const handleClick = (id) => {
    setClickedImgId(id);
    setOpenGallery(true);
  }

  console.log(clickedImgId);
  return (
    <div className='gallery'>
        <Hero hero="otherHero">
            <Banner banner="bannerOther" title="Galéria"></Banner>
        </Hero>
        <div className="galleryContainer">
          {
          dataGallery.map((item) => (
            <div className="itemGallery" key={item.id} onClick={() => handleClick(item.id)}>
              <div className="itemImg">
                <img src={item.img} alt="" />
              </div>
              <div className="itemName">
                {item.name}
              </div>
            </div>
          ))}
        </div>
        {openGallery && <GalleryComponent dataGallery={dataGallery} setOpenGallery={setOpenGallery} clickedImgId={clickedImgId}/>} 
    </div>
  )
}

export default Gallery