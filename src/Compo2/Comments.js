
import '../Styles/comments.css';
const Comments =(props)=>
{
console.log(props)

    return(
        <div className="comments">
            <h2>User Comments</h2>
            <button>Add a comment</button>
            <p>This is a comment</p>
        </div>
    )
}

export default Comments;