import React from 'react';
import './product.css';
import { useHistory } from 'react-router';

const ProductGrid = (props) => {
    const history = useHistory();

    const onViewProduct = (id, image, name, price, description) =>{

        //Trying to store the selected product to the storage to view on the product view page
        const details = {
            ...JSON.parse(localStorage.getItem('details')),
            productDetails:{
                image,
                name,
                price,
                description
            }
        }

        localStorage.setItem('details', JSON.stringify(details))

        history.push(`/product/${id}`)
    }
    
    return (
        <div className="product-grid-container">
            {
                props.products?
                props.products.map((product, i)=>{
                    return (
                        <div className="product-grid-item" onClick={()=>onViewProduct(product.id, product.image, product.name, product.price, product.description)} key={i}>
                        <img src={product.image} alt="img"  className="img-size" /> 
                            <div>
                                <p className="prod-desc name">{product.name}</p>
                                <h4 className="price">{product.price}</h4>
                                <p className="prod-desc qty">MOQ {product.stock} (pieces)</p>
                            </div>
                        </div>
                    )
                })
                : null
            }
            
            {/* <div className="product-grid-item">
               <img src={Coke} alt="img" className="img-size" /> 
               <div>
                    <p className="prod-desc name">Free sample small tote bag gucci fen...</p>
                    <h4 className="price">₦900 - ₦1,500</h4>
                    <p className="prod-desc qty">MOQ 4 (pieces)</p>
                </div>
            </div>
            <div className="product-grid-item">
               <img src={Shoe} alt="img" className="img-size" /> 
               <div>
                    <p className="prod-desc name">Free sample small tote bag gucci fen...</p>
                    <h4 className="price">₦900 - ₦1,500</h4>
                    <p className="prod-desc qty">MOQ 4 (pieces)</p>
                </div>
            </div> */}
            {/* <div className="product-grid-item">
               <img src={Paper} alt="img" className="img-size" /> 
               <div>
                    <p className="prod-desc name">Free sample small tote bag gucci fen...</p>
                    <h4 className="price">₦900 - ₦1,500</h4>
                    <p className="prod-desc qty">MOQ 4 (pieces)</p>
                </div>
            </div>
            <div className="product-grid-item">
               <img src={Bag} alt="img" className="img-size" /> 
               <div>
                    <p className="prod-desc name">Free sample small tote bag gucci fen...</p>
                    <h4 className="price">₦900 - ₦1,500</h4>
                    <p className="prod-desc qty">MOQ 4 (pieces)</p>
                </div>
            </div>
            <div className="product-grid-item">
               <img src={Box} alt="img" className="img-size" /> 
               <div>
                    <p className="prod-desc name">Free sample small tote bag gucci fen...</p>
                    <h4 className="price">₦900 - ₦1,500</h4>
                    <p className="prod-desc qty">MOQ 4 (pieces)</p>
                </div>
            </div> */}
        </div>
    )
}

export default ProductGrid
