import '../Styles/quoteItem.css';
import { Link } from 'react-router-dom';

const QuoteItem =props=>
{

    return(
<div className="quoteItem">

<div className='quoteText'>
<h4>{props.text}</h4>


<p>by {props.author}</p>
</div>
<div className='quoteBtn'>
<Link className='btn' to={`/quote/${props.id}`}>View full screen</Link>
</div>


</div>
    )
}

export default QuoteItem;