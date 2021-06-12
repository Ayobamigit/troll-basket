import React from 'react'
import Layout from '../../components/Layout/Layout'
import Navigation from '../../components/Navigation/Navigation'
import Image from '../../assets/img/prod-img.png'
import ProductName from '../../components/ProductViewComponents/ProductName'
import ProductDescription from '../../components/ProductViewComponents/ProductDescription'
import Review from '../../components/ProductViewComponents/Review'
import CartSuccess from '../../components/CartSuccess/CartSuccess'

const Product = () => {
    return (
        <Layout>
            <Navigation 
                title="Details"
                cartItems="9"
            />
            <div className="cart-padding">
                <CartSuccess />
            </div>
            <div className="product-details">
                <div className="product-image">
                    <img src={Image} alt="img" className="img-prod" />
                </div>
                <ProductName />
                <ProductDescription />
                <Review />
            </div>

            <div className="product-footer">
                <div className="foot-grid">
                    <div className="btn-primary size">
                        Add to cart
                    </div>
                    <div className="btn-trans">
                    Wishlist
                    </div>
                </div>
                
            </div>
        </Layout>
    )
}

export default Product
