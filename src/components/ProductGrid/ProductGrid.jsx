import React from 'react';
import './product.css';
import Hand from '../../assets/img/hand.png';
import Shoe from '../../assets/img/shoe.png';
import Coke from '../../assets/img/coke.png';
import Bag from '../../assets/img/bag.png';
import Paper from '../../assets/img/paper.png';
import Box from '../../assets/img/box.png';

const ProductGrid = () => {
    return (
        <div className="product-grid-container">
            <div className="product-grid-item">
               <img src={Hand} alt="img"  className="img-size" /> 
                <div>
                    <p className="prod-desc name">Free sample small tote bag gucci fen...</p>
                    <h4 className="price">₦900 - ₦1,500</h4>
                    <p className="prod-desc qty">MOQ 4 (pieces)</p>
                </div>
            </div>
            <div className="product-grid-item">
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
            </div>
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
