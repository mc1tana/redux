import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleReducer from '../../Reducer/ArticleReducer';
const Form = () => {
    const [title, setCardTitle] = useState();
    const [body, setCardBody] = useState();
    const {cards} = useSelector(state => ({
        ...state.ArticleReducer
        
    }))
    console.log(cards+"jhkdsf")
    const dispatch = useDispatch();

   function hightid(cards){
            let hight=0

            cards.foreach((e)=>{
                return(e.id>=hight ? hight=e.id : hight=1)
            })
   }
    

    const addCartDataFunc = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_ARTICLE",
            payload: {
                    userId:5,
                    id: hightid(cards),
                    title:title,
                    body:body
            }
        })}
    return (
        <div className='d-flex justify-content-center w-100'>
        <form className='border rounded  shadow-lg p-3 mt-3 w-50'>
            
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Titre</label>
            <input onChange={(e)=>setCardTitle(e.target.value)} type="text"  name="title"class="form-control" id="exampleFormControlInput1" placeholder="Nom De L'Article"/>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description Article</label>
          <textarea onChange={(e)=>setCardBody(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3" >Description De L'Article</textarea>
        </div>
            <button type="submit" onClick={(e)=>addCartDataFunc(e)} class="btn btn-primary">Submit</button>
        </form>
        </div>
    );
};

export default Form;