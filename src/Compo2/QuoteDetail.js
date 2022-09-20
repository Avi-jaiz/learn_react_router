import { Route, useParams  } from "react-router-dom";
import Comments from "./Comments";
import '../Styles/quoteDetails.css';

const QuoteDetail =()=>
{
    const DUMMY_DATA = [
        {id:'q1',author:'avishekh', text:'React is awesome'},
        {id:'q2',author:'rakesh', text:'Maths is awesome'},
        {id:'q3',author:'pranjal', text:'Economics is awesome'},
        {id:'q4',author:'chintu', text:'MBA is awesome'}
    ]

 const params = useParams()

 const quotes = DUMMY_DATA.find(quote=>quote.id===params.quoteId);

if(!quotes)
{
    return <p>No Quote Found!!!</p>
}

    return(
        <div className="quoteDetails">
<h2>Quotes Details</h2>
<h1>{quotes.author}</h1>
<p>{quotes.text}</p>

<Route to={`/quote/${params.quoteId}/comments`} exact>
<Comments />

</Route>

        </div>
    )
}

export default QuoteDetail;