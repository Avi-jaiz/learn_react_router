import { Route, useParams  } from "react-router-dom";
import Comments from "./Comments";

const QuoteDetail =()=>
{
    const params = useParams()


    return(
        <div>
<h2>Quotes Details</h2>
<h1>{params.quoteId}</h1>
<Route to={`/quotes/${params.quoteId}/comments`} exact>
<Comments />
</Route>

        </div>
    )
}

export default QuoteDetail;