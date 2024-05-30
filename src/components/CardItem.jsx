import React, { useContext } from 'react'
import { CardContext } from '../App'
import '../styles/cardItem.scss';

export default function CardItem(props) {
  const { card } = props

  // Consume global useState saved in useContext
  const { currentCard, setCurrentCard } = useContext(CardContext)

  // If card is selected, add selected to classList for styling purposes
  var ClassList = 'card'
  if (currentCard === card) {
    ClassList+=' selected'
  }

  // Use the useState hooker inside useContent to update global variable currentCard when a card is selected
  const handleCardSelection = () => {
    setCurrentCard(card)
  }


  return (
    <button className={ClassList} onClick={handleCardSelection} aria-label={`Select to ${card.type} ${card.amount} of miles with ${card.cost} dollars.`}>
        <div className="button-content">
            <p>{card.type.charAt(0).toUpperCase()+ card.type.slice(1)} {card.amount} miles</p>
            <p><b>${card.cost.toFixed(2)}</b></p>
        </div>
    </button>
  )
}
