import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "./Comments";
import "../Styles/quoteDetails.css";

const QuoteDetail = () => {
  const DUMMY_DATA = [
    { id: "q1", author: "avishekh", text: "React is awesome" },
    { id: "q2", author: "rakesh", text: "Maths is awesome" },
    { id: "q3", author: "pranjal", text: "Economics is awesome" },
    { id: "q4", author: "chintu", text: "MBA is awesome" },
  ];

  const params = useParams();
  const routeMatch =                useRouteMatch()
console.log('routematch'+routeMatch)
  const quotes = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  if (!quotes) {
    return <p>No Quote Found!!!</p>;
  }

  return (
    <div className="quoteDetails">
      <div className="quoteCard">
        <div className="quote">
          <h1>By {quotes.author}</h1>
          <p>Quote: {quotes.text}</p>
        </div>

        <div className="quoteLoadBtn">
          <Route path={`/quote/${params.quoteId}`} exact>
            <Link
              to={`/quote/${params.quoteId}/comments`}
              className="commentBtn"
            >
              Load Comments
            </Link>
          </Route>
        </div>

        <div className="comment">
          <Route path={`/quote/${params.quoteId}/comments`}>
            <Comments />
          </Route>
        </div>
      </div>
    </div>
  );
};

export default QuoteDetail;
