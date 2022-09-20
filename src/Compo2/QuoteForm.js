import '../Styles/quoteForm.css';
import { useState } from 'react';

const QuoteForm =(props)=>
{
  const [text,setText] =useState("");
  const [author,setAuthor]=useState("");

 const textHandler =(e)=>
 {
      setText(e.target.value);

 }

 const authorHandler =(e)=>
 {
    setAuthor(e.target.value)
 }

 const submitHandler =(e)=>
 {
     e.preventDefault();
props.onAddQuote({text:text,author:author})

     setAuthor("");
     setText("");
     
 }

    return(
<form className="form">
    <label>
        Title
    </label>
    <input type='text' onChange={textHandler} value={text}/>

    <label>
        Author
    </label>
    <input type='text' onChange={authorHandler} value={author}/>

    <button className="submit" onClick={submitHandler}>Submit</button>



</form>
    )
}

export default QuoteForm;