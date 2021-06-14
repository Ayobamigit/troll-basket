import React, { createContext, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import Categories from '../../components/Categories/Categories'
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Layout from '../../components/Layout/Layout'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import Search from '../../components/Search/Search'
import Hand from '../../assets/img/hand.png';
import Shoe from '../../assets/img/shoe.png';
import Coke from '../../assets/img/coke.png';
import Bag from '../../assets/img/bag.png';
import Paper from '../../assets/img/paper.png';
import Box from '../../assets/img/box.png';

export const HomeContext = createContext();
const Home = () => {
    let products = [
        {id: "1", name: "Hand Massager", description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events", image: Hand, price: "45,000 - 90,000", location: "Lagos", stock: 5},
        {id: "2", name: "NIKE Huararche 2019", description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events", image: Shoe, price: "5,000 - 7,000", location: "Abuja", stock: 7},
        {id: "3", name: "2019 Vintage Coca Cola", description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events", image: Coke, price: "4,000 - 9,000", location: "Oyo", stock: 3},
        {id: "4", name: "Paper Bag", description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events", image: Bag, price: "52,000 - 74,000", location: "Lagos", stock: 6},
        {id: "5", name: "Imported Cheese", description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events", image: Paper, price: "45,000 - 120,000", location: "Kaduna", stock: 32},
        {id: "6", name: "Designer Box", description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events", image: Box, price: "56,000 - 90,000", location: "Jos", stock: 35},
        // {id: "7", name: "NIKE Huararche 2019", description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events", image: "some_image_path", price: "25,000 - 00,000", location: "Lagos", stock: 20},
        // {id: "8", name: "NIKE Huararche 2019", description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events", image: "some_image_path", price: "900 - 1200", location: "Lagos", stock: 50},
        // {id: "9", name: "NIKE Huararche 2019", description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events", image: "some_image_path", price: "45,000 - 90,000", location: "Lagos", stock: 15},
    ];

    const [searchValues, setSearchValues] = useState({
        name: '',
        location: ''
    })

    const onChange = (e) => {
        setSearchValues({
            ...searchValues,
            [e.target.name] : e.target.value
        })
    }

    // Filter by Product name
    products = products.filter(value =>{
        return(value.name.toLowerCase()).includes(searchValues.name.toLowerCase())
    })

    // Filter by Product location
    products = products.filter(value =>{
        return(value.location.toLowerCase()).includes(searchValues.location.toLowerCase())
    })

    return (
        <HomeContext.Provider value={{
            onChange,
            searchValues
        }}>
            <Layout>
            <div className="home-header">
                <h5 className="home-heading">Trollbasket</h5>
            </div>

            <HeaderNav />
            <Search />
            <Banner />
            <Categories />
            <ProductGrid products={products} />
            </Layout>
        </HomeContext.Provider>
    )
}

export default Home
