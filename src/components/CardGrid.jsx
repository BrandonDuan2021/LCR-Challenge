import React from 'react'
import { cardData } from '../utils/cardData'
import CardItem from './CardItem'
import '../styles/cardGrid.scss';


// Map each card data inside the CardGrid as an CardItem component
export default function CardGrid() {
    return (
        <div className='card-grid'>
            {
              cardData.map((card, i)=>(
                    <CardItem card={card} key={i}/>
              ))
            }
        </div>
    )
}
