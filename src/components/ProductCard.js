import {Card} from 'react-bootstrap'

const ProductCard = ({product}) => {

    return ( 
        <div className="col col-12 mb-3" style={{cursor: "pointer"}}>
            <Card>
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Subtitle>Stock: {product.stock}</Card.Subtitle>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
     );
}
 
export default ProductCard;