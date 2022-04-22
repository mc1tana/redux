import React from 'react';

const CardElement = (props) => {
   
    return (
        <div class="card-body">
                <h5 class="card-title">{props.card.title}</h5>
                <p class="card-text"> <button className='btn btn-primary'>Detail</button> </p>
                        
        </div>
    );
};

export default CardElement;