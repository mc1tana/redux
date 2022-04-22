import React, { useEffect, useState } from 'react';
import CardsElement from '../../component/Cards/CardsComponent';
import { useSelector } from "react-redux"
const Home = () => {
    const cards = useSelector(state => state)
    //const [cards,setCard] = useState()
  console.log(cards)
    return (
        <div>
            <h3>Tous Les Articles</h3>
            <CardsElement cards={cards}/>
        </div>
    );
};

export default Home;