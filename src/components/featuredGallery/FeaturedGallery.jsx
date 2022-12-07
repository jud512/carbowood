import './featuredGallery.css'
import { dataFeaturedGallery } from '../../data/dataFeaturedGallery';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import { Link } from 'react-router-dom';

const FeaturedGallery = () => {
  return (
    <div className='featuredGallery'>
        <div className="featuredGalleryContainer">
            <div className="col">
                <div className="row"><img src={dataFeaturedGallery[0].img} alt="" /> </div>
                <div className="row"><img src={dataFeaturedGallery[1].img} alt="" /></div>
            </div>
            <div className="col">
                <div className="row"><img src={dataFeaturedGallery[2].img} alt="" /></div>
            </div>
            <div className="col col-l">
                <div className="row row-2">
                    <div className="col">
                        <div className="row"><img src={dataFeaturedGallery[3].img} alt="" /></div>
                    </div>
                    <div className="col">
                        <div className="row"><img src={dataFeaturedGallery[4].img} alt="" /></div>
                    </div>
                </div>
                <div className="row"><img src={dataFeaturedGallery[5].img} alt="" /></div>
            </div>
        </div>
        <div className='featGalleryBtn'>
            <Link to="/gallery" style={{textDecoration:'none'}}>
                <button >
                    <CollectionsOutlinedIcon fontSize='30px'/>
                    <span>Galéria</span> 
                </button>
            </Link>
            
        </div>
        
        
    </div>
  )
}

export default FeaturedGallery