import QuoteForm from "./QuoteForm";
import '../Styles/newQuote.css';
import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewQuote =(props)=>
{
  const [quote,setQuote] = useState([]);
const history = useHistory();



 const quoteAddingHandler=(text,author)=>
 {
    setQuote((prevState)=>{
        return [...prevState, {text,author}]
    })

    history.push('./quotes')
 }



    return(
        <div className="newQuote">
<h2>New Quotes</h2>
<QuoteForm onAddQuote={quoteAddingHandler}/>



        </div>
    )
}

export default NewQuote;