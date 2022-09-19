import { Route , Switch ,Redirect } from "react-router-dom";
import AllQuotes from "./Compo2/AllQuotes";
import NewQuote from "./Compo2/NewQuote";
import QuoteDetail from "./Compo2/QuoteDetail";
import './App.css';


const App2 =()=>
{
return(

    <div className="App2">
   <Switch>

<Route path='/' exact>
    <Redirect to='/quotes'>
<AllQuotes />
    </Redirect>

</Route>

<Route path='/quotes' exact>
<AllQuotes />
</Route>

<Route path='/quotes/:quoteId'>
    <QuoteDetail />
</Route>
<Route path='/new-quote'>
<NewQuote />
</Route>


   </Switch>
   </div>
)
}

export default App2;