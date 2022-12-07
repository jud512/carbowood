import React from 'react'
import './categories.css'
import { dataCategories } from '../../data/dataCategories'
import Card from '../card/Card'

const Categories = () => {
  return (
    <div className='categories'>
        {
            dataCategories.map((item) => (
                <Card key={item.id} item={item}/>
            ))
        }
    </div>
  )
}

export default Categories