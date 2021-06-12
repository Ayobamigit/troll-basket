import React from 'react'
import CartItem from '../../components/CartItem/CartItem'
import Layout from '../../components/Layout/Layout'
import Navigation from '../../components/Navigation/Navigation'
import ProductGrid from '../../components/ProductGrid/ProductGrid'

const Cart = () => {
    return (
        <Layout>
            <Navigation title="Carts" />
            <div className="product-details">
                <div className="cart-section">
                    <CartItem name="2019 Vintage Coca Cola" />
                    <CartItem name="NIKE Huararche 2019" />
                </div>

                <div className="product-footer mb-04">
                    <div className="desc mb-16">
                        <p className="prod-header">Subtotal</p>
                        <p className="prod-header">N18,099.09</p>
                    </div>
                    <div className="desc mb-16">
                        <p className="prod-header">Total</p>
                        <p className="prod-price sm">N18,099.09</p>
                    </div>
                    <div>
                        <div className="btn-primary size-bg block">
                            Checkout
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="product-footer">
                <div className="desc">
                    <h3 className="prod-header">Recently viewed</h3>
                    <p className="prod-header prod-link">View all</p>
                </div>

                <ProductGrid />
            </div>
        </Layout>
    )
}

export default Cart
