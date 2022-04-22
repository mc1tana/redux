import {get} from "../services/data"

  let tab=[]
  get().then((res) => {
    res.data.map((e)=>{
       return( tab.push(e))
    }); 
  });
const INITIAL_STATE=tab; 


console.log(INITIAL_STATE)
function ArticleReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'ADD_ARTICLE': {
            return {
                ...state,
                card: action.payload

            }

        }
        default: {

            return state;
        }
    }
}
export default ArticleReducer