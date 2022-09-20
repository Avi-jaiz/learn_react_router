import '../Styles/quoteForm.css';
import { useState } from 'react';
import { Prompt } from 'react-router-dom';

const QuoteForm =(props)=>
{
  const [text,setText] =useState("");
  const [author,setAuthor]=useState("");
  const[isEntered,setIsEntered] = useState(false);

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

 const formFocusHandler =()=>{
 
   setIsEntered(true);
 }

 const handlePrompt =()=>{
    setIsEntered(false)
 }

    return(


        <>
        <Prompt when={isEntered} message={()=>'Are you sure to leave?'}/>
<form className="form" onFocus={formFocusHandler} onSubmit={submitHandler}>
    <label>
        Title
    </label>
    <input type='text' onChange={textHandler} value={text}/>

    <label>
        Author
    </label>
    <input type='text' onChange={authorHandler} value={author}/>

    <button className="submit" onClick={handlePrompt}>Submit</button>



</form>
</>
    )
}

export default QuoteForm;