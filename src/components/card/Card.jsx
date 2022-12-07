import { Link } from 'react-router-dom'
import './card.css'
import {HashLink} from 'react-router-hash-link';

const Card = ({item}) => {
  return (
    <div className='card' >
        <div className="image">
            <img src={item.img} alt="" />
            <div className="layer">
                {item.url && <Link to={item.url}>
                    <button>{item.title}</button>
                </Link>}

                {
                  item.refr && <HashLink to={item.refr}><button>{item.title}</button></HashLink>
                }
                
            </div>
        </div>
    </div>
  )
}

export default Card