import React, { createContext, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import Navigation from '../../components/Navigation/Navigation'
import ProductName from '../../components/ProductViewComponents/ProductName'
import ProductDescription from '../../components/ProductViewComponents/ProductDescription'
import Review from '../../components/ProductViewComponents/Review'
import CartSuccess from '../../components/CartSuccess/CartSuccess'
import Image from '../../assets/img/prod-img.png';




export const ProductContext = createContext();

const Product = () => {
    const {cartItem, productDetails} = JSON.parse(localStorage.getItem('details'))

    const [state, setState] = useState({
        addCart: false
    })

    const addToCart = () =>{
        setState(state=>({
            ...state,
            addCart: true
        }))

        //Trying to update the localstorage for the cart
        const details = {
            ...JSON.parse(localStorage.getItem('details')),
            cartItem: cartItem+1,
            cartProduct: productDetails
        }

        localStorage.setItem('details', JSON.stringify(details))
        // console.log( JSON.parse(localStorage.getItem('details')))

    }

    const cancelSuccess = ()=>{
        setState(state=>({
            ...state,
            addCart: false
        })) 
    }
    
    const {addCart} = state;
    return (
        <ProductContext.Provider value={{
            productDetails,
            cancelSuccess
        }}>
            <Layout>
                <Navigation 
                    title="Details"
                    cartItem={cartItem}
                    cartItems = "true"
                />
                {
                    addCart ?
                        <div className="cart-padding">
                            <CartSuccess cancelSuccess={cancelSuccess} />
                        </div>
                    :
                    null
                }
                
                <div className="product-details">
                    <div className="product-image">
                        <img src={productDetails ? productDetails.image: Image} alt="img" className="img-prod" />
                    </div>
                    <ProductName />
                    <ProductDescription />
                    <Review />
                </div>

                <div className="product-footer">
                    <div className="foot-grid">
                        <div className="btn-primary size" onClick={addToCart}>
                            Add to cart
                        </div>
                        <div className="btn-trans">
                        Wishlist
                        </div>
                    </div>
                    
                </div>
            </Layout>
        </ProductContext.Provider>
    )
}

export default Product
