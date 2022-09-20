import QuoteItem from "./QuoteItem";
import '../Styles/quoteList.css';
import { useHistory , useLocation } from "react-router-dom";



const QuoteList =props=>
{
  const sortQuotes = (quotes,ascending)=>
  {
        return quotes.sort((quoteA,quoteB)=>
        {
            if(ascending)
            {
                return quoteA.id >quoteB.id  ? 1:-1
            }
            else{
                return quoteA.id<quoteB.id ? 1:-1
            }
        })
  }

   

    const history = useHistory();
    const location =useLocation();
    const querryParams = new URLSearchParams(location.search);


    
const isSortingAscending = querryParams.get('sort')==='asc';



    const changeSortingHandler =()=>
    {
         history.push('/quotes?sort=' + (isSortingAscending ? 'dsc': 'asc'))

         sortQuotes(props.quotes,isSortingAscending)
    }

    return(
<div className="quoteList">
    <button onClick={changeSortingHandler} className='btn'>Sort {isSortingAscending ? 'descending': 'ascending'}</button>
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