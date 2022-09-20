import QuoteList from "./QuoteList";

const DUMMY_DATA = [
    {id:'q1',author:'avishekh', text:'React is awesome'},
    {id:'q2',author:'rakesh', text:'Maths is awesome'},
    {id:'q3',author:'pranjal', text:'Economics is awesome'},
    {id:'q4',author:'chintu', text:'MBA is awesome'}
]



const AllQuotes =(props)=>
{
   
    return(
      <>
      this is new quote

<QuoteList quotes={DUMMY_DATA}/>

</>
        
    )
}

export default AllQuotes;