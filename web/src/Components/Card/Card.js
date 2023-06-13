import React from 'react'
import CardItem from './CardItems/CardItem'
import './Card.css';
import Cards1 from './Cards Json Files/2Cards.json';
import Cards2 from './Cards Json Files/3Cards.json';


const Card = () => {
    return (
        <>
            <div className="cards">
                <h1>Check out these EPIC Destinations!</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            {
                                Cards1.map((cards, index) => {
                                    return (
                                        <CardItem
                                            key={index}
                                            src={cards.src}
                                            text={cards.text}
                                            label={cards.label}
                                            path={cards.path}
                                        />
                                    )
                                })
                            }
                        </ul>
                        <ul className='cards__items'>
                            {
                                Cards2.map((cards, index) => {
                                    return (
                                        <CardItem
                                            key={index}
                                            src={cards.src}
                                            text={cards.text}
                                            label={cards.label}
                                            path={cards.path}
                                        />
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
