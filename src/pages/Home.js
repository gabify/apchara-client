import { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import ProductCard from "../components/ProductCard";
import TopNav from "../components/TopNav";

const Home = () => {
    const [products, setProducts] = useState(null)

    useEffect(() =>{
        const fetchProduct = async() =>{
            const response = await fetch('http://127.0.0.1:5000/api/v1/product/')
            const result = await response.json()

            if(response.ok){
                setProducts(result)
            }
        }

        fetchProduct()
    }, [])

    return ( 
        <div>
            <TopNav/>
            <div className="product mt-3">
                <div className="px-5 py-2">
                    <div className="row">
                        {products && products.map((product) =>(
                            <ProductCard product={product} key={product._id}/>
                        ))}
                        
                    </div>
                </div>
            </div>
            <BottomNav/>
        </div>
     );
}
 
export default Home;