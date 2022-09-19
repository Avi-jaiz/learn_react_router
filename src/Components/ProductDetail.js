import { useParams } from "react-router-dom";

const ProductDetail =()=>
{

     const params=useParams()
     


    return(
        <h2>Product Detail 

          <h2>{params.productid}</h2>  
        </h2>
    )
}

export default ProductDetail;