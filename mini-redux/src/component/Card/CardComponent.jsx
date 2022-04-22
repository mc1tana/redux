import React from 'react';
import { useNavigate } from "react-router-dom";

const CardElement = (props) => {
  
    const navigate= useNavigate()
    return (
        <div class="card-body">
                <h5 class="card-title">{props.card.title}</h5>
                <p class="card-text"> <button className='btn btn-primary'   onClick={() => navigate("/detail",{id:props.card.id})}>Detail</button> </p>
                        
        </div>
    );
};

export default CardElement;