import Card from '../card/Card'
import './featured.css'
import { dataFeatured } from '../../data/dataFeatured.js'


const Featured = () => {
    

  return (
    <div className='featured' id='featured'>
        {
            dataFeatured.map((item) => (
                <Card key={item.id} item={item}/>
            ))
        }
    </div>
  )
}

export default Featured