import QuoteItem from "./QuoteItem";
import '../Styles/quoteList.css';

const QuoteList =props=>
{

    return(
<div className="quoteList">
{props.quotes.map((item)=>
    {
        return(
            <QuoteItem 
            id={item.id}
            key={item.id}
            text={item.text}
            author={item.author}
            />
        )
    })}

</div>
    )
}

export default QuoteList;