import React, {useState} from 'react';
import { useHistory } from 'react-router';
import CartItem from '../../components/CartItem/CartItem';
import Layout from '../../components/Layout/Layout';
import Navigation from '../../components/Navigation/Navigation';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import Hand from '../../assets/img/hand.png';
import Shoe from '../../assets/img/shoe.png';
import Coke from '../../assets/img/coke.png';
import EmptyCart from '../../components/CartItem/EmptyCart';

const Cart = () => {
    const {cartItem, cartProduct} =  JSON.parse(localStorage.getItem('details'))

    const [state, setState] =useState({
        qty: 1,
        price: 15000,
        total:15000,
        cart: cartItem
    })
    const products = [
        {id: "1", name: "Hand Massager 2019", description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events", image: Hand, price: "45,000 - 90,000", location: "Lagos", stock: 5},
        {id: "2", name: "NIKE Huararche 2019", description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events", image: Shoe, price: "5,000 - 7,000", location: "Lagos", stock: 7},
        {id: "3", name: "Coca Cola 2019", description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events", image: Coke, price: "4,000 - 9,000", location: "Lagos", stock: 3},
    ];

    const history = useHistory();

    const onCheckout = () =>{

        //Trying to update the localstorage for the cart
        const details = {
            cartItem: 0
        }

        localStorage.setItem('details', JSON.stringify(details))

        history.push("/checkout")
    }

    const onIncreaseCart = () =>{
        let currentQty = qty;
        let currentPrice = price;
        let totalPrice = total;

        //On every click, increase the quantity and price
        currentQty = currentQty + 1;
        currentPrice = totalPrice + currentPrice;


        setState(state=>({
            ...state,
            qty: currentQty,
            total: currentPrice
        }))
    }

    const onDecreaseCart = () =>{
        let currentQty = qty;
        let totalPrice = total;
        let prevPrice = price;

        if(currentQty === 1){
            return null
        }else{
            //On every click, decrease the quantity and price
            currentQty = currentQty - 1;
            totalPrice = totalPrice - prevPrice;


            setState(state=>({
                ...state,
                qty: currentQty,
                total: totalPrice
            }))
        }
 
    }

    const onDeleteItem = () =>{

        //Trying to update the localstorage for the cart
        const details = {
            ...JSON.parse(localStorage.getItem('details')),
            cartItem: 0,
            cartProduct: null
        }

        setState({
            ...state,
            cart:0
        })

        localStorage.setItem('details', JSON.stringify(details))
    }

    const {qty, price, total, cart} = state
    return (
        <Layout>
            <Navigation title="Carts" />
            {
                cart ?
                <div className="product-details">
                    <div className="cart-section">
                        <CartItem 
                            name={cartProduct.name} 
                            image={cartProduct.image} 
                            qty = {qty}
                            price = {price}
                            onDecreaseCart={onDecreaseCart}
                            onIncreaseCart={onIncreaseCart}
                            onDeleteItem={onDeleteItem}
                        />
                        {/* <CartItem name="NIKE Huararche 2019" /> */}
                    </div>

                    <div className="product-footer mb-04">
                        <div className="desc mb-16">
                            <p className="prod-header">Subtotal</p>
                            <p className="prod-header">₦ {total}.00</p>
                        </div>
                        <div className="desc mb-16">
                            <p className="prod-header">Total</p>
                            <p className="prod-price sm">₦ {total}.00</p>
                        </div>
                        <div>
                            <div className="btn-primary size-bg block" onClick={onCheckout}>
                                Checkout
                            </div>
                        </div>
                        
                    </div>
                </div>
                :
                <div className="product-details">
                    <div className="cart-section">
                        <EmptyCart />
                    </div>

                </div>
            }
            

            <div className="product-footer">
                <div className="desc">
                    <h3 className="prod-header">Recently viewed</h3>
                    <p className="prod-header prod-link" onClick={()=>history.push('/')}>View all</p>
                </div>

                <ProductGrid products={products} />
            </div>
        </Layout>
    )
}

export default Cart
