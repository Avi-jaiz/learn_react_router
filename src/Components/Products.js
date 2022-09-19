import { Link } from "react-router-dom"

 const  Products =()=>{
    return(
        <>
        <h2>Products Page</h2>
        <ul>
          <Link  to='/product/p1'><li>Product 1</li></Link>
          
          <Link to='/product/p2'><li>Product 2</li></Link>
          <Link to ='/product/p3'><li>Product 3</li></Link>
        </ul>
        
        </>
        
    )
}

export default Products
