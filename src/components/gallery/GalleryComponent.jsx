import './galleryComponent.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { useState } from 'react';

const GalleryComponent = ({dataGallery, setOpenGallery, clickedImgId}) => {

  const clickedImgIdx = clickedImgId - 1;
  const handleClose = () => {
    setOpenGallery(false);
  }

  const [currentIdx, setCurrentIdx] = useState(clickedImgIdx);

  const handleLeft = () => {
    const length = dataGallery.length;
    currentIdx === 0 ? setCurrentIdx(length-1) : setCurrentIdx(currentIdx - 1);
  }

  const handleRight = () => {
    const length = dataGallery.length;
    currentIdx === length - 1 ? setCurrentIdx(0) : setCurrentIdx(currentIdx + 1) ;
  }
  console.log('GALLERY ELEMENT',dataGallery[currentIdx])

  return (
    <div className="galleryOverlay">
      <div className='galleryComponent'>
        <div className="galleryComponentContainer">
          <div className="closeBtn" onClick={handleClose}>
            <CloseRoundedIcon />
          </div>
          <div className="galleryMain">
            <div className="leftBtn" onClick={handleLeft}>
              <KeyboardArrowLeftRoundedIcon />
            </div>
            <div className="galleryImg">
              <img src={dataGallery[currentIdx].img} alt="" />
            </div>
            <div className="rightBtn" onClick={handleRight}>
              <KeyboardArrowRightRoundedIcon/>
            </div>
          </div>

          <div className="galleryTitle">
            <p>
              {dataGallery[currentIdx].name}
            </p>

          </div>
        </div>

      </div>
    </div>

  )
}

export default GalleryComponent
