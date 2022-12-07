import './slider.css'
import img from "../../images/hero.JPG";
import img2 from "../../images/hero2.JPG";
import img3 from "../../images/hero3.JPG";
import { useEffect, useState } from 'react';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';

const Slider = () => {
    const data = [img, img2, img3];
    const [currentIndex, setCurrentIndex] = useState(0);
    // console.log(currentIndex)

    useEffect(() => {
        const timer = setTimeout(() => {
            let rnd = Math.floor(Math.random() * 3);
            while(rnd === currentIndex){
                rnd = Math.floor(Math.random() * 3);
            }           
            
            setCurrentIndex(rnd);
            
            // console.log(rnd);
            
        }, 4000);
        return () => clearTimeout(timer);
    }, [currentIndex])
  return (
    <div className='slider'>
        <div className="sliderContainer">
            <div className="images" style={{transform: `translateX(-${currentIndex*100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>

            
                {currentIndex === 0 && 
                    <div className="circles">
                    <CircleIcon onClick={() => setCurrentIndex(0)}/>
                    <CircleOutlinedIcon onClick={() => setCurrentIndex(1)}/>
                    <CircleOutlinedIcon onClick={() => setCurrentIndex(2)}/>
                    </div>
                    }
                {currentIndex === 1 && 
                    <div className="circles">
                        <CircleOutlinedIcon onClick={() => setCurrentIndex(0)}/>
                        <CircleIcon onClick={() => setCurrentIndex(1)}/>
                        <CircleOutlinedIcon onClick={() => setCurrentIndex(2)}/>
                    </div>
                    }
                {currentIndex === 2 && 
                    <div className="circles">
                        <CircleOutlinedIcon onClick={() => setCurrentIndex(0)}/>
                        <CircleOutlinedIcon onClick={() => setCurrentIndex(1)}/>
                        <CircleIcon onClick={() => setCurrentIndex(2)}/>
                    </div>
                    }
                
                
            
        
      </div>
    </div>
  )
}

export default Slider