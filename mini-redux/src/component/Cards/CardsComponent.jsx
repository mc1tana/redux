import React from 'react';
import CardElement from '../Card/CardComponent';
import "./Cards.css"
const CardsElement = (props) => {
    
    return (
        <div className='d-flex justify-content-center'>
        <div className="d-flex justify-content-around flex-wrap pe-5 ps-5 pt-3 w-70">
            {props.cards?.map((card,index)=>{
             return(   
             <div class="card w-20 border rounded  shadow-lg m-1 " key={index}>
                    <CardElement card = {card}/>
                 </div>)
            })}
        
        </div>
        </div>
    );
};

export default CardsElement;