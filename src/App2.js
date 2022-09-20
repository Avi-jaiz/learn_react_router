import { Route , Switch ,Redirect } from "react-router-dom";
import AllQuotes from "./Compo2/AllQuotes";
import NewQuote from "./Compo2/NewQuote";
import NotFoundPage from "./Compo2/NotFoundPage";
import QuoteDetail from "./Compo2/QuoteDetail";


import Layout from "./Layout/Layout";


const App2 =()=>
{
return(
    <div className="app">
<Layout>

        
   <Switch>


<Route path='/' exact>
    <Redirect to='/quotes'>
<AllQuotes />

    </Redirect>

</Route>

<Route path='/quotes' exact>
<AllQuotes />
</Route>

<Route path='/quote/:quoteId'>
    <QuoteDetail />
</Route>
<Route path='/new-quote'>
<NewQuote />
</Route>


<Route path='*'>
<NotFoundPage />
</Route>

   </Switch>
   
   
   </Layout>
   </div>
)
}

export default App2;