import QuoteForm from "./QuoteForm";
import '../Styles/newQuote.css';
import { useState } from "react";

const NewQuote =(props)=>
{
  const [quote,setQuote] = useState([]);
 const quoteAddingHandler=(text,author)=>
 {
    setQuote((prevState)=>{
        return [...prevState, {text,author}]
    })
 }



    return(
        <div className="newQuote">
<h2>New Quotes</h2>
<QuoteForm onAddQuote={quoteAddingHandler}/>



        </div>
    )
}

export default NewQuote;